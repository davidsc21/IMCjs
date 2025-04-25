const Saludo = 'Bienvenido a nuestra calculadora IMC';
const resultado = 'Su indice de masa corporal es:'
const mensaje = 'Basandonos en ese resultado su estado dentro del imc es:';
const mensajeerror = 'Datos invalidos :('


alert(Saludo);
let running = true;
let menores = 0
let mujeres = 0;
let hombres = 0;
let hombresobre = 0;
let mujeresobre = 0;
let paciente = []
let datos = []
do{
    let opcion = prompt ('elija su opcion: \n1.Registar paciente\n2.Total pacientes \n3.Total menores de edad \n4.Total pacientes con sobrepeso\n5.Paciente con menor IMC\n6.salir')
    switch (opcion) {
        case "1":
            do {
                let nombre = prompt ('ingrese su nombre');
                if (nombre){
                    paciente.push(nombre);
                }
                let edad = prompt ('ingrese su edad');
                if (edad){
                    paciente.push(edad);
                }
                if(edad <18 && edad >0){
                    menores += 1;
                }
                let genero2 = prompt ('ingrese su genero \n1.Hombre\n2.Mujer')
                if (genero2){;
                    paciente.push(genero2);
                }
                if (genero2 == '1'){
                    hombres += 1;
                }else if (genero2 == '2'){
                    mujeres +=1;
                }
                let id = prompt ('ingrese su id');
                if (id){
                    paciente.push(id);
                }
                let peso = prompt('ingrese su peso en kg');
                let estatura = prompt ('ingrese su estatura en m');
                let imc = peso / (estatura ** 2);
                if (imc){
                    paciente.push(imc);
                }
                if (paciente){
                    datos.push(paciente);
                }
                alert(`${resultado}${imc}`);
                if (imc < 18.5){
                    alert(`${mensaje} ,"peso inferior al normal"`);
                } else if (imc >= 18.5 && imc <= 24.9 ){
                    alert(`${mensaje}, "normal"`);
                } else if (imc >= 25 && imc <= 29.9){
                    alert(`${mensaje}, "Peso superior al normal"`);
                } else if (imc >30){
                    alert(`${mensaje} , "obesidad"`);
                } else{
                    alert(mensajeerror)}
                if (genero2 == '1' && imc >= 25){
                    hombresobre += 1;
                }else if (genero2 == '2' && imc >= 25){
                    mujeresobre +=1;
                }
                alert.table(datos)
                break
            }while (running == true);
            
        case "2":
            if (hombres===0 && mujeres ===0){
                alert ("registre pacientes primero")
                
            }
            
            let total = hombres+mujeres;
            alert (`el total de pacientes es de: ${total}`);
            running == false;
            break
        case "3":
            do{
                if (hombres===0 && mujeres ===0){
                    alert ("registre pacientes primero")
                    break
                }running = false;
                let promediohombre = edad/hombres;
                alert (`el promedio de edad de los hombres es de ${promediohombre}`);
                let promediomujer = edad/mujeres;
                alert (`el promedio de edad de las mujeres es de ${promediomujer}`);
                let promedioedades = edad/ mujeres+hombres;
                alert (`el promedio de las edades de los pacientes totales es de: ${promedioedades}`);
                running == false;
                break
            }while (running == true);
            break
        case "4":
            do{
                if (hombres===0 && mujeres ===0){
                    console.log ("registre pacientes primero");
                    break
                }running = false;
                alert(`El total de menores registrados es de: ${menores}`);
                running = false;
                break
            }while (running == true);
            break
        case "5":
            do{
                if (hombres===0 && mujeres ===0){
                    console.log ("registre pacientes primero");
                    break
                }running = false;
                alert (`el total de hombres con sobrepeso o superior ${hombresobre}`);
                alert (`el total de mujeres con sobrepeso o superior ${mujeresobre}`);
                running == false;
                break
            }while ( running == true);
            break
        case "6":
            do{
                if (hombres===0 && mujeres ===0){
                    console.log ("registre pacientes primero");
                    break
                }running = false;
                let menorimc= Math.min(...datos.map(d => d.paciente));
                alert (`el menor IMC es: ${menorimc}`);
                running == false;
                break
            }while ( running == true);
            break;
        case "7":
            alert("hasta luego...")
            running ==false
            
        }
}while (running == true);
