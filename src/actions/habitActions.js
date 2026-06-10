import toggleHabitCompletion
from "../utils/toggleHabitCompletion"

export function handleToggleHabit(
  habits,
  id
) {

  const today =
    new Date().toDateString()

  return habits.map((habit) => {

    if (habit.id === id) {

      return toggleHabitCompletion(
        habit,
        today
      )

    }

    return habit

  })

}

export function handleDeleteHabit(
  habits,
  id
) {

  return habits.filter((habit) => {
    return habit.id !== id
  })

}

export function handleAddHabit(
  habits,
  newHabit
) {

  return [
    ...habits,
    {
      id: Date.now(),
      title: newHabit,
      completed: false,
      streak: 0,
      lastCompleted: null,
      history: [],
    },
  ]

}