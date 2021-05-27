let t1 = [
"にっちゅう","じょうひん","じょうとう","かいせい","かんそう",
"かしだし","かつよう","けいじ","こむぎ","こうけい",
"きょうごう","まぶしい","まねく","みつめる","もる",
"もうしこみしょ","の","おうえん","りょう","さいてい",
"さくもつ","さまざま","せきゆ","しはつ","しつぎょう",
];
let t2 = [
"しょうち","しょくりょう","しゅじゅつ","しゅうきょう","たいど",
"たいほ","たいりょう","たね","たたく","ていこう",
"つきあい","うばう","うったえる","びん","ぶっしつ",
"びょうどう","ちく","えいよう","ふだん","ふしぎ",
"はだか","はで","はく","ほしょう","いねむり",
"にんしゅ","じたい","じつげん","","",
];
let frgt = [];
let frgtURL = [];
let unm = t1;

let w1 = [], w2 = [], w3 = [], w4 = [];
let temp = []
fill(w1,listA);
fill(w2,listB);
fill(w3,listC);
fill(w4,listD);
fill(temp,unm);

let pool;
let mode = 0;
let play = true;
let interval = null;
let del = false;

function reset(array, vocabulary) {
	switch(mode) {
		case 0:
			pool = w1;
			fill(w1,listA);
			break;
		case 1:
			pool = w2;
			fill(w2,listB);
			break;
		case 2:
			pool = w3;
			fill(w3,listC);
			break;
		case 3:
			pool = w4;
			fill(w4,listD);
			break;
		case "temp": 
			pool = temp;
			fill(temp,unm);
			break;
		default:
			pool = frgt;
			frgt = [];
	}
	document.getElementById('rem').innerHTML = "<b>"+pool.length+"</b>";
}

function sw() {
	document.getElementById('rem').innerHTML = "<b>0</b>";
	document.getElementById('frem').innerHTML = "0";
	document.getElementById('word').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;あ";
	let inner = document.getElementById('switch').innerHTML;
	switch(inner) {
		case "<b>1-200</b>":
			document.getElementById('switch').innerHTML = "<b>201-400</b>";
			mode = 1;
			break;
		case "<b>201-400</b>":
			document.getElementById('switch').innerHTML = "<b>401-600</b>";
			mode = 2;
			break;
		case "<b>401-600</b>":
			document.getElementById('switch').innerHTML = "<b>601-800</b>";
			mode = 3;
			break;
		case "<b>601-800</b>":
			document.getElementById('switch').innerHTML = "<b>temp</b>";
			mode = "temp";		
			break;
		case "<b>temp</b>":
			document.getElementById('switch').innerHTML = "<b>forgotten</b>";
			mode = "frgt";
			break;
		default:
			document.getElementById('switch').innerHTML = "<b>1-200</b>";
			mode = 0;	
	};
};

function rndize(){
	switch(mode){
		case 0:
			pool = w1;
			break;
		case 1:
			pool = w2;
			break;
		case 2:
			pool = w3;
			break;
		case 3 :
			pool = w4;
			break;
		case "temp":
			pool = temp;
			break;
		case "frgt":
			pool = frgt;
			break;
	}
	if(pool.length<1) return;
	let n = Math.floor(Math.random()*pool.length);
	let result = pool[n];
	if(del===true) pool.splice(n,1);
	document.getElementById('rem').innerHTML = "<b>"+pool.length+"</b>";
	document.getElementById('word').innerHTML = result;
	console.log(result);
	if(!play) return;
	if(mode==="frgt") {
		for(let i in frgt) {
			if(frgt[i] !== result) continue;
			n = i;
			break;
		};
		playVoice(frgtURL[n]);
		return;
	};
	playVoice();
}

function playVoice(URL){
	let sound = document.getElementById('word').innerHTML;
	let voiceSrc = "audio/"+mode+"/"+sound+".mp3";
	if(URL) voiceSrc = "audio/"+URL;
	document.getElementById('voice').setAttribute("src",voiceSrc);
	document.getElementById('voice').play();
}

function sw2() {
	let inner = document.getElementById('say').innerHTML;
	if(inner === "<b>play</b>") {
		document.getElementById('voice').setAttribute("src","");
		document.getElementById('say').innerHTML = "<b>mute</b>";
		play = false;
		return;
	}
	document.getElementById('say').innerHTML = "<b>play</b>";
	play = true;
}

function forgot() {
	if(mode==="frgt") return;
	let sound = document.getElementById('word').innerHTML;
	if(sound==="&nbsp;") return;
	let fc = document.getElementById("frem");
	fc.innerHTML = (Number(fc.innerHTML) + 1).toString();
	frgt.push(sound);
	frgtURL.push(mode+"/"+sound+".mp3");
}

function fill(array, vocabulary) {
	array.length = 0;
	for(let i = 0; i < vocabulary.length; i++){
		array.push(vocabulary[i]);
	}
}

document.addEventListener('keypress', logKey);
function logKey(e){
    switch(e.key){
    	// k / p / r / f / m / s
      	case "k":
    		rndize();
    		break;
    	case "p":
    		document.getElementById('voice').play();
    		break;
    	case "r":
    		reset();
    		break;
    	case "f":
    		forgot();
    		break;
    	case "m":
    		sw2();
    		break;
       	case "s":
    		sw();
    		break;
		case "o":
			aplay(0);
			break;
		case "h":
			show();
			break;
		case "d":
			remove();
			break;
		case "z":
			delet();
			break;
    }
}

let last;
let autoplay = false;
function aplay(seconds) {
	let menu = document.getElementById("m");
	clearInterval(interval);
	if(seconds===0) {
		if(autoplay===true) {
			menu.innerHTML = "<b>OFF</b>";
			autoplay=false;
			return;
		}
		if(!last) return;
		autoplay = true;
		interval = setInterval(rndize,last*1000);
		menu.innerHTML = "<b>"+last+"</b>";
		rndize();
		return;
	}
	autoplay = true;
	last = seconds;
	menu.innerHTML = "<b>"+seconds+"</b>";
	rndize();
	interval = setInterval(rndize,seconds*1000);
}

function show() {
	let rnd = document.getElementById("word");
	let s = document.getElementById("s");
	if(rnd.style.display==="inline") {
		rnd.style.display = "none";
		s.innerHTML = "<b>show</b>";
		return;
	}
	rnd.style.display = "inline";
	s.innerHTML = "<b>hide</b>";
}

function remove() {
	let button = document.getElementById("d");
	if(del===true){
		button.innerHTML = "<b>remove</b>"
		del = false;
		return;
	}
	button.innerHTML = "<b>remain</b>";
	del = true;
}

function delet() {
	let wo = document.getElementById("word");
	for(let i in pool) {
		if(pool[i]===wo.innerHTML) {
			pool.splice(i,1);
			if(mode==="frgt") frgtURL.splice(i,1);
			document.getElementById('rem').innerHTML = "<b>"+pool.length+"</b>";
			break;
		};
	};
}
