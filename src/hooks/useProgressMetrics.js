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

import calculateConsistency
from "../utils/calculateConsistency"

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

  const consistencyRate =
    calculateConsistency(habits)

  return {
    totalLogs,
    xp,
    level,
    currentLevelXP,
    nextLevelXP,
    progressPercentage,
    consistencyRate,
  }

}

export default useProgressMetrics