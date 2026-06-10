function AchievementSection({
  achievements,
}) {

  return (
    <div className="mt-10 border border-zinc-900 bg-zinc-950 p-6">

      <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
        ACHIEVEMENTS
      </p>

      <div className="flex gap-3 mt-4 flex-wrap">

        {achievements.map((achievement) => (

          <div
            key={achievement}
            className="border border-green-500 text-green-500 px-4 py-2 text-xs uppercase tracking-widest"
          >
            {achievement}
          </div>

        ))}

      </div>

    </div>
  )

}

export default AchievementSection