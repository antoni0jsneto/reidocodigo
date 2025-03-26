window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");

  if (window.scrollY > window.innerHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const phoneInput = document.getElementById("phone");

  // Aplicando máscara no telefone
  phoneInput.addEventListener("input", function (event) {
    let value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número

    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    event.target.value = value;
  });

  // Submeter o formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio tradicional

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Dados enviados:", data);

    alert("Formulário enviado com sucesso!");
    form.reset(); // Limpa os campos após o envio
  });
});
