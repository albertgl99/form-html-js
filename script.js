document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita el envío del formulario
      const isValid = validateForm(); // Valida el formulario
      if (isValid) {
        console.log("Form submitted successfully!");
      }
    });
  });
  
  function validateForm() {
    let isValid = true;
  
    // Validar el campo de nombre
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    if (nameInput.value.trim() === "") {
      nameError.classList.remove("hidden");
      isValid = false;
    } else {
      nameError.classList.add("hidden");
    }
  
    // Validar el campo de email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.classList.remove("hidden");
      isValid = false;
    } else {
      emailError.classList.add("hidden");
    }
  
    return isValid; // Devuelve si el formulario es válido o no
  }
  