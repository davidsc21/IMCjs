const saludo = 'Bienvenido a nuestra calculadora IMC';
const resultado = 'Su índice de masa corporal es: ';
const mensaje = 'Basándonos en ese resultado, su estado dentro del IMC es: ';
const mensajeError = 'Datos inválidos :(';

alert(saludo);

let running = true;
let pacientes = [];
let hombresSobrepeso = 0;
let mujeresSobrepeso = 0;
let menores = 0;

while (running) {
    let opcion = prompt(
        'Elija su opción:\n' +
        '1. Registrar paciente\n' +
        '2. Total pacientes\n' +
        '3. Promedio de edades\n' +
        '4. Total menores de edad\n' +
        '5. Pacientes con sobrepeso\n' +
        '6. Paciente con menor IMC\n' +
        '7. Salir'
    );

    switch (opcion) {
        case "1":
            let paciente = {};

            paciente.nombre = prompt('Ingrese su nombre:');
            paciente.edad = Number(prompt('Ingrese su edad:'));
            if (paciente.edad < 18 && paciente.edad > 0) menores++;

            let genero = prompt('Ingrese su género:\n1. Hombre\n2. Mujer');
            paciente.genero = genero === '1' ? 'Hombre' : 'Mujer';

            paciente.id = prompt('Ingrese su ID:');
            paciente.peso = Number(prompt('Ingrese su peso en kg:'));
            paciente.estatura = Number(prompt('Ingrese su estatura en m:'));

            paciente.imc = paciente.peso / (paciente.estatura ** 2);
            alert(`${resultado} ${paciente.imc.toFixed(2)}`);

            if (paciente.imc < 18.5) {
                alert(`${mensaje} Peso inferior al normal`);
            } else if (paciente.imc >= 18.5 && paciente.imc <= 24.9) {
                alert(`${mensaje} Normal`);
            } else if (paciente.imc >= 25 && paciente.imc <= 29.9) {
                alert(`${mensaje} Peso superior al normal`);
            } else if (paciente.imc >= 30) {
                alert(`${mensaje} Obesidad`);
            } else {
                alert(mensajeError);
            }

            if (paciente.genero === 'Hombre' && paciente.imc >= 25) {
                hombresSobrepeso++;
            } else if (paciente.genero === 'Mujer' && paciente.imc >= 25) {
                mujeresSobrepeso++;
            }

            pacientes.push(paciente);
            break;

        case "2":
            alert(`El total de pacientes es: ${pacientes.length}`);
            break;

        case "3":
            if (pacientes.length === 0) {
                alert("Registre pacientes primero.");
                break;
            }

            let hombres = pacientes.filter(p => p.genero === 'Hombre');
            let mujeres = pacientes.filter(p => p.genero === 'Mujer');

            let promedioHombres = hombres.reduce((acc, p) => acc + p.edad, 0) / (hombres.length || 1);
            let promedioMujeres = mujeres.reduce((acc, p) => acc + p.edad, 0) / (mujeres.length || 1);
            let promedioTotal = pacientes.reduce((acc, p) => acc + p.edad, 0) / pacientes.length;

            alert(`Promedio de edad de hombres: ${promedioHombres.toFixed(2)}`);
            alert(`Promedio de edad de mujeres: ${promedioMujeres.toFixed(2)}`);
            alert(`Promedio total de edades: ${promedioTotal.toFixed(2)}`);
            break;

        case "4":
            alert(`El total de menores registrados es: ${menores}`);
            break;

        case "5":
            alert(`Hombres con sobrepeso u obesidad: ${hombresSobrepeso}`);
            alert(`Mujeres con sobrepeso u obesidad: ${mujeresSobrepeso}`);
            break;

        case "6":
            if (pacientes.length === 0) {
                alert("No hay pacientes registrados.");
                break;
            }

            let menorIMC = pacientes.reduce((min, p) => (p.imc < min.imc ? p : min), pacientes[0]);
            alert(`Paciente con menor IMC:\nNombre: ${menorIMC.nombre}\nIMC: ${menorIMC.imc.toFixed(2)}`);
            break;

        case "7":
            alert("Hasta luego...");
            running = false;
            break;

        default:
            alert("Opción inválida. Intente de nuevo.");
            break;
    }
}
