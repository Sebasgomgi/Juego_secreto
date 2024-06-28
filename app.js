let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
condicionesIniciales();


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor ');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        };
        intentos ++;
        limpiarCaja();
    };
};

function limpiarCaja() {
    //querySelector -> selector genérico, va con #
    document.querySelector('#valorUsuario').value = '';
};

function generarNumeroSecreto() {
    let numeroGenerado = (Math.floor(Math.random()*numeroMaximo) + 1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {

    };

    //si número secreto está en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    };
};

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto! ' );
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1

}

function reiniciarJuego() {
    //Limpiar la caja, indicar mensaje de números, generar número aleatorio, 
    //deshabilitar nuevoJuego e intentos
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true)
    
};













//DESAFIO #1

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora del desafío '

// function console() {
//     alert('El botón fue clicado ')
// }

// function prompto() {
//     let ciudad = prompt('Ingresa una ciudad de Colombia: ');
//     alert(`Estuve en ${ciudad} y me acordé de tí. `);
// };

// function alerta() {
//     alert('Yo amo JS')
// }

// function suma() {
//     let n1 = parseInt(prompt('ingresa un número: '));
//     let n2 = parseInt(prompt('ingresa el segundo número: '));
//     resultado = n1 + n2;
//     alert(`La suma total de ${n1} + ${n2} es ${resultado}`);
// }


//DESAFIO #2

// const holaMundo = () => {console.log('Hola Mundo!')};
// holaMundo();

// const saludo = (nombre) => {console.log(`Hola ${nombre}`)};
// saludo('Sebas');

// const doble = (num) => {console.log(num * 2)}
// doble(57);

// const promedio = (num1, num2, num3) => {console.log((num1 + num2 + num3)/3)};
// promedio(57, 23, 19);

// function mayor(n1, n2) {
//     if (n1 > n2) {
//         console.log(`n1 es un número mayor ${n1}`)
//     } else if (n1 < n2) {
//         console.log(`n2 es un número mayor ${n2}`)
//     } else {
//         console.log('Son iguales. ')
//     };
// };

// mayor(3794, 5843);

// const potencia = (nu1) => {console.log(nu1 * nu1)};
// potencia(4);

//DESAFIO #

// pi = 3.14

// const calculoIMC = (altura, peso) => {console.log(imc = peso/(altura ** 2))};
// calculoIMC(1.77, 62);

// function factorial(n1) {
//     let resultado = 1
//     while(n1 > 0) {
//         resultado *= n1;
//         console.log(resultado)
//         n1 --;
//     }
//     return resultado
// }

// factorial(9);

// function convertor(dólares) {
//     pesos = dólares * 4165;
//     console.log(pesos);    
// };

// convertor(20);

// const conversor = (dolares) => {console.log(pesosc = dolares * 4165)}

// conversor(2200);

// const areaPerimetro = (base, alto) => {area = base * alto; perimetro = (2 * base) + (2 * alto); console.log(`La base es ${base}, la altura ${alto}, su area ${area} y el perimetro es ${perimetro}`)};

// areaPerimetro(13, 19);

// const circular = (radio) => {areaCircular = (radio ** 2) * pi; perimetroCircular = 2*pi*radio; console.log(`El radio es ${radio}, su area es ${areaCircular} y su perimetro ${perimetroCircular}`)}

// circular(3);

// function tablaMultiplicar(num) {
//     console.log(`La tabla de multiplicar del ${num}: `)
//     for (let multiplo = 1; multiplo < 11; multiplo++) {
//         console.log(`${num} * ${multiplo} = ${multiplo*num}`);
//     }
// }

// tablaMultiplicar(7);

// function mostrarTablaDeMultiplicar(numero) {
//     for (var i = 1; i <= 10; i++) {
//       var resultado = numero * i;
//       console.log(numero + " x " + i + " = " + resultado);
//     }
//   }
//   // Ejemplo de uso
//   let numero = 7;
//   mostrarTablaDeMultiplicar(numero);
  
//DESAFIO #4

// lenguajesDeProgramación = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// lenguajesDeProgramación2 = ['Java', 'Ruby', 'GoLang']

// function agregarLista(lista) {
//     for (let index = 0; index < lenguajesDeProgramación2.length; index++) {
//         const element = lenguajesDeProgramación2[index];
//         lenguajesDeProgramación.push(element)
//     console.log(lenguajesDeProgramación)
        
//     };
// };

// agregarLista(lenguajesDeProgramación2);

// const mostrarLenguages = (array) => {for (let index = 0; index < array.length; index++) {
//     const element = array[index]; console.log(element)}};

// mostrarLenguages(lenguajesDeProgramación);

// function OrdenInverso (lista) {
//     for (let i = lista.length - 1; i >= 0; i--) {
//         const element1 = lista[i];
//         console.log(lenguajesDeProgramación[i])
        
//     };
// };

// OrdenInverso(lenguajesDeProgramación);

// const numbers = [19, 23, 99, 77, 57, 47, 3];

// function promedio(list) {
//     let total = 0;
//     for (let k = 0; k < list.length; k++) {
//         total += list[k];
//     };
//     console.log(total/list.length);
// };

// promedio(numbers);

// function mayorMenor(arreglo) {
//     let mayor = arreglo[0];
//     let menor = arreglo[0];

//     for (let j = 0; j < arreglo.length; j++) {
//         if(arreglo[j] > mayor) {
//             mayor = arreglo[j]
//         };
//         if(arreglo[j] < menor) {
//             menor = arreglo[j]
//         }; 
//     }
//     console.log(`El número mayor es ${mayor} y el menor ${menor}`);
// };

// mayorMenor(numbers);

// function buscarElemento(elemento2) {
//     elemento2 = parseInt(elemento2);
//     for (let buscar = 0; buscar < numbers.length; buscar++) {
//         if (elemento2 === numbers[buscar]) {
//             return (`Encontrado el elemento en el índice ${buscar}`)
//         };
//     };
//     return ('Elemento no encontrado -1')
// };

// console.log(buscarElemento(77));

// function sumaListas (list1, list2) {
//     let list3 = [];
//     if (list1.length === list2.length) {
//         for (let g = 0; g < list1.length; g++) {
//             let suma = list1[g] + list2[g];
//             list3.push(suma);
//         };
//         return list3;
//     } else {
//         return 'No es posible hacer suma uno a uno';
//     };
// };

// jaja = [1, 2, 3, 4, 5]
// jeje = [9, 8, 7, 6, 5]

// console.log(sumaListas(jaja, jeje));

// function cuadrado(lista1) {
//     potencias = [];
//     for (let elevar = 0; elevar < lista1.length; elevar++) {
//         let potencia = lista1[elevar] ** 2;
//         potencias.push(potencia); 
//     };
//     return potencias;
// }

// console.log(cuadrado(jeje));



