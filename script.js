// ================= RODAPÉ =================
const footerElement = document.querySelector("#center");
if (footerElement) {
  const currentYear = new Date().getFullYear();
  footerElement.innerHTML = `&copy; ${currentYear} Anna Bella Oficial - Todos os direitos reservados`;
}

// ================= BOAS-VINDAS (SÓ NA PRIMEIRA VEZ NO INDEX) =================
const currentPath = window.location.pathname.split("/").pop() || "index.html";

if (currentPath === "index.html") {
  const jaVisitou = localStorage.getItem("visitouIndex");

  if (!jaVisitou) {
    const currentHour = new Date().getHours();
    let welcomeMessage = "";

    if (currentHour < 12) welcomeMessage = "Bom dia";
    else if (currentHour < 18) welcomeMessage = "Boa tarde";
    else welcomeMessage = "Boa noite";

    alert(`${welcomeMessage}! Seja bem-vindo ao site.`);

    // Marca que já visitou
    localStorage.setItem("visitouIndex", "true");
  }
}

// ================= FORMULÁRIO WHATSAPP =================
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const mensagem = document.querySelector("#mensagem").value;

    const telefoneWhatsApp = "5535992327486"; // SEM +

    const texto = `Olá, meu nome é ${nome}.
Mensagem: ${mensagem}`;

    const url = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
    contactForm.reset();
  });
}

// ================= MENU ATIVO =================
const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("ativo");
  }
});
