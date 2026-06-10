import {
  checkChallengeFailure,
} from "../services/challengeService"

function shouldFailChallenge(
  habits,
  challengeDay
) {

  return checkChallengeFailure(
    habits,
    challengeDay
  )

}

export default shouldFailChallenge