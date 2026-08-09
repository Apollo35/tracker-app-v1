import { useMemo } from "react";

import getUnlockedAchievements from "../utils/getUnlockedAchievements";

function useAchievements(habits, totalLogs) {
  const achievements = useMemo(
    () => getUnlockedAchievements(habits, totalLogs),
    [habits, totalLogs],
  );

  return {
    achievements,
  };
}

export default useAchievements;