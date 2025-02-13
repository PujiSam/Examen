document.addEventListener('DOMContentLoaded', () => {
    console.log("Página cargada correctamente");

    // Agregar eventos de clic a los juegos destacados
    document.querySelectorAll('.game').forEach(game => {
        game.addEventListener('click', () => {
            const gameName = game.getAttribute('data-game');
            window.location.href = `/${gameName}`;
        });
    });
});
