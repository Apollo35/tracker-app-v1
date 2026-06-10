import { useEffect, useState }
from "react"

import didLevelUp
from "../utils/didLevelUp"

function useLevelSystem(
  level
) {

  const [
    previousLevel,
    setPreviousLevel,
  ] = useState(level)

  const [
    showLevelUp,
    setShowLevelUp,
  ] = useState(false)

  useEffect(() => {

    const leveledUp =
      didLevelUp(
        level,
        previousLevel
      )

    if (leveledUp) {

      setShowLevelUp(true)

      setTimeout(() => {
        setShowLevelUp(false)
      }, 2500)

    }

    setPreviousLevel(level)

  }, [level])

  return {
    showLevelUp,
  }

}

export default useLevelSystem