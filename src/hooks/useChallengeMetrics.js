import calculateChallengeProgress
from "../utils/calculateChallengeProgress"

import calculateChallengeLogs
from "../utils/calculateChallengeLogs"

function useChallengeMetrics(
  habits,
  challengeStartDate,
  challengeEnabled
){

  if (!challengeEnabled) {
  return {
    challengeDay: 0,
    remainingDays: 0,
    challengeProgress: 0,
    currentChallengeLogs: 0,
  };
}

  const {
    challengeDay,
    remainingDays,
    challengeProgress,
  } = calculateChallengeProgress(
    habits,
    challengeStartDate
  )

  const currentChallengeLogs =
    calculateChallengeLogs(
      habits,
      challengeStartDate
    )

  return {
    challengeDay,
    remainingDays,
    challengeProgress,
    currentChallengeLogs,
  }

}

export default useChallengeMetrics