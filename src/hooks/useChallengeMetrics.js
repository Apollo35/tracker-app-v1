import calculateChallengeProgress
from "../utils/calculateChallengeProgress"

import calculateChallengeLogs
from "../utils/calculateChallengeLogs"

function useChallengeMetrics(
  habits,
  challengeStartDate
) {

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