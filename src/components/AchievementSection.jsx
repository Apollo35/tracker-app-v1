function AchievementSection({ achievements }) {
  return (
    <div className="mt-10 border border-zinc-900 bg-zinc-950 p-6">
      <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
        ACHIEVEMENTS
      </p>

      <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="border border-green-500/50 bg-green-500/5 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-green-400 text-xs uppercase tracking-[0.2em]">
                  ACHIEVEMENT UNLOCKED
                </p>

                <h3 className="mt-2 text-lg font-black uppercase text-white">
                  {achievement.title}
                </h3>
              </div>

              <span className="text-yellow-400 text-sm font-bold whitespace-nowrap">
                +{achievement.reward} 💎
              </span>
            </div>

            <p className="mt-3 text-xs text-zinc-500 uppercase tracking-wider">
              Reward claimed
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementSection;
