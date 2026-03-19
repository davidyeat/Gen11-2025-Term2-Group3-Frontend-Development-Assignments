function GamerOver({ title, restartGame }) {
    return (
        <section className="container" id="game-status">
            <h2>Game Over!</h2>
            <h3>{title}</h3>
            <button onClick={restartGame}>Start New Game</button>
        </section>
    );
}

export default GamerOver;