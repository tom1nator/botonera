
$(document).on("ready", iniciar);
var playing;
var reproductores = new Array("7", "8", "9");
function iniciar (info) {
	console.log("Botonera Iniciada!");
	playing = new Array();
	for (var i = 0; i < i; i++) {
		playing[i]="false"
	}

	controlarVolumen.setear(1);
}


function imprimirVolumen(valor){

	$("#vol").html(parseFloat(valor).toPrecision(1));
}

var controlarVolumen = (function(){
	return {
		subir : function (){
			that = this;
			var sV = parseFloat($("#vol").text())+0.10000000000;
			console.log(sV);
			sV = sV.toString().substring(0,4);
			console.log(sV);
			for (var i = 0; i < reproductores.length; i++) {
				document.getElementById("s"+reproductores[i]).volume=sV;
			}
			imprimirVolumen(sV);
		},
		bajar : function (){
			that = this;
			var sV = parseFloat($("#vol").text())-0.10000000000;
			console.log(sV);
			sV = sV.toString().substring(0,4);
			console.log(sV);
			for (var i = 0; i < reproductores.length; i++) {
				document.getElementById("s"+reproductores[i]).volume=sV;
			}
			imprimirVolumen(sV);
		},
		setear : function (valor){
			that = this;
			var sV = valor;
			for (var i = 0; i < reproductores.length; i++) {
				document.getElementById("s"+reproductores[i]).volume=sV;
			}
			imprimirVolumen(sV);
		}
	}
})();

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
		controlarVolumen.subir();

		break;

	// -
	case 109:
		controlarVolumen.bajar();

		break;

	// 0	
	case 96:
		break;

	default:
		break;
	}
}
