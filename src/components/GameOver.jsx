const GameOver = ({ winner, onRestart }) => {
    return (
        <div>
            <div id="game-over">
                <h2>Game Over</h2>
                {winner && <p>{winner} Won!</p>}
                {!winner && <p>It&apos;s a draw</p>}
                {/* <p>{winner} won!</p> */}
                <p><button onClick={onRestart}>Rematch</button></p>
            </div>
        </div>
    )
}

export default GameOver