import calculateXP
from "../utils/calculateXP"

import calculateLevel
from "../utils/calculateLevel"

import calculateLevelProgress
from "../utils/calculateLevelProgress"

import calculateProgressPercentage
from "../utils/calculateProgressPercentage"

import calculateTotalLogs
from "../utils/calculateTotalLogs"



function useProgressMetrics(
  habits
) {

  const totalLogs =
    calculateTotalLogs(habits)

  const xp =
    calculateXP(totalLogs)

  const level =
    calculateLevel(xp)

  const {
    currentLevelXP,
    nextLevelXP,
  } = calculateLevelProgress(
    xp,
    level
  )

  const progressPercentage =
    calculateProgressPercentage(
      currentLevelXP,
      nextLevelXP
    )

  

  return {
    totalLogs,
    xp,
    level,
    currentLevelXP,
    nextLevelXP,
    progressPercentage,
    
  }

}

export default useProgressMetrics