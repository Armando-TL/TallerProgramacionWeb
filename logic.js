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

                // Agregar más casos para cada ejercicio
            }
        }
    }
});