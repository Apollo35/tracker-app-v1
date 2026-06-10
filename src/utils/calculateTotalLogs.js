function calculateTotalLogs(habits) {

  return habits.reduce(
    (total, habit) => {

      return (
        total +
        (habit.history?.length || 0)
      )

    },
    0
  )

}

export default calculateTotalLogs