function calculateChallengeLogs(
  habits,
  challengeStartDate
) {

  return habits.reduce(
    (total, habit) => {

      const filteredLogs =
        habit.history || []

      return total + filteredLogs.length

    },
    0
  )

}

export default calculateChallengeLogs