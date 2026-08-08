function ProgressSection({
  level,
  currentLevelXP,
  nextLevelXP,
  progressPercentage,
}) {
  return (
    <section className="mt-8 border border-zinc-800 bg-zinc-950 p-5 md:p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            LEVEL PROGRESSION
          </p>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="iron-display text-4xl leading-none md:text-5xl">
              Level {level}
            </span>
          </div>
        </div>

        <div className="text-right">
          <p className="iron-data text-sm font-bold text-zinc-300">
            {currentLevelXP} / {nextLevelXP}
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-600">
            XP
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="h-3 w-full border border-zinc-800 bg-zinc-900 p-[2px]">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="mt-2 flex justify-between">
          <span className="iron-data text-[10px] text-zinc-600">0 XP</span>

          <span className="iron-data text-[10px] text-green-500">
            {Math.round(progressPercentage)}%
          </span>

          <span className="iron-data text-[10px] text-zinc-600">
            {nextLevelXP} XP
          </span>
        </div>
      </div>
    </section>
  );
}

export default ProgressSection;
