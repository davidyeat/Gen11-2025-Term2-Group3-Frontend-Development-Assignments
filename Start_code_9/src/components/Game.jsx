import React from "react";
import Entity from "./Entity";
import BattleLog from "./BattleLog";
import GamerOver from "./GameOver";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [playerHealth, setPlayerHealth] = React.useState(100);
  const [monsterHealth, setMonsterHealth] = React.useState(100);
  const [attackCount, setAttackCount] = React.useState(0);
  const [logs, setLogs] = React.useState([]);
  const isGameOver = playerHealth === 0 || monsterHealth === 0;

  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  // Attack Spell -----------------------------------
  const onAttack = () => {
    const playerDamage = getRandomValue(5, 12);
    const monsterDamage = getRandomValue(5, 12);

    setPlayerHealth((prev) => Math.max(prev - monsterDamage, 0));
    setMonsterHealth((prev) => Math.max(prev - playerDamage, 0));

    setLogs((prev) => [
      createLogAttack(true, playerDamage),
      createLogAttack(false, monsterDamage),
      ...prev,
    ]);

    setAttackCount((prev) => prev + 1);
  };

  // Heal Spell -------------------------------------
  const onHeal = () => {
    const playerHeal = getRandomValue(8, 15);
    const monsterDamage = getRandomValue(5, 12);

    setPlayerHealth((prev) => {
      const newHealth = Math.min(prev + playerHeal, 100);
      return Math.max(newHealth - monsterDamage, 0);
    });

    setLogs((prev) => [createLogHeal(playerHeal), ...prev]);
  };

  // Special Attack Spell -----------------------------
  const onSpecialAttack = () => {
    if (attackCount < 3) return;

    const playerDamage = getRandomValue(8, 15);
    const monsterDamage = getRandomValue(5, 12);

    setPlayerHealth((prev) => Math.max(prev - monsterDamage, 0));
    setMonsterHealth((prev) => Math.max(prev - playerDamage, 0));

    setLogs((prev) => [
      createLogAttack(true, playerDamage),
      createLogAttack(false, monsterDamage),
      ...prev,
    ]);

    setAttackCount(0);
  };

  // Suicide Spell ----------------------------------
  const onSuicide = () => {
    setPlayerHealth(0);
  };

  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function handleWinner() {
    const playerWon = monsterHealth === 0 && playerHealth > 0;
    const winner = playerWon ? "You Win!" : "You Lose!";
    return winner;
  }

  function newGame() {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setAttackCount(0);
    setLogs([]);
  }

  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <>
      {/* Monster health section */}
      <Entity health={monsterHealth} name="Monster Health" />

      {/* Player health section */}
      <Entity health={playerHealth} name="Player Health" />

      {/* Game status */}
      {/* Game spells and actions */}

      {!isGameOver && (
        <section id="controls">
          <button onClick={onAttack}>ATTACK</button>
          <button onClick={onSpecialAttack} disabled={attackCount < 3}>
            SPECIAL !
          </button>
          <button onClick={onHeal}>HEAL</button>
          <button onClick={onSuicide}>KILL YOURSELF</button>
        </section>
      )}

      {isGameOver && <GamerOver title={handleWinner()} restartGame={newGame} />}

      {/* Game recorded */}
      <BattleLog logMessages={logs} />
    </>
  );
}

export default Game;
