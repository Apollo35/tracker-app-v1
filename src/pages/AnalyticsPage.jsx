function AnalyticsPage({ xp, level, totalLogs, habitsCount }) {
  const metrics = [
    {
      label: "TOTAL XP",
      value: xp,
      suffix: "XP",
      accent: "text-green-500",
    },
    {
      label: "CURRENT LEVEL",
      value: level,
      suffix: "",
      accent: "text-green-500",
    },
    {
      label: "TOTAL LOGS",
      value: totalLogs,
      suffix: "LOGS",
      accent: "text-white",
    },

    {
      label: "TOTAL HABITS",
      value: habitsCount,
      suffix: "",
      accent: "text-white",
    },
  ];

  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <div className="mb-10">
        <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
          PERFORMANCE DATA
        </p>

        <h1 className="text-4xl font-black uppercase mt-3">Analytics</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-600"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {metric.label}
            </p>

            <div className="mt-4 flex items-end gap-2">
              <p className={`text-3xl font-black ${metric.accent}`}>
                {metric.value}
              </p>

              {metric.suffix && (
                <span className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-600">
                  {metric.suffix}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalyticsPage;
