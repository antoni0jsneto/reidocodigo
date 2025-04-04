window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Aplicando máscara no telefone
  document.getElementById("phone").addEventListener("input", function (event) {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
    event.target.value = value;
  });
});

async function getApiKey() {
  const response = await fetch(
    "https://secure-api-production.up.railway.app/get-key",
    {
      headers: {
        Authorization: "Bearer CGLsuriatIwpf3w",
      },
    }
  );

  if (!response.ok) {
    // console.error("Erro ao obter chave:", await response.json());
    return null;
  }

  const data = await response.json();
  return data.apiKey;
}

getApiKey().then((apiKey) => {
  //   if (apiKey) {
  //     // console.log("Chave recebida:", apiKey);
  //   }
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.init(apiKey);

      emailjs
        .send("service_i640gka", "template_puaoag7", {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          search: document.getElementById("search").value,
          confirm: document.getElementById("confirm").checked ? "Sim" : "Não",
        })
        .then(
          function (response) {
            document.getElementById("contactForm").reset();
            // console.log("Resposta da API:", response);
            alert("E-mail enviado com sucesso!");
          },
          function (error) {
            // console.error("Erro no envio:", error);
            alert("Erro ao enviar e-mail. Tente novamente mais tarde.");
          }
        );
    });
});

// adicionar rolagem suave sem mostrar o site rolando
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// carregando o botão do whatsapp apenas após o carregamento da página
window.addEventListener("load", function () {
  // Tooltip
  const tooltip = document.createElement("div");
  tooltip.id = "whatsapp-tooltip";
  tooltip.className = "whatsapp-tooltip";
  tooltip.innerText = "Fale conosco no WhatsApp!";
  tooltip.style.opacity = "0";
  document.body.appendChild(tooltip);

  // Botão
  const button = document.createElement("div");
  button.id = "whatsapp-button";
  button.className = "whatsapp-button";

  const link = document.createElement("a");
  link.href = "https://w.app/reidocodigo";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const img = document.createElement("img");
  img.src = "/assets/images/whatsapp.webp";
  img.alt = "Entre em contato conosco";
  img.style.width = "80px";
  img.style.height = "80px";

  link.appendChild(img);
  button.appendChild(link);
  document.body.appendChild(button);

  // Lógica do tooltip
  button.addEventListener("mouseenter", function () {
    tooltip.style.opacity = "1";
    tooltip.style.transform = "translateY(0)";
  });

  button.addEventListener("mouseleave", function () {
    tooltip.style.opacity = "0";
    tooltip.style.transform = "translateY(10px)";
  });

  // whatsapp button
  const whatsappButton = document.getElementById("whatsapp-button");
  let tooltipTimeout;

  function showTooltip() {
    tooltip.style.opacity = "1";
    tooltip.style.transform = "translateY(0)";
  }

  function hideTooltip() {
    tooltip.style.opacity = "0";
    tooltip.style.transform = "translateY(10px)";
  }

  setTimeout(showTooltip, 1000);

  tooltipTimeout = setTimeout(hideTooltip, 30000);

  whatsappButton.addEventListener("mouseover", () => {
    clearTimeout(tooltipTimeout);
    showTooltip();
  });

  whatsappButton.addEventListener("mouseleave", () => {
    tooltipTimeout = setTimeout(hideTooltip, 500);
  });

  whatsappButton.addEventListener("click", () => {
    hideTooltip();
  });

  const bgElement = document.querySelector(".background");

  if (bgElement && window.innerWidth > 1200) {
    const image = new Image();
    image.src = "/assets/images/programador.webp";

    image.onload = function () {
      bgElement.style.backgroundImage = `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
      url('${image.src}')
    `;
    };
  }
});
