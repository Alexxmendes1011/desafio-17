// Navegação suave ao clicar nos links do menu
document.querySelectorAll("header nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Compensa a altura do cabeçalho
                behavior: "smooth"
            });
        }
    });
});

// Exibir mensagem ao clicar no botão "Enviar Mensagem"
const contactButton = document.querySelector("button");
contactButton.addEventListener("click", () => {
    alert("Obrigado por entrar em contato! Em breve retornarei sua mensagem.");
});

// Interação com os cards de projeto
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        alert(`Você clicou no ${card.querySelector("h3").textContent}!`);
    });
});

// Atualizar cores dos links das redes sociais dinamicamente ao passar o mouse
document.querySelectorAll(".social-links li a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#e14a27"; // Nova cor ao passar o mouse
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "#fff"; // Cor original
    });
});
