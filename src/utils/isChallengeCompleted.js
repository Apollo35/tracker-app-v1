function isChallengeCompleted(
  challengeDay,
  challengeFailed
) {

  return (
    challengeDay >= 30 &&
    !challengeFailed
  )

}

export default isChallengeCompleted