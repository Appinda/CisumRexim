class Song{
    constructor(file){
        this.file = file;
        this.url = URL.createObjectURL(this.file);
    }
}

class SongList{
    constructor(){
        this.list = [];
        this.selectedSongIndex = -1;
        this.selectedPage = 0;
        this.pagecount = 1;
    }
    
    init(){
        $('.card.empty span').text(emptyCardText);
        $('#filebrowser').change(songlist.processFiles);
    }
    selectFiles(){
        $('#filebrowser').click();
    }
    processFiles(event){
        let files = event.target.files;
        for (var i = 0, f; f = files[i]; i++) {
            songlist.add(new Song(f));
        }
        songlist.update();
    }
    add(song){
        if(song.constructor.name !== 'Song') return false;
        return this.list.push(song);
    }
    delete(position){
        return this.list.splice(position, 1);
    }
    empty(){
        for(let s = 0; s < 9; s++){
            $("#page div.col-4[name=placeholder_" + s + "]").html(`<div class="card empty"><div class="card-body" onclick="songlist.selectFiles();"><span>${emptyCardText}</span></div></div>`);   
        }
    }
    update(){
        // Set pagecount
        this.pagecount = Math.ceil(this.list.length / 9);
        if(this.pagecount == 0) pagecount = 1;
        // Empty each placeholder
        this.empty();
        // Place songs from songlist
        let index = this.selectedPage * 9;
        let targetsongs = songlist.list.slice(index, index + 9);
        for (var i = 0, song; song = targetsongs[i]; i++) {
            $("#page div.col-4[name=placeholder_" + i + "]").html(`<div class="card song"><div class="card-body" onclick="songlist.selectPlaceholder(${i});"><span>${i + 1}</span><h5 class="card-title">${'name'}</h5><h6 class="card-subtitle mb-2 text-muted">${song.file.name}</h6><p class="card-text">${'duration'}</p></div></div>`);   
        }
        $('#page #pagebar #currentPage').text(`${this.selectedPage + 1} / ${this.pagecount}`);
    }
    selectSong(index){
        // If aleady selected, return
        if(index < 0) index = songlist.list.length - 1;
        if(index == songlist.list.length) index = 0; 
        if(this.selectedSongIndex == index) return false;
        $(`${Playbar.id} #currentSongInfo`).html(`<b>${songlist.list[index].file.name}</b> (${songlist.list[index].file.name})`);
        this.stop();
        Playbar.show();
        Playbar.graph.load(songlist.list[index].url);
        if(index >= (this.selectedPage + 1) * 9) this.nextPage();
        if(index < this.selectedPage * 9) this.prevPage();
        $(`#page div.col-4[name=placeholder_${this.selectedSongIndex}] .card`).removeClass('selected');
        $(`#page div.col-4[name=placeholder_${index % 9}] .card`).addClass('selected');
        this.selectedSongIndex = index;
    }
    selectPage(page){
        if(page < 0) this.selectedPage = this.pagecount - 1;
        else if(page > this.pagecount - 1) this.selectedPage = 0;
        else this.selectedPage = page;
        this.update();
    }
    selectPlaceholder(index){
        if(index < 0 || index > 9) return false;
        this.selectSong(index + (9 * this.selectedPage));
    }
    play(){
        $("#btn_play").text("pause_circle_filled");
        $("#btn_play").removeClass("stopped").removeClass("paused").addClass("playing");
        Playbar.graph.play();
    }
    playpause(){
        console.log('playpause');
        if(Playbar.graph.isPlaying()) this.pause();
        else this.play();
            
    }
    stop(){
        $("#btn_play").text("play_circle_filled");
		$("#btn_play").removeClass("playing").removeClass("paused").addClass("stopped");
        Playbar.graph.stop();
        Playbar.updateTime();
    }
    pause(){
        $("#btn_play").text("play_circle_filled");
        $("#btn_play").removeClass("playing").addClass("paused");
        Playbar.graph.pause();
    }
    setVolume(vol){
        Playbar.graph.setVolume(vol/100);
        $('#volumeText').text(vol+'%')
    }
    nextSong(){
        this.selectSong(this.selectedSongIndex + 1);
    }
    prevSong(){
        this.selectSong(this.selectedSongIndex - 1);
    }
    toggleLoop(){
        if(Playbar.graph.loop) $(`${Playbar.id} .controlbtn#loop`).removeClass('selected');
        else $(`${Playbar.id} .controlbtn#loop`).addClass('selected');
        Playbar.graph.loop = !Playbar.graph.loop; 
    }
    toggleAutoplay(){
        if(Playbar.graph.autoplay) $(`${Playbar.id} .controlbtn#autoplay`).removeClass('selected');
        else $(`${Playbar.id} .controlbtn#autoplay`).addClass('selected');
        Playbar.graph.autoplay = !Playbar.graph.autoplay; 
    }
    nextPage(){
        this.selectPage(this.selectedPage + 1);
    }
    prevPage(){
        this.selectPage(this.selectedPage - 1);
    }
}

