import { useEffect } from "react"

import resetHabitsForNewDay
from "../utils/resetHabitsForNewDay"

function useDailyReset(
  habits,
  setHabits
) {

  useEffect(() => {

    const today =
      new Date().toDateString()

    const lastResetDate =
      localStorage.getItem(
        "lastResetDate"
      )

    if (lastResetDate !== today) {

      const resetHabits =
        resetHabitsForNewDay(
          habits
        )

      setHabits(resetHabits)

      localStorage.setItem(
        "lastResetDate",
        today
      )

    }

  }, [])

}

export default useDailyReset