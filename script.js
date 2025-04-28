

document.getElementById("boton-enviar").addEventListener('click', function(){
    const input = document.getElementById("ingreso-texto");
    const texto = input.value.trim();
    if (texto){
        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = texto;
        document.getElementById("saludo").appendChild(nuevoParrafo);
    }
})

// OPCIÓN COMPAÑERA:

// document.getElementById("boton-enviar").addEventListener("click", function() {
//     const input = document.getElementById("ingreso-texto");
//     const texto = input.value.trim();
//     if (texto) {
//         const saludo = `Hola: ${texto}`;
//         document.getElementById("saludo").innerHTML = saludo;
//         input.value = "";
//     } else {
//         document.getElementById(saludo).innerHTML = "Ingresa tu nombre";
//     }
// });