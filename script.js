$(document).ready(function() {
	$.getJSON( "timeline.json", function( data ) {
		console.log( "success timeline" );
		var messages = [];
		i = 1;
		$.each( data, function( key, val ) {
			console.log(val["imagen"]);
			messages.push("<div id='mensaje'><img src='" + val["imagen"] + "' align='left'/><h2>" 
			+ val["usuario"] + ": " + val["asunto"] + "</h2><p>" + val["fecha"] + "</p><p id='contenido " + i 
			+"' style='display:none;'>" + val["contenido"] + "</p><p id ='btn " + i + "' class='btn' align='center' onclick='desplegar(" + i
			+ ")'>Desplegar</p></div><br>")
			i++;
		});
		for(j in messages){
			$("#timeline").append($("#timeline").val() + messages[j]);
		}
		console.log(i);
	}); 
	$.getJSON( "myline.json", function( data ) {
		console.log( "success myline" );
		var messages = [];
		$.each( data, function( key, val ) {
			console.log(val["imagen"]);
			messages.push("<div id='mensaje'><img src='" + val["imagen"] + "' align='left'/><h2>" 
			+ val["usuario"] + ": " + val["asunto"] + "</h2><p>" + val["fecha"] + "</p><p id='contenido " + i 
			+"' style='display:none;'>" + val["contenido"] + "</p><p id ='btn " + i + "' class='btn' align='center' onclick='desplegar(" + i
			+ ")'>Desplegar</p></div><br>")
			i++;
		});
		for(j in messages){
			$("#myline").append($("#myline").val() + messages[j]);
		}
	});
	$.getJSON( "update.json", function( data ) {
		console.log( "success updated" );
		var messages = [];
		$.each( data, function( key, val ) {
			console.log(val["imagen"]);
			messages.push("<div id='mensaje'><img src='" + val["imagen"] + "' align='left'/><h2>" 
			+ val["usuario"] + ": " + val["asunto"] + "</h2><p>" + val["fecha"] + "</p><p id='contenido " + i 
			+"' style='display:none;'>" + val["contenido"] + "</p><p id ='btn " + i + "' class='btn' align='center' onclick='desplegar(" + i
			+ ")'>Desplegar</p></div><br>")
			i++;
		});
		for(j in messages){
			$("#update").append($("#update").val() + messages[j]);
		}
		j++;
		var boton = "<p id ='btn " + i + "' class='btn' align='center' onclick='actualizar()'>Update ("+ j + ")</p>";
		$("#botonupdate").append(boton);
		
	});
});

function desplegar(num){
	console.log("contenido " + num);
	var obj = document.getElementById("contenido " + num);
	var obj2 = document.getElementById("btn " + num);
	if(obj.style.display == "none"){
		obj.style.display = "block";
	}
	else{
		obj.style.display = "none";
	}
	if(obj2.innerHTML == "Desplegar"){
		obj2.innerHTML = "Ocultar";
	}
	else{
		obj2.innerHTML = "Desplegar";
	}	
}

function cambioPestana(pestana){
	console.log(pestana);
	var obj = document.getElementById("timeline");
	var obj2 = document.getElementById("myline");
	var obj3 = document.getElementById("write");
	if(pestana.id == "pestana1"){
		obj.style.display = "block";
		obj2.style.display = "none";
		obj3.style.display = "none";
	}
	else if(pestana.id == "pestana2"){
		obj.style.display = "none";
		obj2.style.display = "block";
		obj3.style.display = "none";
	}
	else{
		obj.style.display = "none";
		obj2.style.display = "none";
		obj3.style.display = "block";
	}
	
}

function actualizar(){
	var obj = document.getElementById("botonupdate");
	var obj2 = document.getElementById("update");
	obj.style.display = "none";
	obj2.style.display = "block";
}

function publicar(){
	var message = [];
	var obj = document.getElementById("resumen");
	var obj2 = document.getElementById("contenido");
	var obj3 = document.getElementById("myline");
	var obj4 = document.getElementById("pestana2");
	message.push("<div id='mensaje'><img src='image/yo.jpg' align='left'/><h2>Yo: " + obj.value + 
			"</h2><p>Hoy</p><p id='contenido " + i +"' style='display:none;'>" + obj2.value
			+ "</p><p id ='btn " + i + "' class='btn' align='center' onclick='desplegar(" + i
			+ ")'>Desplegar</p></div><br>")
	obj3.innerHTML = message[0] + obj3.innerHTML;		
	i++;
	cambioPestana(obj4);
}
