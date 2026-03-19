function BattleLog({logMessages}) {
  return (
    <section id="log" className="container">
      <h2>Battle Log</h2>
      <ul>
        {logMessages.map((log, index) => (
          <li key={index}>
            <span>{log.isPlayer ? "Player" : "Monster"}</span>
            <span>{log.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BattleLog;