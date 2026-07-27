import { ACHIEVEMENTS } from "../constants/achievementConfig";

function calculateAchievements(habits, totalLogs) {
  const unlocked = [];

  if (totalLogs >= 1) {
    unlocked.push(ACHIEVEMENTS.FIRST_STEP);
  }

  if (habits.some((habit) => habit.streak >= 7)) {
    unlocked.push(ACHIEVEMENTS.DISCIPLINED);
  }

  if (habits.some((habit) => habit.streak >= 30)) {
    unlocked.push(ACHIEVEMENTS.MACHINE);
  }

  return unlocked;
}

export default calculateAchievements;