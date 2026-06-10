import { useEffect } from "react"

import isChallengeCompleted
from "../utils/isChallengeCompleted"

function useChallengeCompletion(
  challengeDay,
  challengeFailed,
  setChallengeCompleted
) {

  useEffect(() => {

    const completed =
      isChallengeCompleted(
        challengeDay,
        challengeFailed
      )

    if (completed) {
      setChallengeCompleted(true)
    }

  }, [
    challengeDay,
    challengeFailed,
  ])

}

export default useChallengeCompletion
