function calculateProgressPercentage(
  currentLevelXP,
  nextLevelXP
) {

  return (
    (currentLevelXP / nextLevelXP) *
    100
  )

}

export default calculateProgressPercentage