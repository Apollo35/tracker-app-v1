function calculateStreak(history = []) {

  if (history.length === 0) return 0

  const sortedHistory =
    [...history].sort(
      (a, b) => new Date(b) - new Date(a)
    )

  let streak = 1

  for (let i = 0; i < sortedHistory.length - 1; i++) {

    const currentDate =
      new Date(sortedHistory[i])

    const previousDate =
      new Date(sortedHistory[i + 1])

    const difference =
      (currentDate - previousDate) /
      (1000 * 60 * 60 * 24)

    if (difference === 1) {
      streak++
    } else {
      break
    }
  }

  return streak
}

export default calculateStreak