console.log("1.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
var diez=10;
var once=10;
if (diez==once){
    console.log("Son iguales");

}else{
    console.log("Son diferentes");
}
//crear dos variables con el distinto contenido y comparar si ambas son iguales
var doce=12;
var trece=13;
if(doce==trece){
    console.log("Son iguales");

}else{
    console.log("Son diferentes");
}
//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor
var cadena="10";
var entero=10;
if (cadena==entero){
    console.log("Son iguales");

}else{
    console.log("Son diferentes");
}

//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta
if (cadena===entero){
    console.log("Son iguales");

}else{
    console.log("Son diferentes");
}


//crear dos arrays con el mismo contenido y comparar si ambos arrays son iguales
var array1=[1,2,3,4,5,6,7]
var array2=[1,2,3,4,5,6,7]
if(array1==array2){
    console.log("Son iguales");

}else{
    console.log("Son diferentes");
}
//crear dos arrays con el mismo contenido y comparar con "==" si ambos arrays son iguales
var array1=[1,2,3,4,5,6,7]
var array2=[1,2,3,4,5,6,7]
if(array1==array2){
    console.log("Son iguales");

}else{
    console.log("Son diferentes");
}

// crear un objeto "usuario", con tres propiedades
//var objeto=new objeto();
//objeto.ancho=10;
//objeto.altura=10;
//objeto.largo=10;
/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
const gravedadReal=9.8;
const gravedadRedondeada=Math.round(gravedad);
console.log(gravedadRedondeada);
//incrementar una variable con otra variable con el operador  =+
var a=1;
var b=2;
a=+b;
console.log(a);
//eleva un número a otro utilizando **
var potenciaDedos=2**3;
console.log(potenciaDedos)
//eleva un número a otro utilizando un bucle
var num1=2;
var num2=3;
var aux=num1;
for(let num3=1; num3<3; num3++){
    aux=aux*num1;


}
console.log(aux);

// generar un número aleatorio del 0 al 100

// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max
var aletarorio1=Math.random()*10;
console.log(aleatorio1);
/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello
var cadenita1="aeiou";
console.log(cadenita1);
var cadenitasMayusculas=(cadenita1.toUpperCase());
console.log(cadenitasMayusculas);
var cadenitasMinusculas=(cadenitasMayusculas.toLowerCase());
console.log(cadenitasMinusculas);

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"
var basica= "Pascal es un lenguaje de programación moderno"
var sustitucion=(basica.replace(Pascal, Javascrip));
console.log(sustitucion);
//crear una variable con frase/cadena de caracteres y comprobar la longitud
var hayquecontar="Lalelelelelele"
var contandor=
//eliminar "script" de la palabra Javascript con el método substr

//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
