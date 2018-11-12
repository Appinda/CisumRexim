class Song {

    constructor(id, file, name = "New audio file") {
        this.id = "song_" + id;
		this.file = file;
		this.filename = file.split("/")[file.split("/").length - 1];
		this.name = name;
		this.audio = new buzz.sound(this.file, { volume: $("#volume").val() });
		this.audio.bind("ended", () => { audioControls.stop(); audioControls.nextSong(); } );

	}
}

String.prototype.toMMSS = function () {
	var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}

var playbar = {
	isHidden: true,
	expand: function (time = 500, easing = 'snap') {
		if (!playbar.isHidden) return false;
		$('#playbar').transition({ y: '0px' }, time, easing);
		playbar.isHidden = false;
	},
	collapse: function (time = 1000, easing = 'ease') {
		if (playbar.isHidden) return false;
		$('#playbar').transition({ y: '200px' }, time, easing);
		playbar.isHidden = true;
	}
};
var audioControls = {
	waveform: {
		timer: undefined,
		setPosition: function (percent) {
			$("#waveform .cursor").css({ "left": percent + "%" });
			$("#waveform .fill").css({ "clip-path": "polygon(0% 0%, " + percent + "% 0%, " + percent + "% 100%, 0% 100%)" });
			var audio = _songlist[_songlist.current].audio
			$("#waveform .timer").text(audio.getTime().toString().toMMSS() + " / " + audio.getDuration().toString().toMMSS() + " (" + audio.getPercent() + "%)");
		},
		initWaveformClick: function () {
			console.log("init");
			$("#waveform .wrapper").click(function (e) {
				var posX = e.pageX - $(this).offset().left;
				audioControls.setPosition(Math.round(posX / 1024 * 100));
			});
		}
	},
	playpause: function () {
		if (_songlist[_songlist.current].audio.isPaused()) {
			//to be played
			$("#btn_play").text("pause_circle_filled");
			$("#btn_play").removeClass("stopped").removeClass("paused").addClass("playing");
			_songlist[_songlist.current].audio.play();
			this.waveform.timer = setInterval(() => {
				this.waveform.setPosition(_songlist[_songlist.current].audio.getTime() / _songlist[_songlist.current].audio.getDuration() * 100);
			}, 400);
		} else {
			//to be paused
			$("#btn_play").text("play_circle_filled");
			$("#btn_play").text("play_circle_filled");
			$("#btn_play").removeClass("playing").addClass("paused");
			_songlist[_songlist.current].audio.pause();
			clearInterval(this.waveform.timer);
		}
	},
	stop: function () {
		$("#btn_play").text("play_circle_filled");
		$("#btn_play").removeClass("playing").removeClass("paused").addClass("stopped");
		_songlist[_songlist.current].audio.stop();
		clearInterval(this.waveform.timer);
		this.waveform.setPosition(0);
	},
	setPosition: function (percent) {
		_songlist[_songlist.current].audio.setPercent(percent);
		audioControls.waveform.setPosition(percent);
	},
	close: function () {
		audioControls.stop();
		playbar.collapse();
		_songlist.current = null;
	},
	loop: function () {

	},
	loadNewSong: function (id) {
		if (_songlist[id] === undefined) {
			if(id === -1) id = _songlist.length - 1;
			else if(id === _songlist.length) id = 0;
			else return false;
		};
		
		if (_songlist[_songlist.current]) audioControls.stop();
		_songlist.current = id;
		playbar.expand();
		$("#playbar #currentSongInfo").html("<b>" + _songlist[_songlist.current].name + "</b> (" + _songlist[_songlist.current].filename + ")");
		$("#waveform .back").css({ "background-image": "url(/audio/waveforms/" + _songlist[_songlist.current].filename + ".png)" });
		$("#waveform .fill").css({ "background-image": "url(/audio/waveforms/" + _songlist[_songlist.current].filename + ".png)" });
		console.log("url(/audio/waveforms/" + _songlist[_songlist.current].filename + ".png)");
		this.waveform.setPosition(0);
		if (id >= 9 && !page.secondPage) page.switchPage();
		if (id < 9 && page.secondPage) page.switchPage();
		page.switchSelectClass(id);
	},
	nextSong() {
		audioControls.loadNewSong(_songlist.current + 1);
	},
	prevSong() {
		audioControls.loadNewSong(_songlist.current - 1);
	},
	setVolume(value) {
		_songlist.group.setVolume(value);
		$("#volumeText").text(value + "%");
		$("#volume").val(value);
	}
};
var page = {
	secondPage: false,
	doubleValue: 0,
	initSonglist: function () {

		$.getJSON('/audio/songlist.json', (data) => {
			for (var s = 0; s < data.length; s++) {
				_songlist.push(new Song(data[s][0], data[s][1], data[s][2]));
			}

			this.refreshPageItems();

			var group = [];
			for (var s = 0; s < _songlist.length; s++) {
				group.push(_songlist[s].audio);
			}
			_songlist.group = new buzz.group(group);

			initKeys();

			console.log("ready!");
		});
	},
	refreshPageItems: function () {
		console.log("refresh!");
		var pack = [];
		for (var s = 0; s < 18; s++) {
			$("#page div.col-4[name=placeholder_" + (s - 9) + "]").html('<div class="card empty"><div class="card-body"><span>Drop audio file</span></div></div>');
		}
		if (!this.secondPage)
		{
			//TO First half
			for (var s = 0; s < 9; s++) {
				var song = _songlist[s];
				if (song === undefined) break;
				if (song.audio.getDuration().toString().toMMSS() === "NaN:NaN")
				{
					song.audio.id = s;
					song.audio.bind("loadedmetadata", function () {
						$("#page div.col-4[name=placeholder_" + this.id + "]").html('<div class="card song"><div class="card-body" onclick="audioControls.loadNewSong(' + this.id + ');"><span>' + (this.id + 1) + '</span><h5 class="card-title">' + _songlist[this.id].name + '</h5><h6 class="card-subtitle mb-2 text-muted">' + _songlist[this.id].filename + '</h6><p class="card-text">' + _songlist[this.id].audio.getDuration().toString().toMMSS() + '</p></div></div>');
					});	
				}else{
					$("#page div.col-4[name=placeholder_" + s + "]").html('<div class="card song"><div class="card-body" onclick="audioControls.loadNewSong(' + s + ');"><span>' + (s + 1) + '</span><h5 class="card-title">' + _songlist[s].name + '</h5><h6 class="card-subtitle mb-2 text-muted">' + song.filename + '</h6><p class="card-text">' + song.audio.getDuration().toString().toMMSS() + '</p></div></div>');
				}
				pack.push(song);
				console.log(s);
			}
			secondPage = true;
		}
		else
		{
			//TO Second half
			for (var s = 9; s < 18; s++) {
				var song = _songlist[s];
				if (song === undefined) break;
				else{
					//A song
					if (song.audio.getDuration().toString().toMMSS() === "NaN:NaN"){
						song.audio.id = s;
						song.audio.bind("loadedmetadata", function () {
							$("#page div.col-4[name=placeholder_" + (this.id - 9) + "]").html('<div class="card song"><div class="card-body" onclick="audioControls.loadNewSong(' + this.id + ');"><span>' + (this.id + 1) + '</span><h5 class="card-title">' + _songlist[this.id].name + '</h5><h6 class="card-subtitle mb-2 text-muted">' + _songlist[this.id].filename + '</h6><p class="card-text">' + _songlist[this.id].audio.getDuration().toString().toMMSS() + '</p></div></div>');
						});
					}else{
						$("#page div.col-4[name=placeholder_" + (s - 9) + "]").html('<div class="card song"><div class="card-body" onclick="audioControls.loadNewSong(' + s + ');"><span>' + (s + 1) + '</span><h5 class="card-title">' + song.name + '</h5><h6 class="card-subtitle mb-2 text-muted">' + song.filename + '</h6><p class="card-text">' + song.audio.getDuration().toString().toMMSS() + '</p></div></div>');
					}

					pack.push(song);
					console.log("a song");
				}
			}
			secondPage = false;
		}
		
		return pack;
	},
	switchPage: function() {
		this.secondPage ^= true;
		if (this.secondPage) this.doubleValue = 9
		else this.doubleValue = 0;
		this.refreshPageItems();
	},
	switchSelectClass: function (id) {
		for (var p = 0; p < 9; p++) {
			$("#page div[name=placeholder_" + p + "] .card").removeClass("selected");
		}
		if (id === -1) return true;
		if (id < 0 || id > 17) return false;

		if (id >= 9) id -= 9;
		$("#page div[name=placeholder_" + id + "] .card").addClass("selected");
	},
	dropAt: function (ev, placeholder) {
		ev.preventDefault();

		$(ev.target).removeClass("drag");

		if (ev.dataTransfer.items) {
			console.log("1");
			// Use DataTransferItemList interface to access the file(s)
			for (var i = 0; i < ev.dataTransfer.items.length; i++) {
				if (ev.dataTransfer.items[i].kind === 'file' && ev.dataTransfer.items[i].type === "audio/mp3") {
					var uploadfile = ev.dataTransfer.items[i].getAsFile();
					console.log(uploadfile);

					//Upload
					jQuery.ajax({
						url: '/upload',
						type: "POST",
						data: {
						  audio: uploadfile
						},
						success: function (data) {
							console.log("uploaded");
						},
						error: function(data){
							console.log("upload error");
						}
					});
				} else {
					console.error("Wrong file");
				}
			}
		} else return false;
  
	  // Pass event to removeDragData for cleanup
	  //removeDragData(ev)
	},
	dragOver: function (ev) {
		console.log('Over'); 

		  // Prevent default behavior (Prevent file from being opened)
		  ev.preventDefault();
	},
	dragEnter: function (ev) {
		$(ev.target).addClass("drag");

		// Prevent default behavior (Prevent file from being opened)
		ev.preventDefault();
	},
	removeDragData(ev) {
		console.log('Removing drag data')

		if (ev.dataTransfer.items) {
			// Use DataTransferItemList interface to remove the drag data
			ev.dataTransfer.items.clear();
		} else {
			// Use DataTransfer interface to remove the drag data
			ev.dataTransfer.clearData();
		}
	}

};


