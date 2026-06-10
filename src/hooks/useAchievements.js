import { useEffect, useState }
from "react"

import getUnlockedAchievements
from "../utils/getUnlockedAchievements"

function useAchievements(
  habits,
  totalLogs
) {

  const [
    achievements,
    setAchievements,
  ] = useState([])

  useEffect(() => {

    const unlocked =
      getUnlockedAchievements(
        habits,
        totalLogs
      )

    setAchievements(unlocked)

  }, [
    habits,
    totalLogs,
  ])

  return {
    achievements,
  }

}

export default useAchievements