// Função para verificar o tamanho da janela e aplicar o filtro
function applyResponsiveFilter() {
    const container = document.getElementById('imageContainer');
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
        container.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Altere a cor conforme necessário
    } else {
        container.style.backgroundColor = 'transparent'; // Reset para a cor original ou outro estado
    }
}

// Event listener para verificar quando a janela é redimensionada
window.addEventListener('resize', applyResponsiveFilter);

// Aplicar o filtro quando a página carregar inicialmente
applyResponsiveFilter();
