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
    <div className="w-full p-4 md:p-8">
      <div className="mb-8">
        <p className="text-green-500 text-xs uppercase tracking-[0.3em]">
          PERFORMANCE DATA
        </p>

        <h1 className="iron-display mt-2 text-5xl leading-none md:text-7xl">
          Analytics
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Track your progression and habit performance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-900"
          >
            <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              {metric.label}
            </p>

            <div className="mt-4 flex items-end gap-2">
              <p
                className={`iron-display text-5xl leading-none md:text-6xl ${metric.accent}`}
              >
                {metric.value}
              </p>

              {metric.suffix && (
                <span className="iron-data mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
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
