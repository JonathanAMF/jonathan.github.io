// Usamos la variable para asignar el numero secreto que el usuario tendra que adivinar
let numeroParaJugar = parseInt(prompt('¿Entre cuantos numeros quieres adivinar 10, 100 o 100?'));
let numeroSecreto = Math.floor(Math.random()*numeroParaJugar)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = 'intento';
let maximosIntentos = 3;
while (numeroUsuario != numeroSecreto) {
    /* Usamos variable para guardar el numero que indique el usuario en el promt
    y usamos el parseInt para poder convertir el dato que nos da el usuario de sting a number
    */
    let numeroUsuario = parseInt(prompt(`Adivina el numero entre 1 y ${numeroParaJugar}`));
        //Usamos el console para poder ver el numero guardado en la consola
        console.log(numeroUsuario);

    // Cuando se cumpla la condicion
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario} tardaste ${intentos} ${intentos == 1 ? 'inteto' : 'intentos'} `);  

    } else{
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor')
        } else {
            alert('El numero es mayor');
        }
        
        //Cuando la condicion no se cumpla
        //alert('No acertaste el numero');
        intentos++;
        //palabraIntentos = 'intentos';
        if (intentos > 3){
            alert(`Llegaste al numero maximo de  ${maximosIntentos} intentos, el numero era ${numeroSecreto}`); 
            break;
        }
        
    }   
}