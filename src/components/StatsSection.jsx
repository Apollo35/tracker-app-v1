import StatCard from "./StatCard";

function StatsSection({ xp, totalLogs, habitsCount }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
      <StatCard title="XP" value={xp} />

      <StatCard title="Completed" value={totalLogs} />

      <StatCard title="Total Habits" value={habitsCount} />
    </div>
  );
}

export default StatsSection;
