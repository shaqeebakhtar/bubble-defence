addEventListener('click', (event) => {
  const angle = Math.atan2(
    event.clientY - canvas.height / 2,
    event.clientX - canvas.width / 2
  );

  const velocity = {
    x: Math.cos(angle) * PROJECTILE_SPEED,
    y: Math.sin(angle) * PROJECTILE_SPEED,
  };

  projectiles.push(
    new Projectile(canvas.width / 2, canvas.height / 2, 5, 'white', velocity)
  );
});

startBtn.addEventListener('click', () => {
  difficulty = document.querySelector('input[name="difficulty"]:checked').value;

  ENEMY_SPEED =
    difficulty === 'easy' ? 1 : difficulty === 'medium' ? 1.25 : 1.5;
  ENEMY_MAX_RADIUS =
    difficulty === 'easy' ? 30 : difficulty === 'medium' ? 25 : 20;
  ENEMY_SPAWN_TIME =
    difficulty === 'easy' ? 1250 : difficulty === 'medium' ? 1000 : 750;
  PROJECTILE_SPEED =
    difficulty === 'easy' ? 8 : difficulty === 'medium' ? 6.5 : 5;

  init();
  animate();
  spawnEnemies();
  modal.classList.add('hidden');
});