class Playbar{
    static convertSeconds(s){
        s = Math.round(s * 1000);
        let d = new Date(s);
        let m = {
            h: (d.getHours() - 1).toString(),
            m: d.getMinutes().toString(),
            s: d.getSeconds().toString()
        }
        for(let t in m){
            if(m[t].length == 1) m[t] = '0' + m[t];
        }
        return [m['h'], m['m'], m['s']];
    }
    static getPercent(a, b){
        if(a == 0 || b == 0) return 0;
        return Math.round(a / b * 100);
    }
    static init(){
        this.visible = false;
        this.id = '#playbar';
        this.graph = WaveSurfer.create({
            container: `${Playbar.id} #waveform .graph`,
            waveColor: '#ccc',
            progressColor: 'black'
        });
        this.graph.autoplay = false;
        this.graph.loop = false;
        this.graph.on('ready', function () {
            if(Playbar.graph.autoplay) songlist.play();
            Playbar.updateTime();
        });
        this.graph.on('audioprocess', function () {
            Playbar.updateTime();
        });
        this.graph.on('seek', function () {
            Playbar.updateTime();
        });
        this.graph.on('finish', function () {
            if(Playbar.graph.loop){
                songlist.play();
            }else{
                songlist.next();   
            }
        });
        
    }
    static show(time = 500, easing = 'snap'){
        if (this.visible) return false;
		$(this.id).transition({ y: '0px' }, time, easing);
		this.visible = true;
    }
    static hide(time = 1000, easing = 'snap'){
        songlist.stop();
        songlist.selectedSongIndex = -1;
        if (!this.visible) return false;
		$(this.id).transition({ y: '300px' }, time, easing);
		this.visible = false;
    }
    
    static updateTime(set){
        let curr = Playbar.convertSeconds(Playbar.graph.getCurrentTime());
        let dest = Playbar.convertSeconds(Playbar.graph.getDuration());    
        let perc = Playbar.getPercent(this.graph.getCurrentTime(), this.graph.getDuration());
        if(dest[0] > 0){
            //Hours
            $(`${Playbar.id} #waveform .timer`).text(`${curr[0]}:${curr[1]}:${curr[2]} / ${dest[0]}:${dest[1]}:${dest[2]} (${perc}%)`);
            
        }
        else{
            //Minutes
            $(`${Playbar.id} #waveform .timer`).text(`${curr[1]}:${curr[2]} / ${dest[1]}:${dest[2]} (${perc}%)`);
        }
        return true;
    }
    
    static setupKeys(){
        this.keybindings = {
            'playpause': {key: 'NumpadEnter', event: `songlist.playpause()`},
            'stop': {key: 'NumpadAdd', event: `songlist.stop()`},
            'pageUp': {key: 'ArrowUp', event: `songlist.nextPage()`},
            'pageDown': {key: 'ArrowDown', event: `songlist.prevPage()`},
            'prevSong': {key: 'ArrowLeft', event: `songlist.prevSong()`},
            'nextSong': {key: 'ArrowRight', event: `songlist.nextSong()`},
            'Placeholder1': {key: 'Numpad7', event: `songlist.selectPlaceholder(7)`},
            'Placeholder2': {key: 'Numpad8', event: `songlist.selectPlaceholder(8)`},
            'Placeholder3': {key: 'Numpad9', event: `songlist.selectPlaceholder(9)`},
            'Placeholder4': {key: 'Numpad4', event: `songlist.selectPlaceholder(4)`},
            'Placeholder5': {key: 'Numpad5', event: `songlist.selectPlaceholder(5)`},
            'Placeholder6': {key: 'Numpad6', event: `songlist.selectPlaceholder(6)`},
            'Placeholder7': {key: 'Numpad1', event: `songlist.selectPlaceholder(1)`},
            'Placeholder8': {key: 'Numpad2', event: `songlist.selectPlaceholder(2)`},
            'Placeholder9': {key: 'Numpad3', event: `songlist.selectPlaceholder(3)`}
        }
        $('body').keyup(function(e) {
          Playbar.keyPress(e.originalEvent.code);
        });
    }
    static keyPress(key){
        for(let name in this.keybindings){
            if(key == this.keybindings[name]['key']){
                eval(this.keybindings[name]['event']);
                return true;
            }
        }
        console.log(key);
        return false;
        
    }
}

const emptyCardText = 'Click to add audio';
songlist = new SongList();

$(function(){
    // check support
    if (window.File && window.FileReader && window.FileList && window.Blob) console.log(`Browser is fully supported.`);
    else $('body').css({ "margin": "8px", "background-color": "#ffbcbc" }).html(`<h1>We're sorry</h1><p>Your browser does not support the necessary functions to run this program. Try using another browser.</p>`);
    
    songlist.init();
    Playbar.init();
    Playbar.setupKeys();
    
    // document.getElementById('filebrowser').addEventListener('change', audioControls.newFile, false);
    
});