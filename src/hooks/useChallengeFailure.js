import { useEffect } from "react"

import shouldFailChallenge
from "../utils/shouldFailChallenge"

function useChallengeFailure(
  habits,
  challengeDay,
  setChallengeFailed
) {

  useEffect(() => {

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
  ])

}

export default useChallengeFailure