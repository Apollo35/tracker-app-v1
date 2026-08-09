import { useEffect } from "react";

import isChallengeCompleted from "../utils/isChallengeCompleted";

function useChallengeCompletion(
  challengeDay,
  challengeFailed,
  setChallengeCompleted,
  challengeEnabled,
) {
  useEffect(() => {
    if (!challengeEnabled) {
      return;
    }

    const completed = isChallengeCompleted(
      challengeDay,
      challengeFailed,
    );

    if (completed) {
      setChallengeCompleted(true);
    }
  }, [
    challengeDay,
    challengeFailed,
    challengeEnabled,
    setChallengeCompleted,
  ]);
}

export default useChallengeCompletion;