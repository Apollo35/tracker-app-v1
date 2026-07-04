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

export function saveDiamonds(diamonds) {

  localStorage.setItem(
    "diamonds",
    JSON.stringify(diamonds)
  )

}

export function loadDiamonds() {

  const savedDiamonds =
    localStorage.getItem("diamonds")

  try {

    return savedDiamonds
      ? JSON.parse(savedDiamonds)
      : 0

  } catch (error) {

    console.error(
      "FAILED TO PARSE DIAMONDS",
      error
    )

    localStorage.removeItem("diamonds")

    return 0

  }

}