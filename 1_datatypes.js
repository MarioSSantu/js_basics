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

// crear un objeto "usuario", con tres propiedades

/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round

//incrementar una variable con otra variable con el operador  =+

//eleva un número a otro utilizando **

//eleva un número a otro utilizando un bucle

// generar un número aleatorio del 0 al 100

// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max

/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"

//crear una variable con frase/cadena de caracteres y comprobar la longitud

//eliminar "script" de la palabra Javascript con el método substr

//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
