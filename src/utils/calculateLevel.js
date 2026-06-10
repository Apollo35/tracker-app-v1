function calculateLevel(xp) {

  return Math.floor(
    Math.sqrt(xp / 100)
  ) + 1

}

export default calculateLevel