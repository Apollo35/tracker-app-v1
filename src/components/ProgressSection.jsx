function ProgressSection({
  level,
  currentLevelXP,
  nextLevelXP,
  progressPercentage,
}) {

  return (
    <div className="mt-12 border border-zinc-900 bg-zinc-950 p-6">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
            CURRENT PROGRESS
          </p>

          <h3 className="text-3xl font-black uppercase mt-3">
            LEVEL {level}
          </h3>
        </div>

        <div className="text-right">
          <p className="text-green-500 text-2xl font-black">
            {currentLevelXP} / {nextLevelXP} XP
          </p>
        </div>

      </div>

      <div className="w-full h-4 bg-zinc-900 mt-6 overflow-hidden">

        <div
          className="h-full bg-green-500 transition-all duration-500"
          style={{
            width: `${progressPercentage}%`,
          }}
        />

      </div>

    </div>
  )

}

export default ProgressSection