var _songlist = [];
_songlist.current = null;

const initKeys = function ()
{
	Mousetrap.addKeycodes({
		13: 'numenter',
		107: 'numplus',
		144: 'numlock',
		96: 'num0',
		97: 'num1',
		98: 'num2',
		99: 'num3',
		100: 'num4',
		101: 'num5',
		102: 'num6',
		103: 'num7',
		104: 'num8',
		105: 'num9',
	});
	Mousetrap.bind('numenter', function () { audioControls.playpause(); }, 'keyup');
	Mousetrap.bind('numplus', function () { audioControls.stop(); }, 'keyup');
	Mousetrap.bind('shift+num+numenter', function () { audioControls.stop(); audioControls.playpause(); }, 'keyup');
	Mousetrap.bind('num0', function () { page.switchPage(); }, 'keyup');
	Mousetrap.bind('left', function () { audioControls.prevSong(); }, 'keyup');
	Mousetrap.bind('right', function () { audioControls.nextSong(); }, 'keyup');

	Mousetrap.bind('num7', () => { audioControls.loadNewSong(0 + page.doubleValue); }, 'keyup');
	Mousetrap.bind('num8', () => { audioControls.loadNewSong(1 + page.doubleValue); }, 'keyup');
	Mousetrap.bind('num9', () => { audioControls.loadNewSong(2 + page.doubleValue); }, 'keyup');
	Mousetrap.bind('num4', () => { audioControls.loadNewSong(3 + page.doubleValue); }, 'keyup');
	Mousetrap.bind('num5', () => { audioControls.loadNewSong(4 + page.doubleValue); }, 'keyup');
	Mousetrap.bind('num6', () => { audioControls.loadNewSong(5 + page.doubleValue); }, 'keyup');
	Mousetrap.bind('num1', () => { audioControls.loadNewSong(6 + page.doubleValue); }, 'keyup');
	Mousetrap.bind('num2', () => { audioControls.loadNewSong(7 + page.doubleValue); }, 'keyup');
	Mousetrap.bind('num3', () => { audioControls.loadNewSong(8 + page.doubleValue); }, 'keyup');

	audioControls.waveform.initWaveformClick();
}


setTimeout(() => page.initSonglist(), 1000);
