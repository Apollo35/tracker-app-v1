import {
  loadHabits,
  saveHabits,
} from "./storageService";

export function getHabits() {
  return loadHabits();
}

export function createHabit(habit) {
  const habits = loadHabits();

  const updatedHabits = [
    ...habits,
    habit,
  ];

  saveHabits(updatedHabits);

  return updatedHabits;
}

export function updateHabit(id, updates) {
  const habits = loadHabits();

  const updatedHabits = habits.map((habit) =>
    habit.id === id
      ? { ...habit, ...updates }
      : habit
  );

  saveHabits(updatedHabits);

  return updatedHabits;
}

export function deleteHabit(id) {
  const habits = loadHabits();

  const updatedHabits = habits.filter(
    (habit) => habit.id !== id
  );

  saveHabits(updatedHabits);

  return updatedHabits;
}

export function updateHabitCompletion(
  id,
  completed
) {
  return updateHabit(id, { completed });
}