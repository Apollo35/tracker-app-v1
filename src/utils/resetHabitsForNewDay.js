function resetHabitsForNewDay(
  habits
) {

  return habits.map((habit) => {

    const lastCompletedDate =
      new Date(habit.lastCompleted)

    const yesterday =
      new Date()

    yesterday.setDate(
      yesterday.getDate() - 1
    )

    const streakBroken =
      habit.lastCompleted &&
      lastCompletedDate.toDateString() !==
        yesterday.toDateString()

    return {
      ...habit,
      completed: false,
      streak: streakBroken
        ? 0
        : habit.streak,
    }

  })

}

export default resetHabitsForNewDay