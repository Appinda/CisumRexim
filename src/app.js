const __version__ = 2.2;
const emptyCardText = 'Click to add audio';

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
        this.disabled = false;
        this.keylisten = true;
    }
    
    init(){
        $('.card.empty span').text(emptyCardText);
        $('#filebrowser').change(songlist.processFiles);
        
        //Right click
        for(let s = 0; s < 9; s++){
            $("#page div.col-4[name=placeholder_" + s + "]").contextmenu(function(){
                let placeholder = $(this).attr('name')
                let filename = $("#page div.col-4[name=" + $(this).attr('name') + "] h6").text();
                songlist.rightclick(event, filename, placeholder);
            });
        }
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
    rightclick(event, filename, placeholder){
        event.preventDefault();
        if($("#page div.col-4[name=" + placeholder + "] .card").hasClass('empty')) return false;
        RenameModal.selected = { placeholder: placeholder, filename: filename };
        RenameModal.open();
    }
    update(){
        // Set pagecount
        this.pagecount = Math.ceil(this.list.length / 9);
        if(this.pagecount == 0) pagecount = 1;
        // Empty each placeholder
        this.empty();
        // Place songs from songlist
        let range = this.selectedPage * 9;
        let targetsongs = songlist.list.slice(range, range + 9);
        for (var i = 0, song; song = targetsongs[i]; i++) {
            $("#page div.col-4[name=placeholder_" + i + "]").html(`<div class="card song"><div class="card-body" onclick="songlist.selectPlaceholder(${i});"><span>${i + 1}</span><h5 class="card-title">${Storage.getSongName(song.file.name)}</h5><h6 class="card-subtitle mb-2 text-muted">${song.file.name}</h6><p class="card-text">${'duration'}</p></div></div>`);   
        }
        // Update # page text
        $('#page #pagebar #currentPage').text(`${this.selectedPage + 1} / ${this.pagecount}`);
        // Select song
        if(this.selectedSongIndex >= range && this.selectedSongIndex < range + 9) $(`#page div.col-4[name=placeholder_${this.selectedSongIndex % 9}] .card`).addClass('selected');
    }
    selectSong(index){
        if(index < 0) index = songlist.list.length - 1;
        if(index == songlist.list.length) index = 0; 
        // If aleady selected, return
        if(this.selectedSongIndex == index) return false;
        $(`${Playbar.id} #currentSongInfo`).html(`<b>${Storage.getSongName(songlist.list[index].file.name)}</b> (${songlist.list[index].file.name})`);
        this.stop();
        Playbar.show();
        Playbar.graph.load(songlist.list[index].url);
        //if(this.selectedSongIndex % 9 == 8 && (index == this.selectedSongIndex + 1 || this.selectedSongIndex + 1 == this.list.length)) this.nextPage();
        //else if(this.selectedSongIndex % 9 == 0 && (index == this.selectedSongIndex - 1 || this.selectedSongIndex == 0)) this.nextPage();
        if(index >= (this.selectedPage + 1) * 9) this.nextPage();
        if(index < this.selectedPage * 9) this.prevPage();
        $(`#page div.col-4[name=placeholder_${this.selectedSongIndex}] .card`).removeClass('selected');
        $(`#page div.col-4[name=placeholder_${index % 9}] .card`).addClass('selected');
        this.selectedSongIndex = index;
        Playbar.updateButtonState(false);
    }
    selectPage(page){
        if(this.pagecount == 1) return false;
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
        if(this.disabled) return false;
        $("#btn_play").text("pause_circle_filled");
        $("#btn_play").removeClass("stopped").removeClass("paused").addClass("playing");
        Playbar.graph.play();
    }
    playpause(){
        if(this.disabled) return false;
        if(Playbar.graph.isPlaying()) this.pause();
        else this.play();
            
    }
    stop(){
        $("#btn_play").text("play_circle_filled");
		$("#btn_play").removeClass("playing").removeClass("paused").addClass("stopped");
        $(`#page div.col-4[name=placeholder_${this.selectedSongIndex}] .card`).removeClass('selected');
        Playbar.graph.stop();
        Playbar.updateTime();
    }
    pause(){
        if(this.disabled) return false;
        $("#btn_play").text("play_circle_filled");
        $("#btn_play").removeClass("playing").addClass("paused");
        Playbar.graph.pause();
    }
    setVolume(vol){
        Playbar.graph.setVolume(vol/100);
        let icon = "";
        if(vol == 0) icon = 'volume_off';
        if(vol > 0) icon = 'volume_mute';
        if(vol > 49) icon = 'volume_down';
        if(vol > 74) icon = 'volume_up';
        $('#volumeText').html(`<i class="material-icons">${icon}</i>&nbsp;${vol}%`);
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
            Playbar.updateButtonState(true);
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
                songlist.nextSong();   
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
    
    static updateButtonState(state){
        if(state){
            // Enabled
            $('#playbar #btn_play').removeClass('disabled');
            $('#playbar #btn_stop').removeClass('disabled');
            songlist.disabled = false;
        }else{
            // Disabled
            $('#playbar #btn_play').addClass('disabled');
            $('#playbar #btn_stop').addClass('disabled');
            songlist.disabled = true;
        }
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
}

class Storage {
    
    static init(){
        this.enabled = false;
        if (typeof(Storage) == "undefined") return false;
        this.enabled = true;
        if(!localStorage.songnames) localStorage.songnames = "{}";
        // Default keys
        if(!localStorage.hotkeys) localStorage.hotkeys = HotkeyManager.defaultHotkeys;
        this.songnames = JSON.parse(localStorage.songnames);   
        this.hotkeys = JSON.parse(localStorage.hotkeys);
        
    }
    static update(){
        if(!this.enabled) return false;
        localStorage.songnames = JSON.stringify(this.songnames);
        localStorage.hotkeys = JSON.stringify(this.hotkeys);
    }
    static getSongName(filename){
        if(!this.enabled) return false;
        if(filename in Storage.songnames) return Storage.songnames[filename];
        else return filename;
    }
    static setSongName(filename, displayname){
        if(!this.enabled) return false;
        this.songnames[filename] = displayname;
        this.update();
        return true;
    }
    static disableUpdate(){
        if(!this.enabled) return false;
        localStorage.doUpdate = 'false';
        return true;
    }
    static getUpdateChoise(){
        if(!this.enabled) return false;
        if(localStorage.doUpdate == 'false') return false;
        else return true;
    }
    static getHotkeys(){
        if(!this.enabled) return false;
        return this.hotkeys;
    }
    static setHotkey(name, code, key){
        if(!this.enabled) return false;
        this.hotkeys[name] = {code: code, key: key};
        this.update();
        return true;
    }
}

class RenameModal{
    static open(){
        songlist.keylisten = false;
        $('#mod_rename #txt_newname').val($("#page div.col-4[name=" + this.selected.placeholder + "] .card-title").text());
        $('#mod_rename').modal('show');
    }
    static onclose(save){
        if(save){
            let newname = $('#mod_rename #txt_newname').val();
            if(newname == ""){ return false; }
            Storage.setSongName(this.selected.filename, newname);
            $("#page div.col-4[name=" + this.selected.placeholder + "] .card-title").text(newname);
        }
        songlist.keylisten = true;
    }
}

songlist = new SongList();

class Updater {
    
    static popup(version){
        songlist.keylisten = false;
        if(!version) version = this.latest;
        $('#mod_update .modal-body').text($('#mod_update .modal-body').text().replace('{v}', version));
        $('#mod_update').modal();
    }
    
    static checkVersion(version){
        let url = 'http://maartenverheul.nl/cisumrexim/versions.json';
        $.getJSON(url, function( data ) {
            if(version == data.latest) console.log(`Running the latest version ${version}. Good!`);
            else if(version < data.latest){
                console.log(`Running the latest version ${version}, but version ${data.latest} is available already.`);
                if(Storage.getUpdateChoise()) Updater.popup(data.latest);
                else Updater.showReminder();
            }else{
                console.warn(`Running unofficial version ${version} as a development version.`);
            }
            this.latest = data.latest;
        }).fail(function() {
            console.log("Could not get updates");
        });
    }
    
    static showReminder(){
        $('#updatereminder').show();
    }
    
    static onclose(choise){
        if(choise) window.location.assign('https://github.com/maartenverheul/CisumRexim/releases');
        else {
            Storage.disableUpdate();
            Updater.showReminder();
        } 
        songlist.keylisten = true;
    }
    
}

class HotkeyManager{
    
    static setup(){
        this.defaultHotkeys = `{"playpause":{"code":"NumpadEnter","key":"ENTER"},"stop":{"code":"NumpadAdd","key":"+"},"prevsong":{"code":"ArrowLeft","key":"ArrowLeft"},"nextsong":{"code":"ArrowRight","key":"ArrowRight"},"prevpage":{"code":"ArrowUp","key":"ArrowUp"},"nextpage":{"code":"ArrowDown","key":"ArrowDown"},"placeholder1":{"code":"Numpad1","key":"1"},"placeholder2":{"code":"Numpad2","key":"2"},"placeholder3":{"code":"Numpad3","key":"3"},"placeholder4":{"code":"Numpad4","key":"4"},"placeholder5":{"code":"Numpad5","key":"5"},"placeholder6":{"code":"Numpad6","key":"6"},"placeholder7":{"code":"Numpad7","key":"7"},"placeholder8":{"code":"Numpad8","key":"8"},"placeholder9":{"code":"Numpad9","key":"9"},"placeholder0":{"code":"Numpad7","key":"7"}}`;
        
        $('.hotkey').click(function(){
            $(this).addClass('selecting');
            $(this).val('Press a key');
        });
        $('.hotkey').blur(function(e) {
            $(this).removeClass('selecting');
            if($(this).val() == 'Press a key') $(this).val('None');
        });
        $('.hotkey').keydown(function(e) {
            // Key pressed
            e.preventDefault();
            $(this).removeClass('selecting');
            let code = e.originalEvent.code;
            let key = e.originalEvent.key;
            if(code == 'Space') key = 'SPACE';
            $(this).val(key.toUpperCase());
            HotkeyManager.bindHotkey($(this).attr('name'), code, key);
            $(this).blur();
        });
        
        // Key functions
        this.keyfunctions = {
            'playpause': `songlist.playpause()`,
            'stop': `songlist.stop()`,
            'pageup': `songlist.nextPage()`,
            'pagedown': `songlist.prevPage()`,
            'prevsong': `songlist.prevSong()`,
            'nextsong': `songlist.nextSong()`,
            'placeholder1': `songlist.selectPlaceholder(6)`,
            'placeholder2': `songlist.selectPlaceholder(7)`,
            'placeholder3': `songlist.selectPlaceholder(8)`,
            'placeholder4': `songlist.selectPlaceholder(3)`,
            'placeholder5': `songlist.selectPlaceholder(4)`,
            'placeholder6': `songlist.selectPlaceholder(5)`,
            'placeholder7': `songlist.selectPlaceholder(0)`,
            'placeholder8': `songlist.selectPlaceholder(1)`,
            'placeholder9': `songlist.selectPlaceholder(2)`
        }
        
        // Keypress listener
        $('body').keyup(function(e) {
            if(songlist.keylisten) HotkeyManager.keyPress(e.originalEvent.code);
        });
    }
    
    static update(){
        let hotkeys = Storage.getHotkeys();
        for(let h in hotkeys){
            $(`.hotkey[name="${h}"]`).val(hotkeys[h].key.toUpperCase());
        }
    }
    
    static bindHotkey(name, code, key){
        this.newhotkeylist[name] = {code: code, key: key};
    }
    
    static saveHotkeys(){
        for(let h in this.newhotkeylist){
            Storage.setHotkey(h, this.newhotkeylist[h].code, this.newhotkeylist[h].key);
        }
    }
    
    static keyPress(code){
        let hotkeys = Storage.getHotkeys();
        for(let h in hotkeys){
            if(code == hotkeys[h].code){
                eval(this.keyfunctions[h]);  
                return true;
            } 
        }
        return true;
    }
    
    static popup(){
        songlist.keylisten = false;
        // Empty list
        this.newhotkeylist = {};
        // Place old hotkeys
        this.update();
        //Open modal
        $('#mod_hotkeys').modal();
    }
    
    static onclose(save){
        if(save) this.saveHotkeys();
        songlist.keylisten = true;
    }
    
    static reset(){
        let dhk = JSON.parse(HotkeyManager.defaultHotkeys);
        for(let h in dhk){
            $(`.hotkey[name="${h}"]`).val(dhk[h].key.toUpperCase());
            HotkeyManager.bindHotkey(h, dhk[h].code, dhk[h].key);
        }
    }
    
}

$(function(){
    // check support
    if (window.File && window.FileReader && window.FileList && window.Blob) console.log(`Browser is fully supported.`);
    else $('body').css({ "margin": "8px", "background-color": "#ffbcbc" }).html(`<h1>We're sorry</h1><p>Your browser does not support the necessary functions to run this program. Try using another browser.</p>`);
    
    HotkeyManager.setup();
    Storage.init();
    Updater.checkVersion(__version__);
    songlist.init();
    Playbar.init();
    
});