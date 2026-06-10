import {
  CHALLENGE_DAYS,
} from "../constants/gameConfig"

function calculateChallengeProgress(
  habits,
  challengeStartDate
) {

  const today = new Date()

  const timeDifference =
    today - challengeStartDate

  const challengeDay =
    Math.floor(
      timeDifference /
        (1000 * 60 * 60 * 24)
    ) + 1

  const remainingDays =
    CHALLENGE_DAYS - challengeDay

  const challengeProgress =
    (challengeDay /
      CHALLENGE_DAYS) *
    100

  return {
    challengeDay,
    remainingDays,
    challengeProgress,
  }

}

export default calculateChallengeProgress