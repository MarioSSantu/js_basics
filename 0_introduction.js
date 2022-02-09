console.log("0.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

//Crear una variable para almacenar tu nombre

var nombre="Mario";
console.log("mi nombre es "+nombre);
//Crear una variable para almacenar tus apellidos
var apellidos="Santurio Santos"
console.log("mis apellidos son "+apellidos);
//Crear una variable para almacenar tu edad
var edad=27;
console.log("mi edad es "+edad);
//Almacenar en una constante tu nombre y apellidos
const nombreYapellido="Mario Santurio Santos";
//Mostrar por pantalla "Hola, mi nombre es: " junto con tu nombre y apellidos
console.log("Hola mundo");
//Muestra por pantalla el valor de una constante vacía
const vacia="";
console.log(vacia);
//Muestra por pantalla el valor de una constante sin definir
var nodenifida;
console.log(nodenifida);
//Intenta reescribir el valor de la constante con tu nombre y muéstralo por pantalla
//Comprueba el tipo de dato de la variable con tu edad
typeof(edad);
//Crear una variable "mayorDeEdad" de tipo let, iniciarla a false, y si tu edad es mayor o igual a 18 años se le asignará el valor verdadero. Fuera de esa comprobación (fuera del condicional), mostrar el valor de esa variable por pantalla. Dejar un comentario explicando por qué muestra por pantalla el valor que tiene.
let mayorDeEdad=false;
if(edad>18){
    mayorDeEdad==true;
}
//Realizar lo mismo que el enunciado anterior pero con una variable de tipo var
var mEdad=false;
if(edad>18){
     mEdad=true;
}
//Crear dos variables con números y realizar las 5 operaciones básicas (suma, resta, multiplicación, división y resto de dividir). Mostrar por pantalla el nombre de la operación el, los números y el resultado en cada uno de los casos
var num1=2;
var num2=1;
var suma=(num1+num2);
var resta=(num1-num2);
var multiplicación=(num1*num2);
var division=(num1/num2);
var restoDe_division=(num1%num2);
console.log("El resultado de la suma es "+suma);
console.log("El resultado de la resta es "+resta);
console.log("El resultado de la multiplicación es "+multiplicación);
console.log("El resultado de la división es "+division);
console.log("El resultado de la división entera es "+restoDe_division);
//👹Hardmode (opcional): realizar el caso anterior con un array de operaciones y con un bucle
var arraycosas=['+','-','*','/','%'];
for (element of arraycosas){
    switch(element){
        case '+':
            console.log(suma);
            break;
        case '-':
            console.log(resta);
            break;
        case '*':
            console.log(multiplicación);
            break;
        case '/':
            console.log(division);
            break;
        case '%':
            console.log(restoDe_division);
            break;
        default:
            break;
    }

}

//Calcular el area de un triángulo dada su base y su altura y mostrar por pantalla el resultado
var altura=2;
var base=3;
var area_triangulo=(base*altura)/2;
console.log("El área es "+area_triangulo);
//Calcular el área de una circunferencia para un radio dado
var radio=4;
var area_circulo=(Math.pow(radio,2))*Math.PI;
console.log("El área es "+area_circulo);
//Calcular el tiempo de caida libre de un objeto para una determinada masa y altura. Mostrar por pantalla resultado y valores
var altura=5;
var gravedad=9.8;
var formula=Math.sqrt((2*altura)/gravedad);
console.log(formula);
//Calcular  el volumen de la tierra en base a su diámetro y cuántas veces es mayor el volumen de la tierra que el de la luna (también calculado en base a su diámetro)
var diametro_tierra=12742000;
var diametro_luna=3478800;
var radio_luna=diametro_luna/2;
var volumen_luna=4/3*Math.PI*(Math.pow(radio_luna,3));
var radio_tierra=diametro_tierra/2;
var volumen_tierra=(4/3*Math.PI)*(Math.pow(radio_tierra,3));
var diferencia_volumen=volumen_tierra/volumen_luna;
console.log(diferencia_volumen);