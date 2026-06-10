import {  XP_PER_LOG,} from "../constants/gameConfig"

function calculateXP(totalLogs) {

  return totalLogs * XP_PER_LOG

}

export default calculateXP