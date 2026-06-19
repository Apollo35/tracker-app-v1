function AnalyticsPage({ xp, level, totalLogs, consistencyRate, habitsCount }) {
  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <h1 className="text-4xl font-black uppercase mb-8">Analytics</h1>

      <div className="space-y-4">
        <div className="border border-zinc-800 p-4">
          <p>Total XP</p>
          <p className="text-2xl font-bold">{xp}</p>
        </div>

        <div className="border border-zinc-800 p-4">
          <p>Current Level</p>
          <p className="text-2xl font-bold">{level}</p>
        </div>

        <div className="border border-zinc-800 p-4">
          <p>Total Logs</p>
          <p className="text-2xl font-bold">{totalLogs}</p>
        </div>

        <div className="border border-zinc-800 p-4">
          <p>Consistency Rate</p>
          <p className="text-2xl font-bold">{consistencyRate}%</p>
        </div>

        <div className="border border-zinc-800 p-4">
          <p>Total Habits</p>
          <p className="text-2xl font-bold">{habitsCount}</p>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;
