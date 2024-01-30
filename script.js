document.addEventListener("DOMContentLoaded", function() {
    const channelList = document.getElementById("channelList");
    const playerContainer = document.getElementById("playerContainer");

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
});
