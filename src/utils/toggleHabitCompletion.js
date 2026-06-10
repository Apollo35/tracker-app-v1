import calculateStreak from "./calculateStreak"

function toggleHabitCompletion(
  habit,
  today
) {

  if (habit.lastCompleted === today) {

    if (habit.completed) {

      const updatedHistory =
        habit.history?.filter(
          (day) => day !== today
        )

      return {
        ...habit,
        completed: false,
        streak: Math.max(
          habit.streak - 1,
          0
        ),
        lastCompleted: null,
        history: updatedHistory,
      }

    }

    return {
      ...habit,
      completed: true,
      streak: calculateStreak([
        ...(habit.history || []),
        today,
      ]),
      lastCompleted: today,
      history:
        habit.history?.includes(today)
          ? habit.history
          : [
              ...(habit.history || []),
              today,
            ],
    }

  }

  if (!habit.completed) {

    return {
      ...habit,
      completed: true,
      streak: calculateStreak([
        ...(habit.history || []),
        today,
      ]),
      lastCompleted: today,
      history:
        habit.history?.includes(today)
          ? habit.history
          : [
              ...(habit.history || []),
              today,
            ],
    }

  }

  return {
    ...habit,
    completed: false,
  }

}

export default toggleHabitCompletion