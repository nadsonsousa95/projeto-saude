// Seleciona o botão e o menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Adiciona o evento de clique ao botão
menuToggle.addEventListener('click', () => {
    // Alterna entre abrir e fechar o menu
    menu.classList.toggle('open');
});

// Fecha o menu automaticamente ao clicar em qualquer link (em dispositivos móveis)
const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Fecha o menu ao clicar em um link, em dispositivos móveis
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
});
