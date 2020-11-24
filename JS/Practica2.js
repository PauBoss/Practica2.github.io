/**
* Creo la función fechaExpiracion la cual se encargará
* de definir cual es la fecha final de expiración.
**/
function fechaExpiracion(){

	var UTC;

	FechaActual = new Date();

	FechaActual.setMonth(FechaActual.getMonth() + 1);

	UTC = FechaActual.toUTCString();

	document.write("La fecha de expiración es: " + UTC + "<br>");

}

/**
* Creo la función obtenerCookie la cual se encargará
* de devolver el valor espcífico de la cookie.
**/
function obtenerCookie(nombreCookie) {

	var miCookie = "" + document.cookie;

	var index1 = miCookie.indexOf(nombreCookie);

	if (index1 == -1 || nombreCookie == "") return "";

	var index2 = miCookie.indexOf(";",index1);

	if (index2 == -1) index2 = miCookie.length;

	return unescape(miCookie.substring(index1 + nombreCookie.length + 1,index2));

}

/**
* Creo la función establecerCookie la cual se encargará
* de almacenar la variable.
**/
function establecerCookie(nombre, valor){

	miCookie = nombre + " = "+ escape(valor);

	document.cookie = miCookie;

}

/**
* Creo la función contador, que se encargará de realizar
* y mostrar el número de visistas. Además de restablecerse a 0
* cuando llegue a 10 y borrar la cookie.
**/
function contador(cont){

	cont = obtenerCookie("cont");

	cont++;

	document.write("Enhorabuena, has visitado esta página " + cont + " veces!!!!<br>");

	inicio = establecerCookie("cont", cont, 1);

	if(cont>=10){

	inicio = establecerCookie("cont", cont-10, 1);

	document.write("La cookie ha sido eliminada correctamente");

	establecerCookie(nombre, "", -1);



	}

}

contador();
fechaExpiracion();
