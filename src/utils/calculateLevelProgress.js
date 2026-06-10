function calculateLevelProgress(
  xp,
  level
) {

  const currentLevelXP =
    xp - ((level - 1) ** 2 * 100)

  const nextLevelXP =
    (level ** 2 * 100) -
    ((level - 1) ** 2 * 100)

  

  return {
  currentLevelXP,
  nextLevelXP,
}

}

export default calculateLevelProgress