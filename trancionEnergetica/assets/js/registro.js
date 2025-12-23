document.getElementById("formularioRegistro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("input_nombre").value;
    const contrasena = document.getElementById("input_contrasena").value;
    const correo = document.getElementById("input_correo").value;
    const respuesta = document.querySelector(".respuesta");

    respuesta.textContent = `¡Registro exitoso! Nombre: ${nombre}, Correo: ${correo}`;
});