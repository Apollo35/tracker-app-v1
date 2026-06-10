function calculateAchievements(
  habits,
  totalLogs
) {

  const unlocked = []

  if (totalLogs >= 1) {
    unlocked.push("FIRST STEP")
  }

  if (
    habits.some(
      (habit) => habit.streak >= 7
    )
  ) {
    unlocked.push("DISCIPLINED")
  }

  if (
    habits.some(
      (habit) => habit.streak >= 30
    )
  ) {
    unlocked.push("MACHINE")
  }

  return unlocked

}

export default calculateAchievements