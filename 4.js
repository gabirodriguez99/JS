function mostrar(numero)
{
    if (Number.isInteger(numero)){
        if (numero/2==0){
            document.writeln("Es par");
        } else {
            document.writeln("Es impar");
        }
    } else {
        document.writeln("Ingrese un número");
    }
    

}
