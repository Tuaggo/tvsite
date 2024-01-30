document.addEventListener("DOMContentLoaded", function() {
    const channelList = document.getElementById("channelList");
    const playerContainer = document.getElementById("playerContainer");
    const categories = document.querySelectorAll(".category");

    // Adiciona um listener para cada botão de categoria
    categories.forEach(category => {
        category.addEventListener("click", function() {
            const categoryFilter = this.getAttribute("data-category");
            filterChannelsByCategory(categoryFilter);
        });
    });

    channelList.addEventListener("click", function(event) {
        const channel = event.target;
        if (channel.classList.contains("channel")) {
            const playerSrc = channel.getAttribute("data-src");
            activatePlayer(playerSrc);
        }
    });

    function activatePlayer(src) {
        playerContainer.innerHTML = `<iframe name="Player" src="${src}" frameborder="0" height="400" scrolling="no" width="640" allow="encrypted-media" allowFullScreen></iframe>`;
        playerContainer.style.display = "block"; // Torna o player visível
    }

    function filterChannelsByCategory(category) {
        // Esconde todos os canais
        const allChannels = document.querySelectorAll(".channel");
        allChannels.forEach(channel => {
            channel.style.display = "none";
        });

        // Mostra apenas os canais da categoria selecionada
        const filteredChannels = document.querySelectorAll(`.channel[data-category="${category}"]`);
        filteredChannels.forEach(channel => {
            channel.style.display = "block";
        });

        // Limpa o player quando uma nova categoria é selecionada
        playerContainer.innerHTML = "";
        playerContainer.style.display = "none";
    }
});
