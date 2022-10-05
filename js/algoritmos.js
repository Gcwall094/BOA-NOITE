
function casos() {
    let vocal=0;
 
    
    vocal = parseInt(prompt(' ingresar un numero a azar de "1 a 5 en orden vocal" '));
    
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
         
   
    


function basicOperations() {
    let a = 0;
    let b = 0;
    let suma = 0;
    let resta = 0;
    let multiplicacion = 0;
    let division = 0;

    a = parseInt(prompt('Ingrese el primer valor'));
    b = parseInt(prompt('Ingrese el segundo valor'));

    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;

    alert('El resultado de la suma es: ' + suma);
    alert('El resultado de la resta es: ' + resta);
    alert('El resultado de la multiplicacion es: ' + multiplicacion);
    alert('El resultado de la division es: ' + division);
}




function Secuencia(){
    let mes = 0;
    mes = parseInt(prompt("Por favor ingrese el numero mes"));
    
     for (mes=mes; mes<13 ; mes++) 
        alert('el numero de mes es :'+ mes);
        
     }
    
   





function añoNacimiento() {
    let añoActual = 0;
    let edad = 0;
    let añoNacimiento = 0;
    
    añoActual = parseInt(prompt('Ingrese el año actual'));
    edad = parseInt(prompt('Ingrese la edad'));

    añoNacimiento = añoActual - edad;

    alert('El año de nacimiento del usuario es: ' + añoNacimiento);
}

