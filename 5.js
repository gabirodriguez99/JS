var enlace = document.getElementsByTagName("a");

var parrafos = document.getElementsByTagName("p");

for(var i=0; i<parrafos.length; i++) {
    var parrafo = parrafos[i];
}

var enlace3 = parrafo.getElementsByTagName("a");

document.writeln("La página tiene "+enlace.length+" enlaces de página."+"<br>");
document.writeln("El tercer párrafo tiene "+enlace3.length+" enlaces.");

