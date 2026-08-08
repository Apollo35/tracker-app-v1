function AchievementSection({ achievements }) {
  return (
    <div className="mt-10 border border-zinc-800 bg-zinc-950 p-5 md:p-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.25em]">
            ACHIEVEMENTS
          </p>

          <h2 className="iron-display mt-2 text-3xl leading-none md:text-4xl">
            Unlocked
          </h2>
        </div>

        <span className="iron-data text-[9px] uppercase tracking-widest text-zinc-600">
          {achievements.length} UNLOCKED
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="border border-green-900/70 bg-green-950/10 p-4 transition hover:border-green-500/70"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-green-500 text-[9px] font-bold uppercase tracking-[0.2em]"></p>

                <h3 className="iron-display mt-2 text-2xl leading-none">
                  {achievement.title}
                </h3>
              </div>

              <span className="iron-data whitespace-nowrap text-xs font-bold text-yellow-400">
                +{achievement.reward} 💎
              </span>
            </div>

            <div className="mt-5 border-t border-green-900/50 pt-3">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                Reward claimed
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementSection;
