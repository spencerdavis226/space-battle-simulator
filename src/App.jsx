import { useState } from 'react';
import Player from './Player';
import Enemy from './Enemy';
import Controls from './Controls';
import './App.css';

function App() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [gameStatus, setGameStatus] = useState('Ongoing'); // ongoing, won, lost, draw

  const handleAttack = () => {
    // Disable attack button when game ends
    if (gameStatus !== 'Ongoing') return;

    // Generate random damage values
    const playerDamageRecieved = Math.floor(Math.random() * 16) + 5; // 5 to 20
    const enemyDamageRecieved = Math.floor(Math.random() * 16) + 5;

    // Calculate new health values after damage
    const newPlayerHealth = Math.max(0, playerHealth - playerDamageRecieved); // Health shouldn't go below 0, so use Math.max()
    const newEnemyHealth = Math.max(0, enemyHealth - enemyDamageRecieved);

    // Update player/enemy state
    setPlayerHealth(newPlayerHealth);
    setEnemyHealth(newEnemyHealth);

    // Check for game-over conditions
    if (newPlayerHealth === 0 && newEnemyHealth === 0) {
      setGameStatus('Draw');
    } else if (newPlayerHealth === 0) {
      setGameStatus('Lost');
    } else if (newEnemyHealth === 0) {
      setGameStatus('Won');
    }

    console.log(
      `Player takes ${playerDamageRecieved} damage, Enemy takes ${enemyDamageRecieved} damage!`
    );
  };

  const handleRestart = () => {
    setPlayerHealth(100);
    setEnemyHealth(100);
    setGameStatus('Ongoing');
  };

  return (
    <div className="main-container">
      <div className="game-container">
        <Player health={playerHealth} />
        <Enemy health={enemyHealth} />
      </div>
      <h3>Game Status: {gameStatus}</h3>
      <Controls
        gameStatus={gameStatus}
        onAttack={handleAttack}
        onRestart={handleRestart}
      />
    </div>
  );
}

export default App;
