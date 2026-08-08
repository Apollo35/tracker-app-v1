function ProgressSection({
  level,
  currentLevelXP,
  nextLevelXP,
  progressPercentage,
}) {
  return (
    <div className="mt-12 border border-zinc-900 bg-zinc-950 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
            CURRENT PROGRESS
          </p>

          <h3 className="mt-2 text-3xl font-black uppercase">LEVEL {level}</h3>

          <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
            {nextLevelXP - currentLevelXP} XP TO NEXT LEVEL
          </p>
        </div>

        <div className="text-left sm:text-right">
          <p className="text-green-500 text-2xl font-black">
            {currentLevelXP} / {nextLevelXP} XP
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            {Math.round(progressPercentage)}% COMPLETE
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="h-4 w-full overflow-hidden bg-zinc-900">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{
              width: `${progressPercentage}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressSection;
