function calculateConsistency(
  habits
) {

  if (habits.length === 0) {
    return 0
  }

  const completedToday =
    habits.filter(
      (habit) => habit.completed
    ).length

  return Math.floor(
    (completedToday / habits.length) *
    100
  )

}

export default calculateConsistency