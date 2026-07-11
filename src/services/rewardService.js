import { getStreakReward } from "./economyService";

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

export function rewardAchievement(reward) {
  return reward;
}

export function rewardChallenge(reward) {
  return reward;
}