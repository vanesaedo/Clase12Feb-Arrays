
//Ejercicio 1 Tabla Multiplicar

/*const tablaMultiplicar = (num)=> {
    let numero = 0; 
    let tabla = [];
     for (let i = 0; i <= 10; i++) {
        numero = num * i;
	    tabla.push(`${num} X ${i} = ${numero}`);
     }
      return tabla;
    }
console.log(tablaMultiplicar (5));*/
 
//Ejercicio 2 : Pedir número al usuario

const guardarNumeros = (introUserNum) => {
    let arrayFinal = [];    
  
    introUserNum = parseInt(window.prompt('Introduce un número'));
    while (introUserNum != 0){
        arrayFinal.push(introUserNum);
        introUserNum = parseInt(window.prompt('Introduce un número'));
    }
        return arrayFinal;
}  */  
//.toSorted: Método que ordena el array de menor a mayor.
/*(a, b) => (a - b) es una función que compara un número del array con el siguiente, para comprobar cuál es mayor. La escribo porque ordenaba considerando sólo el primer dígito de un número de dos dígitos. Por ejemplo: 1, 23, 4, ..Con esta función lo ordena así: 1, 4, 23..).*/
console.log(guardarNumeros().toSorted((a, b) => (a - b)));

//E3V2 otra versión más simple por Alejandro

function pedirNumeros(){

    let numeros = [];
    
    while(true){ // 6 veces -> 0...5
      const introUserNum = parseInt(prompt('Introduce un número'));
      if(introUserNum == 0) break;
      numeros.push(introUserNum);
    }
      return numeros.sort((a,b)=> a-b);
    }

//E3V3 Con Do While

// While 0....N veces
// Do-while 1....N veces

//Ejercicio 2 : Pedir número al usuario
const guardarNumeros = () => {
    let arrayFinal = [];
    let introUserNum = NaN;
   do {
      introUserNum = parseInt(prompt("Introduce un número")); //0
      arrayFinal.push(introUserNum);
        
    } while (introUserNum != 0) 
  
    arrayFinal.pop(); // saca el 0 del final
    return  arrayFinal.sort((a, b) => a - b); // ordena
  };
  
  console.log(guardarNumeros());
//Ejercicio 3. 

//document.write(arrayFiunal.toSorted());
//document.write(arrayFinal.length);
//divisible por 4, por 400, no por 100



const esBisiesto = introYear => {
    introYear = window.prompt('Introduce un año');
    let multiplo4 = (introYear % 4 == 0);
    let multiplo100 = (introYear % 100 == 0);
    let multiplo400 = (introYear % 400 == 0);

    if (!multiplo4) {
        alert("No es bisiesto");
    }
    else if (!multiplo400 && multiplo100) {
        alert("No es bisiesto");
    } else {
        alert("Si es bisiesto");
    }
} 
esBisiesto();

