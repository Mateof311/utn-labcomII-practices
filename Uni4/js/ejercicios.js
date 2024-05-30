/*
1
Realizar un programa que simule, mediante una función
denominada cuenta, como el ordenador cuenta por pantalla, desde
0 hasta un número a determinar por el usuario. Dicho número se
pide en la función principal y se envía a la función cuenta
por valor, donde se irán imprimiendo. 

*/

function BotonCuenta(){
    let ingreso= Number(document.getElementById("numero_a_contar").value)
    Cuenta(ingreso)
}
function Cuenta(numero){
    let resultado = document.getElementById("resultado_contar")
    resultado.innerHTML= ""
    for(let i=0;i<=numero;i++){
        resultado.innerHTML += i + " "
    }
}
let boton_contar=document.getElementById("boton_contar")
boton_contar.onclick=BotonCuenta
// se usa sin los parentesis la funcion (nsoe porque al ponerlos no se ejecuta bien)

/*
2
Realizar un programa que una vez que solicita dos números por
teclado, los pasa
a una función donde se calcula la suma de éstos. La función
devolverá dicho resultado, pero en el caso de que salga negativo,
deberá cambiarle el signo antes de devolverlo. Imprimir el
resultado en la función principal. 
*/
function BotonSumar(){
    let numero1=Number(document.getElementById("suma-1").value)
    let numero2=Number(document.getElementById("suma-2").value)
    document.getElementById("resultado-suma").innerHTML = "La suma es: " +  Sumar(numero1,numero2)
}
function Sumar(a,b){
    let resultado = a+b
    if(resultado<0){
        resultado *= -1
    }
    return resultado
}
//3 IGUAL AL DE WORD
/**
4
Crear un programa que permita cargar un entero en un text y al
presionar un botón nos muestre dicho valor elevado al cubo
(emplear la función alert).
*/
function BotonCubo(){
    let numero_al_cubo = document.getElementById("numero-al-cubo").value
    if(isNaN(numero_al_cubo) || numero_al_cubo === ""){
        alert("Ingrese un numero")
    }else{
        alert( "Numero ingresado: " + numero_al_cubo + " al cubo: " + CalcularCubo(numero_al_cubo))   
    }
}
function CalcularCubo(numero){
    return numero ** 3
}

/**
5
Cargar dos números en objetos de tipo text y al presionar un
botón, mostrar el mayor. 
OBJETOS? o con 2 imputs tipo text es lo mismo?
 */
/*
6
Cargar un nombre y un apellido en sendos text. Al presionar un
botón, concatenarlos y mostrarlos en un tercer text (Tener en
cuenta que podemos modificar la propiedad value de un objeto
TEXT cuando ocurre un evento)
*/
function BotonNombre(){
    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let completo=document.getElementById("resultado-nombre")
    completo.value=ConcatenarNombre(nombre,apellido)
    
}

function ConcatenarNombre(nom,ap){
    if(nom===""||ap===""){
        alert("Ingreso incorrecto")
    }else{
        let resultado= nom +" "+ ap
        return resultado
    }
}