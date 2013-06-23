
var playing = new Array();
for (var i = 0; i < 3; i++) {
	playing[i]="false"
}


function imprimirVolumen(){
	var vol = document.getElementById("vol");
	var s7 = document.getElementById("s7");
	var s8 = document.getElementById("s8");
	var s9 = document.getElementById("s9");

	vol.innerHTML=s7.volume
}

function subirVolumen(inx){
	var s=document.getElementById("s"+inx);
	var sV= s.volume;

	document.getElementById("s"+inx).volume=sV+0.1
}

function bajarVolumen(inx){
	var s=document.getElementById("s"+inx);
	var sV= s.volume;

	document.getElementById("s"+inx).volume=sV-0.1
}
function playSound(inx) {
	var s=document.getElementById("s"+inx);
		s.play();
}

function stopSound(inx) {
	var s=document.getElementById("s"+inx);
		s.pause();
		s.currentTime = 0;


}
function colorear(inx){
	console.log(inx);
	$("#b"+inx).addClass("activo");
}
function decolorar(inx){
	console.log(inx);
	$("#b"+inx).removeClass("activo");
}
function apretar(inx){
	console.log(inx);
	if (playing[inx]=="false"){
		colorear(inx);
		playSound(inx);
		playing[inx]="true";
	}
	else{
		levantar(inx);
	}
}
function levantar(inx){
	decolorar(inx);
	playing[inx]="false";
	stopSound(inx);
}
document.onkeydown = function(event) 
{
	var keyCode;

	if(event == null)
	{
		keyCode = window.event.keyCode;
	}
	else
	{
		keyCode = event.keyCode;
	}

	switch(keyCode)
	{
	
	// 7 
	case 103:
		apretar(7);
		break;
	
	// 8
	case 104: 
		apretar(8);
		break;

	// 9
	case 105:
		apretar(9);
		break;

	// +
	case 107:
		subirVolumen(7);
		subirVolumen(8);
		subirVolumen(9);
		imprimirVolumen();
		break;

	// -
	case 109:
		bajarVolumen(7);
		bajarVolumen(8);
		bajarVolumen(9);
		imprimirVolumen();
		break;

	// 0	
	case 96:
		imprimirVolumen();
		break;

	default:
		break;
	}
}
