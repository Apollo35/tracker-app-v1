import calculateAchievements from "./calculateAchievements"

function getUnlockedAchievements(
  habits,
  totalLogs
) {

  return calculateAchievements(
    habits,
    totalLogs
  )

}

export default getUnlockedAchievements