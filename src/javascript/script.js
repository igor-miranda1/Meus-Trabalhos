$(document).ready(function() {
    // Menu mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');  // Seções da página
    const navItems = $('.nav-item');  // Itens de navegação

    // Marca o primeiro item inicialmente
    navItems.first().addClass('nav-item-active');

    // Função que será executada sempre que o usuário rolar a página
    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();  // A posição do scroll

        let activeSectionIndex = -1;  // Inicializa com -1 para garantir que nada fique marcado inicialmente

        // Adiciona ou remove a sombra no cabeçalho
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        // Verifica qual seção está visível
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;  // Ajusta para o topo da seção considerando a altura do cabeçalho
            const sectionBottom = sectionTop + section.outerHeight();

            // A seção que o usuário está visualizando
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;  // Para a iteração assim que a seção ativa for encontrada
            }
        });

        // Remove a classe 'nav-item-active' de todos os itens de navegação
        navItems.removeClass('nav-item-active');
        
        // Se uma seção ativa for encontrada, aplica a classe 'nav-item-active' no item correspondente
        if (activeSectionIndex !== -1) {
            $(navItems[activeSectionIndex]).addClass('nav-item-active');
        }
    });
});