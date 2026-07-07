import {
  DIAMONDS_PER_HABIT,
} from "../constants/gameConfig";

export function earnHabitReward(
  currentDiamonds
) {
  return (
    currentDiamonds +
    DIAMONDS_PER_HABIT
  );
}

export function removeHabitReward(
  currentDiamonds
) {
  return (
    currentDiamonds -
    DIAMONDS_PER_HABIT
  );
}