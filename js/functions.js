function casos() {
    let vocal=0;
 
    
    vocal = parseInt(prompt('por favor ingresar vocal a evaluar '));
    
    switch (vocal) {
    case 1: 
    case 2:
    case 3:
    case 4:
    case 5:
    alert('la letra asignada es una vocal ') ;
        break;
    
   default:
   alert('la letra asignada es una consonante ') ;
   break;
   } 
   
   
   
  }
      
function opBasicas(){
    var A;
    var B;
    var Suma;
    var Resta;
    var Mult;
    var Div;

    A = parseInt(prompt("Por favor ingresar el primer valor"));
    B = parseInt(prompt("Por favor ingresar el segundo valor"));

    Suma = A+B;
    Resta = A-B;
    Mult = A*B;
    Div = A/B;
    alert("El resultado de la suma es: " + Suma+" La resta es: "+Resta+" La multiplicacion es: "+Mult+" La division es: "+Div);
}

function Secuencia(){
    var mes = 0;
    mes = parseInt(prompt("Por favor ingrese el numero mes"));
    
     for (mes=mes; mes<13; mes++) 
        alert('el numero de mes es :' + mes);
        
     }