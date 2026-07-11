import {
  STREAK_REWARDS,
} from "../constants/gameConfig";

export function getStreakReward(
  streak
) {
  return (
    STREAK_REWARDS[streak] ??
    0
  );
}

export function getAchievementReward(
  reward
) {
  return reward;
}

export function getChallengeReward(
  reward
) {
  return reward;
}

export function canAfford(
  currentDiamonds,
  price
) {
  return currentDiamonds >= price;
}

export function spendDiamonds(
  currentDiamonds,
  price
) {
  return (
    currentDiamonds - price
  );
}