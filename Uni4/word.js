//1
function CalcularMayor(){
    let numero1=Number(document.getElementById("num1").value);
    let numero2=Number(document.getElementById("num2").value);
    let numero3=Number(document.getElementById("num3").value);
    let mostrar_mayor=document.getElementById("resutado-mayor");
    let mayor;
    if(numero1>=numero2 && numero1>=numero3){
        mayor=numero1;
    }else if(numero2>=numero1 && numero2>=numero3){
        mayor= numero2;
    }else{
        mayor= numero3;
    }
    mostrar_mayor.value = mayor;
    //si es un div se puede usar innetHTML, porque no usa value
    document.getElementById("mostrar-inner").innerHTML=mayor;
}

//2
function CalcularSigno(){
    let numero_signo=Number(document.getElementById("signo-num").value);
    if(numero_signo == ""){
        alert("Debe ingresar un numero primero");
    }else if(numero_signo==0){
        document.getElementById("resultado-signo").innerHTML = "El numero ingresado es 0";
    }else if (numero_signo>0){
        document.getElementById("resultado-signo").innerHTML = "El numero ingresado es POSITIVO";
    }else{
        document.getElementById("resultado-signo").innerHTML = "El numero ingresado es NEGATIVO";
    }
}

//3
function CalcularPorcentaje(){
    let nombre=document.getElementById("nombre-postulante").value;
    let preguntas=Number(document.getElementById("cant-preguntas").value);
    let correctas=Number(document.getElementById("cant-correctas").value);
    let porcentaje = (correctas*100)/preguntas;
    let nivel;
    if(correctas>preguntas){
        alert("Ingreso incorrecto, vuela a intentar.")
    }else if(porcentaje>=90){
        nivel="Superior";
    }else if (porcentaje>=75){
        nivel="Medio";
    }else if (porcentaje>=50){
        nivel="Regular"
    }else{
        nivel="Fuera de Nivel"
    }
    document.getElementById("resultado-porcentaje").innerHTML= "El postulante "+ nombre +" obtuvo un nivel: " + nivel
}

//4