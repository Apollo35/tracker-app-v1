export function resetChallengeHabits(
  habits
) {

  return habits.map((habit) => {

    return {
      ...habit,
      completed: false,
      streak: 0,
      lastCompleted: null,
    }

  })

}
export function checkChallengeFailure(
  habits,
  challengeDay
) {

  const yesterday = new Date()

  yesterday.setDate(
    yesterday.getDate() - 1
  )

  const yesterdayString =
    yesterday.toDateString()

  const completedYesterday =
    habits.some((habit) =>
      habit.history?.includes(
        yesterdayString
      )
    )

  return (
    !completedYesterday &&
    challengeDay > 1
  )

}