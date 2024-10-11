new Vue({
    el: '#app',
    data: {
        ejercicios: [
            {
                id: 1,
                titulo: 'Calcular el Área de un Cuadrado',
                descripcion: 'Este ejercicio calcula el área de un cuadrado dado el valor de uno de sus lados.',
                visible: false,
                campos: [
                    { id: 'lado', label: 'Lado del cuadrado:', tipo: 'number', valor: '' }
                ],
                resultado: ''
            },
            {
                id: 2,
                titulo: 'Calcular el Área de un Círculo',
                descripcion: 'Este ejercicio calcula el área de un círculo dado el radio.',
                visible: false,
                campos: [
                    { id: 'radio', label: 'Radio del círculo:', tipo: 'number', valor: '' }
                ],
                resultado: ''
            },
            {
                id: 3,
                titulo: 'Convertir de Grados Fahrenheit a Celsius.',
                descripcion: 'Pasa grados a Fahrenheit.',
                visible: false,
                campos: [
                    { id: 'grados', label: 'Grados Fahrenheit:', tipo: 'number', valor: '' }
                ],
                resultado: ''
            },
            {
                id: 4,
                titulo: 'Suma y resta.',
                descripcion: 'Puedes hacer multiplicaciones y divisiones al tiempo.',
                visible: false,
                campos: [
                    { id: 'operation', label: 'Ingrese su operación:', tipo: 'text', valor: '' }
                ],
                resultado: ''
            },
            {
                id: 5,
                titulo: 'Mayor de 2 números.',
                descripcion: 'Determina el numero mayor',
                visible: false,
                campos: [
                    { id: 'a', label: 'Ingrese su primer numero:', tipo: 'number', valor: '' },
                    { id: 'b', label: 'Ingrese su segundo numero:', tipo: 'number', valor: '' }
                ],
                resultado: ''
            },
            {
                id: 6,
                titulo: 'Área de un Triángulo.',
                descripcion: 'Determina el área de un Triángulo.',
                visible: false,
                campos: [
                    { id: 'base', label: 'Ingrese su base:', tipo: 'number', valor: '' },
                    { id: 'altura', label: 'Ingrese su altura:', tipo: 'number', valor: '' }
                ],
                resultado: ''
            },
            {
                id: 7,
                titulo: 'Mayor de 3 números.',
                descripcion: 'Determina el numero mayor',
                visible: false,
                campos: [
                    { id: 'a', label: 'Ingrese un numero:', tipo: 'number', valor: '' },
                    { id: 'b', label: 'Ingrese otro numero:', tipo: 'number', valor: '' },
                    { id: 'c', label: 'Ingrese otro numero:', tipo: 'number', valor: '' }
                ],
                resultado: ''
            },
            {
                id: 8,
                titulo: 'Generar la seria que permita visualizar los números del 1 al 7.',
                descripcion: 'Lista de 7 numeros.',
                visible: false,
                campos: [],
                resultado: ''
            },
            {
                id: 9,
                titulo: 'Determinar cuál de los dos valores es el mayor y menor.',
                descripcion: 'Desarrolle un programa que permita leer dos valores distintos, determinar cuál de los dos valores es el mayor y menor.',
                visible: false,
                campos: [
                    { id: 'a', label: 'Ingrese un numero:', tipo: 'number', valor: '' },
                    { id: 'b', label: 'Ingrese otro numero:', tipo: 'number', valor: '' },
                ],
                resultado: ''
            },
            {
                id: 10,
                titulo: 'Determinar cuál  valor es el mayor y menor.',
                descripcion: 'Desarrolle un programa que permita leer tres valores y almacenarlos en las variables A, B y C respectivamente. Debe imprimir cual es el mayor y cuál es el menor. recuerde constatar que los tres valores introducidos por el teclado sean valores distintos. Presente un mensaje de alerta en caso de que se detecte la introducción de valores iguales.',
                visible: false,
                campos: [
                    { id: 'A', label: 'Ingrese un numero:', tipo: 'number', valor: '' },
                    { id: 'B', label: 'Ingrese otro numero:', tipo: 'number', valor: '' },
                    { id: 'C', label: 'Ingrese otro numero:', tipo: 'number', valor: '' },
                ],
                resultado: ''
            },
            {
                id: 11,
                titulo: 'Determinar cuál  valor es el mayor y menor.',
                descripcion: 'Desarrolle un programa que lea cuatro números diferentes y a continuación imprima el mayor de\n' +
                    'los cuatro números introducidos y también el menor de ellos.',
                visible: false,
                campos: [
                    { id: 'A', label: 'Ingrese un numero:', tipo: 'number', valor: '' },
                    { id: 'B', label: 'Ingrese otro numero:', tipo: 'number', valor: '' },
                    { id: 'C', label: 'Ingrese otro numero:', tipo: 'number', valor: '' },
                    { id: 'D', label: 'Ingrese otro numero:', tipo: 'number', valor: '' },
                ],
                resultado: ''
            },
            {
                id: 12,
                titulo: 'Sumatoria de numeros',
                descripcion: 'Desarrolle un programa que realice la sumatoria de los números enteros comprendidos entre el 1\n' +
                    'y el 10, es decir, 1 + 2 + 3 +…. + 10.',
                visible: false,
                campos: [],
                resultado: ''
            },
            {
                id: 13,
                titulo: 'Sumatoria de numeros',
                descripcion: 'Desarrolle un programa que realice la sumatoria de los números enteros múltiplos de 5,\n' +
                    'comprendidos entre el 1 y el 100, es decir, 5 + 10 + 15 +…. + 100. El programa deberá imprimir\n' +
                    'los números en cuestión y finalmente su sumatoria.',
                visible: false,
                campos: [],
                resultado: ''
            },
            {
                id: 14,
                titulo: 'Sumatoria de numeros',
                descripcion: 'Desarrolle un programa que realice la sumatoria de los números enteros pares comprendidos entre\n' +
                    'el 1 y el 100, es decir, 2 + 4 + 6 +…. + 100. El programa deberá imprimir los números en cuestión\n' +
                    'y finalmente su sumatoria.',
                visible: false,
                campos: [],
                resultado: ''
            },
            {
                id: 15,
                titulo: 'Sumatoria de numeros',
                descripcion: 'Desarrolle un programa que lea los primeros 300 números enteros y determine cuántos de ellos\n' +
                    'son impares; al final deberá indicar su sumatoria.',
                visible: false,
                campos: [],
                resultado: ''
            },
            {
                id: 16,
                titulo: 'Hallar hipotenusa',
                descripcion: 'Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de sus dos catetos.',
                visible: false,
                campos: [
                    { id: 'A', label: 'Ingrese un cateto:', tipo: 'number', valor: '' },
                    { id: 'B', label: 'Ingrese otro cateto:', tipo: 'number', valor: '' },
                ],
                resultado: ''
            },
            {
                id: 17,
                titulo: 'Resolver cilindro',
                descripcion: 'Desarrolle un programa que permita determinar el área y volumen de un cilindro dado su radio (R)\n' +
                    'y altura (H).',
                visible: false,
                campos: [
                    { id: 'radio', label: 'Ingrese el radio:', tipo: 'number', valor: '' },
                    { id: 'altura', label: 'Ingrese la altura:', tipo: 'number', valor: '' },
                ],
                resultado: ''
            },
            {
                id: 18,
                titulo: 'Hallar impar',
                descripcion: 'Desarrolle un programa que permita leer un valor cualquiera N y escriba si dicho número es par o\n' +
                    'impar.',
                visible: false,
                campos: [
                    { id: 'numero', label: 'Ingrese un numero:', tipo: 'number', valor: '' }
                ],
                resultado: ''
            },
            {
                id: 19,
                titulo: 'Hallar impar',
                descripcion: 'Desarrolle un programa que le permita determinar de una lista de 10 números ingresados por el\n' +
                    'usuario: ' +
                    'a. ¿Cuántos están entre el 50 y 75, ambos inclusive?\n' +
                    'b. ¿Cuántos mayores de 80?\n' +
                    'c. ¿Cuántos menores de 30?',
                visible: false,
                campos: [
                    { id: 'numeros', label: 'Ingrese los 10 numeros separados por "-":', tipo: 'text', valor: '' }
                ],
                resultado: ''
            },
            {
                id: 20,
                titulo: 'Ordenar numeros',
                descripcion: 'Desarrolle un programa que permita leer dos números y ordenarlos de menor a mayor, si es el\n' +
                    'caso.',
                visible: false,
                campos: [
                    { id: 'numeros', label: 'Ingrese un numero:', tipo: 'number', valor: '' },
                    { id: 'numeros', label: 'Ingrese otro numero:', tipo: 'number', valor: '' }
                ],
                resultado: ''
            },

        ]
    },
    methods: {
        ejecutarEjercicio(ejercicio) {
            // Lógica para ejecutar cada ejercicio
            switch (ejercicio.id) {
                case 1:
                    const lado = parseFloat(ejercicio.campos[0].valor);
                    if (!isNaN(lado)) {
                        ejercicio.resultado = `El área del cuadrado es ${lado * lado}`;
                    } else {
                        ejercicio.resultado = 'Error: Valor inválido';
                    }
                    break;
                case 2:
                    const radio = parseFloat(ejercicio.campos[0].valor);
                    if (!isNaN(radio)) {
                        ejercicio.resultado = `El área del círculo es ${(Math.PI * Math.pow(radio, 2)).toFixed(2)}`;
                    } else {
                        ejercicio.resultado = 'Error: Valor inválido';
                    }
                    break;
                case 3:
                    let grados = parseFloat(ejercicio.campos[0].valor);
                    if (!isNaN(grados)) {
                        grados -= 32;
                        let r = (grados * 5) / 9;
                        ejercicio.resultado = r.toFixed(2);
                    } else {
                        ejercicio.resultado = 'Error: Valor inválido';
                    }
                    break;
                case 4:
                    const operation = ejercicio.campos[0].valor;
                    let r;
                    try {
                        r = eval(operation);
                        ejercicio.resultado = r.toString();
                    } catch (err) {
                        ejercicio.resultado = "Error en el campo";
                    }
                    break
                case 5:
                    const a = ejercicio.campos[0].valor;
                    const b = ejercicio.campos[1].valor;

                    if (!isNaN(a * b)) {
                        let r = Math.max(a, b);
                        ejercicio.resultado  = r.toString();
                    } else {
                        ejercicio.resultado = "Error en el campo";
                    }
                    break
                case 6:
                    const base = ejercicio.campos[0].valor
                    const altura = ejercicio.campos[1].valor

                    if (!isNaN(base * altura)) {
                        let r = (base * altura) / 2;
                        ejercicio.resultado = r.toFixed(2).toString();
                    } else {
                        ejercicio.resultado = 'Error en el campo';
                    }
                    break
                case 7:
                    const numberOne = ejercicio.campos[0].valor
                    const numberTwo = ejercicio.campos[1].valor
                    const numberThree = ejercicio.campos[2].valor

                    if (!isNaN(numberOne * numberTwo * numberThree)) {
                        let r = Math.max(numberOne, numberTwo, numberThree);
                        ejercicio.resultado = r.toString();
                    } else {
                        ejercicio.resultado = "Error en el campo";
                    }
                    break
                case 8:
                    let list = '';
                    for (let i = 1; i < 8; i++) {
                        list += i.toString() + ' ';
                    }
                    ejercicio.resultado = list
                    break
                case 9:
                    let numOne = ejercicio.campos[0].valor;
                    let numTwo = ejercicio.campos[1].valor;

                    if (!isNaN(numOne) && !isNaN(numTwo) && numOne !== numTwo) {
                        let mayor = Math.max(numOne, numTwo);
                        let menor = Math.min(numOne, numTwo);
                        ejercicio.resultado = `El numero mayor es ${mayor} y el numero menor es ${menor}`
                    } else {
                        ejercicio.resultado = "Error en el campo";
                    }
                    break
                case 10:
                    let A = ejercicio.campos[0].valor
                    let B = ejercicio.campos[1].valor
                    let C = ejercicio.campos[2].valor

                    if (!isNaN(A) && !isNaN(B) && !isNaN(C) && A !== B && A !== C && B !== C) {
                        let mayor = Math.max(A, B, C);
                        let menor = Math.min(A, B, C);
                        ejercicio.resultado = `El numero mayor es ${mayor} y el numero menor es ${menor}`;
                    } else {
                        ejercicio.resultado = "Error en el campo";
                    }
                    break
                case 11:
                    let uno = ejercicio.campos[0].valor;
                    let dos = ejercicio.campos[1].valor;
                    let tres = ejercicio.campos[2].valor;
                    let cuatro = ejercicio.campos[3].valor;

                    if (!isNaN(uno) && !isNaN(dos) && !isNaN(tres) && !isNaN(cuatro) && uno !== dos && uno !== tres && uno !== cuatro && dos !== tres && dos !== cuatro && cuatro !== tres) {
                        let mayor = Math.max(uno, dos, tres, cuatro);
                        let menor = Math.min(uno, dos, tres, cuatro);
                        ejercicio.resultado = `El numero mayor es ${mayor} y el numero menor es ${menor}`;
                    } else {
                        ejercicio.resultado = "Error en el campo";
                    }
                    break
                case 12:
                    let sumatoria = 0;
                    for (let i = 1; i <= 10; i++) {
                        sumatoria += i;
                    }
                    ejercicio.resultado = sumatoria;
                    break
                case 13:
                    let valores = 0;
                   // let r = '';
                    for (let i = 1; i <= 100; i++) {
                        if (i % 5 === 0) {
                            valores += i;
                            ejercicio.resultado += `${i.toString()} `
                        }
                    }
                    ejercicio.resultado += `La sumatoria total es: ${valores}`
                    break
                case 14:
                    let init = 0;
                    for (let i = 1; i <= 100; i++) {
                        if (i % 2 === 0) {
                            init += i;
                            ejercicio.resultado += `${i.toString()} `;
                        }
                    }
                    ejercicio.resultado += `La sumatoria total es: ${init}`
                    break
                case 15:
                    let sum = 0;
                    let x = 0;
                    for (let i = 1; i <= 300; i++) {
                        if (i % 2 > 0) {
                            sum += i;
                            x++;
                        }
                    }
                    ejercicio.resultado = `${x} numeros son impares y la sumatoria total es: ${sum}`
                    break
                case 16:
                    let catetoOne = ejercicio.campos[0].valor
                    let catetoTwo = ejercicio.campos[1].valor

                    if (!isNaN(catetoOne) && !isNaN(catetoTwo)) {
                        let re = Math.sqrt(Math.pow(catetoOne, 2) + Math.pow(catetoTwo, 2));
                        ejercicio.resultado = 'La hipotenusa es: '.concat(re.toFixed(2).toString())
                    } else {
                        ejercicio.resultado = 'Error en el campo'
                    }
                    break
                case 17:
                    let radioo = ejercicio.campos[0].valor
                    let alturaa = ejercicio.campos[1].valor

                    if (!isNaN(radioo) && !isNaN(alturaa)) {
                        let a = (2 * Math.PI * radioo * alturaa) + (2 * Math.PI * Math.pow(radioo, 2));
                        let area = a.toFixed(2);

                        let v = Math.PI * Math.pow(radioo, 2) * alturaa;
                        let volumen = v.toFixed(2);

                        ejercicio.resultado = `El area del cilindro es ${area} y el volumen del cilindro es ${volumen}`
                    } else {
                        ejercicio.resultado = "Error en el campo.";
                    }
                    break
                case 18:
                    let numero = ejercicio.campos[0].valor
                    if (!isNaN(numero)) {
                        if (numero % 2 === 0) {
                            ejercicio.resultado = `El numero ${numero} es par`
                        } else {
                            ejercicio.resultado = `El numero ${numero} es impar`
                        }
                    } else {
                        ejercicio.resultado = "Error en el campo.";
                    }
                    break
                case 19:

                    let valor = ejercicio.campos[0].valor;
                    let ok = true;
                    let cadena = valor.split('-');
                    let numbers = new Array(10);
                    let conditionA = 0; // entre 50 y 75
                    let conditionB = 0; // mayores a 80
                    let conditionC = 0; // menores a 30

                    if (cadena.length === 10) {
                        for (let i = 0; i < 10; i++) {
                            let v = parseFloat(cadena[i]);
                            if (!isNaN(v)) {
                                numbers[i] = v;
                            } else {
                               ejercicio.resultado = "Todos los números no son válidos o no son suficientes.";
                                ok = false;
                                break;
                            }
                        }
                    } else {
                        ejercicio.resultado = "Todos los números no son válidos o no son suficientes.";
                        ok = false;
                    }

                    if (ok) {
                        for (const number of numbers) {
                            if (number >= 50 && number <= 75) {
                                conditionA++;
                            }
                            if (number > 80) {
                                conditionB++;
                            }
                            if (number < 30) {
                                conditionC++;
                            }
                        }
                        ejercicio.resultado = `¿Cuántos están entre el 50 y 75, ambos inclusive?  "${conditionA}"  ¿Cuántos mayores de 80? "${conditionB}" ¿Cuántos menores de 30? "${conditionC}"`;
                    }
                    break
                case 20:
                    let nm = ejercicio.campos[0].valor
                    let nmb = ejercicio.campos[1].valor
                    let res = [];

                    if (!isNaN(nm) && !isNaN(nmb) && nm !== nmb) {
                        res = (nm < nmb) ? [nm, nmb] : [nmb, nm];
                        ejercicio.resultado = res.join(' ');
                    } else {
                        ejercicio.resultado = "Error en el campo o los numeros son iguales.";
                    }
                    break

                // Agregar más casos para cada ejercicio
            }
        }
    }
});