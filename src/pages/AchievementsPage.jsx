function AchievementsPage({ achievements = [] }) {
  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <h1 className="text-4xl font-black uppercase mb-8">Achievements</h1>

      <div className="space-y-4">
        {achievements.length === 0 ? (
          <p className="text-zinc-500">No achievements unlocked yet.</p>
        ) : (
          achievements.map((achievement, index) => (
            <div key={index} className="border border-zinc-800 p-4">
              <p className="font-bold">{achievement.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AchievementsPage;
