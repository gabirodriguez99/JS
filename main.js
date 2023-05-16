let movX;
let movY;
let pX;
let pY;


document.addEventListener('mousemove', function(e){
    movX = e.screenX;
    movY = e.screenY;
    pX = e.pageX;
    pY = e.pageY;

    document.getElementById('raton1').innerHTML = "Navegador [" +movX +", " + movY+ "]";

    document.getElementById('raton2').innerHTML = "Página [" +pX +", " + pY+ "]";
})

let k1;
let k2;

document.addEventListener('keypress', function(a){
    k1 = a.key;
    k2 = a.charCode;

    document.getElementById('teclado1').innerHTML = "Carácter [" + k1 +"]";
    document.getElementById('teclado2').innerHTML = "Código [" + k2 +"]";
})