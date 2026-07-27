import { useEffect } from "react"

import shouldFailChallenge
from "../utils/shouldFailChallenge"

function useChallengeFailure(
  habits,
  challengeDay,
  setChallengeFailed,
  challengeEnabled
) {

  useEffect(() => {

     if (!challengeEnabled) {
    return;
  }

    const failed =
      shouldFailChallenge(
        habits,
        challengeDay
      )

    if (failed) {
      setChallengeFailed(true)
    }

  }, [
    habits,
    challengeDay,
    challengeEnabled
  ])

}

export default useChallengeFailure