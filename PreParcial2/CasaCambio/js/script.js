let Pesos=document.getElementById("cant-pesos")
let Moneda=document.getElementById("selec-moneda")
const PrecioDolar=1200
const PrecioEuro=1500

function Calcular(){
    let Pesos=document.getElementById("cant-pesos")
    let Moneda=document.getElementById("selec-moneda")
    let resultado=document.getElementById("mostrar-resultado")
    if(validar){
        let cant_pesos=Pesos.value
        let moneda=Moneda.value
        if(moneda == "DOLAR"){
        resultado.innerHTML= "Valor: " + cant_pesos/PrecioDolar + " dolares"
        }else{
            resultado.innerHTML= "Valor: " + cant_pesos/PrecioEuro + " euros"
        }
    }else{
        alert("Error")
    }
    
}

function validar(){
    if(Pesos.value === ""){
        alert("Ingreso de pesos erroneo")
        return false
    }else{
        if(Moneda.value === ""){
            alert("Seleccionar una moneda")
            return false
        }else{
            return true
        }
    }
}