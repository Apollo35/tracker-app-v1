export function saveHabits(habits) {

  localStorage.setItem(
    "habits",
    JSON.stringify(habits)
  )

}

export function loadHabits() {

  const savedHabits =
    localStorage.getItem("habits")

  try {

    return savedHabits
      ? JSON.parse(savedHabits)
      : []

  } catch (error) {

    console.error(
      "FAILED TO PARSE HABITS",
      error
    )

    localStorage.removeItem("habits")

    return []

  }

}