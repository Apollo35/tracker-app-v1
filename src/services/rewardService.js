import { getStreakReward } from "./economyService";
import {
  loadClaimedAchievements,
  saveClaimedAchievements,
} from "./achievementStorage";

export function rewardStreak(
  previousHabit,
  updatedHabit
) {
  if (!previousHabit || !updatedHabit) {
    return 0;
  }

  if (
    previousHabit.streak ===
    updatedHabit.streak
  ) {
    return 0;
  }

  return getStreakReward(
    updatedHabit.streak
  );
}

export function rewardAchievement(achievement) {
  const claimed = loadClaimedAchievements();

  if (claimed.includes(achievement.id)) {
    return 0;
  }

  saveClaimedAchievements([
    ...claimed,
    achievement.id,
  ]);

  return achievement.reward;
}

export function rewardChallenge(reward) {
  return reward;
}