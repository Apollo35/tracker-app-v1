import { useEffect, useRef, useState } from "react";

import didLevelUp from "../utils/didLevelUp";

function useLevelSystem(level) {
  const previousLevel = useRef(level);

  const [showLevelUp, setShowLevelUp] = useState(false);

  useEffect(() => {
    const leveledUp = didLevelUp(
      level,
      previousLevel.current,
    );

    if (leveledUp) {
      const showTimer = setTimeout(() => {
        setShowLevelUp(true);
      }, 0);

      const hideTimer = setTimeout(() => {
        setShowLevelUp(false);
      }, 2500);

      previousLevel.current = level;

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }

    previousLevel.current = level;
  }, [level]);

  return {
    showLevelUp,
  };
}

export default useLevelSystem;