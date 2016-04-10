var html="";
var johao =
{
	nombre:"johao",genero: "Masculino",edad: 30,notas:["8","10","7","5"],ciudad: "Quito",lgjFav:"Javascript",laborando:true
};
var angel =
{
	nombre:"angel",genero: "Masculino",edad: 30,notas:["8","10","7","5"],ciudad: "Quito",lgjFav:"Javascript",laborando:true
};
var fabian =
{
	nombre:"fabian",genero: "Masculino",edad: 30,notas:["8","10","7","5"],ciudad: "Quito",lgjFav:"Javascript",laborando:true
};
var richard =
{
	nombre:"richard",genero: "Masculino",edad: 30,notas:["8","10","7","5"],ciudad: "Quito",lgjFav:"Javascript",laborando:true
};
var coyote =
{
	nombre:"coyote",genero: "Masculino",edad: 30,notas:["8","10","7","5"],ciudad: "Quito",lgjFav:"Javascript",laborando:true
};

var estu =[];
estu.push(johao);estu.push(angel);estu.push(fabian);estu.push(richard);estu.push(coyote);
var nombres =[];
nombres.push(johao.nombre);nombres.push(angel.nombre);nombres.push(fabian.nombre);nombres.push(richard.nombre);nombres.push(coyote.nombre);


function printHTML (mensaje)
 {
	html += "<h3>Registro Estudantil</h3>";
	html += printList(estu);

var infoDiv = document.getElementById("info-estudiantes"); 
infoDiv.innerHTML=mensaje;
	return html;
 }

function printList (lista)
{
	var listHTML = '<ul>';
	for (var i=0; i < lista.length; i ++)
	{
		html += "<div>"+i+"</div>";
		listHTML += '<li>' + lista[i].nombre + '<br>'+lista[i].genero+ '<br>'+lista[i].edad+ '<br>'+lista[i].notas+ '<br>'+lista[i].ciudad+ '<br>'+'</li>';
	}
	listHTML += '</ul>';
	return listHTML;
}



while (true)
{
	var nombreSearch = prompt ("Ingrese el nombre que desee buscar,  (q) para salir o (l) para mostrar lista: ");
	if (nombreSearch == "q")
	{
		break;
	}
	if (nombreSearch == "l")
	{
		printHTML(html);
	}
	else
	{
		var encontrado = nombres.indexOf(nombreSearch);
		if (encontrado >= 0)
		{
			alert ("Si está el estudiante:");
			if (nombres[encontrado] == "angel")
			{
				listHTML = '<ul><li>' + angel.nombre + '<br>'+angel.genero+ '<br>'+angel.edad+ '<br>'+angel.notas+ '<br>'+angel.ciudad+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-estudiantes"); 
				infoDiv.innerHTML=listHTML;
			}
		if (nombres[encontrado] == "johao")
			{
							listHTML = '<ul><li>' + joha.nombre + '<br>'+johao.genero+ '<br>'+johao.edad+ '<br>'+johao.notas+ '<br>'+johao.ciudad+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-estudiantes"); 
				infoDiv.innerHTML=listHTML;
		}
		if (nombres[encontrado] == "richard")
			{
							listHTML = '<ul><li>' + richard.nombre + '<br>'+richard.genero+ '<br>'+richard.edad+ '<br>'+richard.notas+ '<br>'+richard.ciudad+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-estudiantes"); 
				infoDiv.innerHTML=listHTML;
		}
		if (nombres[encontrado] == "fabian")
			{
							listHTML = '<ul><li>' + fabian.nombre + '<br>'+fabian.genero+ '<br>'+fabian.edad+ '<br>'+fabian.notas+ '<br>'+fabian.ciudad+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-estudiantes"); 
				infoDiv.innerHTML=listHTML;
		}
			if (nombres[encontrado] == "coyote")
			{
						listHTML = '<ul><li>' + coyote.nombre + '<br>'+coyote.genero+ '<br>'+coyote.edad+ '<br>'+coyote.notas+ '<br>'+coyote.ciudad+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-estudiantes"); 
				infoDiv.innerHTML=listHTML;
		}
		}
		else if (encontrado < 0)
		{
			alert ("Estudiante noexiste");
		}
	}
}