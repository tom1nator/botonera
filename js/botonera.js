var audios = new Array();

audios.push({tecla: "7", archivo:"chogur.ogg"});
audios.push({tecla: "8", archivo:"mp3mp4.ogg"});
audios.push({tecla: "9", archivo:"sentimientomosesuale.ogg"});
$(document).on("ready", iniciar);
var playing;
var reproductores = new Array();
function iniciar (info) {
	console.log("Botonera Iniciada!");
	playing = new Array();
	for (var i = 0; i < audios.length; i++) {
		playing[i]="false"
	}

	$.each(audios, function (i, v) {
		crearAudio(v.tecla, v.archivo);
	})

	controlarVolumen.setear(1);
	$("audio").each(function(){
		id = $(this).attr("id").substring(1);
		$(this).bind("ended", function (info) {
			var id = $(this).attr("id").substring(1);
			console.log("El ID es: "+id)
			console.log(id);
			levantar(id);
		});	
		crearBoton(id);
		reproductores.push(id);
		console.log("El ID es: "+id)

	});

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
			this.imprimir(sV);
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
			this.imprimir(sV);
		},
		setear : function (valor){
			that = this;
			var sV = valor;
			for (var i = 0; i < reproductores.length; i++) {
				document.getElementById("s"+reproductores[i]).volume=sV;
			}
			this.imprimir(sV);
		},
		imprimir: function (valor) {
			$("#vol").html(parseFloat(valor).toPrecision(1));
		}
	}
})();

function crearBoton (inx) {
	$("#botones").append('<div id="b'+inx+'" class="bttn">'+inx+'</div>')
}
function crearAudio (tecla, archivo) {

var audioElement = document.createElement('audio');

var source1 = document.createElement('source');
source1.type= 'audio/ogg';
source1.src= archivo;
audioElement.setAttribute("id","s"+tecla);
audioElement.appendChild(source1);

audioElement.preload = "auto";
audioElement.load();

	$("#botones").append(audioElement);	

	 		
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
	console.log(inx);
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
