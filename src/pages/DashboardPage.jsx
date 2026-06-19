import HeaderSection from "../components/HeaderSection";
import ProgressSection from "../components/ProgressSection";
import ChallengeSection from "../components/ChallengeSection";
import AchievementSection from "../components/AchievementSection";
import StatsSection from "../components/StatsSection";
import AddHabitForm from "../components/AddHabitForm";
import HabitList from "../components/HabitList";

function DashboardPage({
  level,
  currentLevelXP,
  nextLevelXP,
  progressPercentage,
  challengeCompleted,
  challengeFailed,
  restartChallenge,
  challengeDay,
  remainingDays,
  challengeProgress,
  achievements,
  xp,
  totalLogs,
  habits,
  consistencyRate,
  newHabit,
  setNewHabit,
  addHabit,
  toggleHabit,
  deleteHabit,
}) {
  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <HeaderSection level={level} />

      <ProgressSection
        level={level}
        currentLevelXP={currentLevelXP}
        nextLevelXP={nextLevelXP}
        progressPercentage={progressPercentage}
      />

      <ChallengeSection
        challengeCompleted={challengeCompleted}
        challengeFailed={challengeFailed}
        restartChallenge={restartChallenge}
        challengeDay={challengeDay}
        remainingDays={remainingDays}
        challengeProgress={challengeProgress}
      />

      <AchievementSection achievements={achievements} />

      <StatsSection
        xp={xp}
        totalLogs={totalLogs}
        habitsCount={habits.length}
        consistencyRate={consistencyRate}
      />

      <AddHabitForm
        newHabit={newHabit}
        setNewHabit={setNewHabit}
        addHabit={addHabit}
      />

      <div className="mt-10 space-y-3">
        <HabitList
          habits={habits}
          challengeFailed={challengeFailed}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />
      </div>
    </div>
  );
}

export default DashboardPage;
