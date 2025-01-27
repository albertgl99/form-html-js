// Escucha el evento DOMContentLoaded, que asegura que el código se ejecutará
// solo después de que el contenido del DOM se haya cargado por completo.
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene la referencia al formulario con el ID "signup-form".
    const form = document.getElementById("signup-form");
  
    // Agrega un listener para el evento "submit" del formulario.
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado de enviar el formulario.

        // Llama a la función validateForm para validar los campos del formulario.
        const isValid = validateForm();

        // Si el formulario es válido, muestra un mensaje en la consola.
        if (isValid) {
            console.log("Form submitted successfully!");
        }
    });
});

// Función para validar los campos del formulario.
function validateForm() {
    let isValid = true; // Variable que indica si el formulario es válido o no.
  
    // Validación del campo de nombre
    const nameInput = document.getElementById("name"); // Obtiene el input del nombre.
    const nameError = document.getElementById("name-error"); // Obtiene el mensaje de error asociado al nombre.
    if (nameInput.value.trim() === "") { // Verifica si el campo está vacío.
        nameError.classList.remove("hidden"); // Muestra el mensaje de error.
        isValid = false; // Marca el formulario como inválido.
    } else {
        nameError.classList.add("hidden"); // Oculta el mensaje de error.
    }
  
    // Validación del campo de email
    const emailInput = document.getElementById("email"); // Obtiene el input del email.
    const emailError = document.getElementById("email-error"); // Obtiene el mensaje de error asociado al email.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar un email.
    if (!emailPattern.test(emailInput.value.trim())) { // Verifica si el email no coincide con el patrón.
        emailError.classList.remove("hidden"); // Muestra el mensaje de error.
        isValid = false; // Marca el formulario como inválido.
    } else {
        emailError.classList.add("hidden"); // Oculta el mensaje de error.
    }
  
    return isValid; // Devuelve si el formulario es válido o no.
}
