 import StatCard from "./StatCard"

function StatsSection({
  xp,
  totalLogs,
  habitsCount,
  consistencyRate,
}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">

      <StatCard
        title="XP"
        value={xp}
      />

      <StatCard
        title="Completed"
        value={totalLogs}
      />

      <StatCard
        title="Total Habits"
        value={habitsCount}
      />

      <StatCard
        title="Consistency"
        value={`${consistencyRate}%`}
      />

    </div>
  )

}

export default StatsSection