import { useState, useEffect } from "react";
import { MAX_HABITS } from "./constants/gameConfig";
import { saveHabits, loadHabits } from "./services/storageService";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import ChallengeSection from "./components/ChallengeSection";
import AchievementSection from "./components/AchievementSection";
import StatsSection from "./components/StatsSection";
import ProgressSection from "./components/ProgressSection";
import Sidebar from "./components/Sidebar";
import HeaderSection from "./components/HeaderSection";
import LevelUpModal from "./components/LevelUpModal";
import useDailyReset from "./hooks/useDailyReset";
import useChallengeCompletion from "./hooks/useChallengeCompletion";
import { resetChallengeHabits } from "./services/challengeService";
import useChallengeFailure from "./hooks/useChallengeFailure";
import useLevelSystem from "./hooks/useLevelSystem";
import useAchievements from "./hooks/useAchievements";
import {
  handleToggleHabit,
  handleDeleteHabit,
  handleAddHabit,
} from "./actions/habitActions";
import useProgressMetrics from "./hooks/useProgressMetrics";
import useChallengeMetrics from "./hooks/useChallengeMetrics";

function App() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = loadHabits();
    return savedHabits.length > 0
      ? savedHabits
      : [
          {
            id: 1,
            title: "Drink 3L Water",
            completed: false,
            streak: 0,
            lastCompleted: null,
            history: [],
          },
          {
            id: 2,
            title: "No Fast Food",
            completed: false,
            streak: 0,
            lastCompleted: null,
            history: [],
          },
          {
            id: 3,
            title: "Workout Session",
            completed: false,
            streak: 0,
            lastCompleted: null,
            history: [],
          },
        ];
  });

  const [newHabit, setNewHabit] = useState("");

  const [challengeStartDate, setChallengeStartDate] = useState(() => {
    const savedDate = localStorage.getItem("challengeStartDate");

    return savedDate ? new Date(savedDate) : new Date();
  });
  const [challengeFailed, setChallengeFailed] = useState(false);

  const [challengeCompleted, setChallengeCompleted] = useState(false);

  useEffect(() => {
    saveHabits(habits);
  }, [habits]);

  useEffect(() => {
    localStorage.setItem(
      "challengeStartDate",
      challengeStartDate.toISOString(),
    );
  }, [challengeStartDate]);

  useDailyReset(habits, setHabits);

  const { challengeDay, remainingDays, challengeProgress } =
    useChallengeMetrics(habits, challengeStartDate);

  useChallengeCompletion(challengeDay, challengeFailed, setChallengeCompleted);

  useChallengeFailure(habits, challengeDay, setChallengeFailed);

  const {
    totalLogs,
    xp,
    level,
    currentLevelXP,
    nextLevelXP,
    progressPercentage,
    consistencyRate,
  } = useProgressMetrics(habits);

  const { achievements } = useAchievements(habits, totalLogs);

  const { showLevelUp } = useLevelSystem(level);

  function toggleHabit(id) {
    const updatedHabits = handleToggleHabit(habits, id);

    setHabits(updatedHabits);
  }

  function deleteHabit(id) {
    const confirmed = window.confirm("DELETE THIS HABIT?");
    if (!confirmed) return;

    const filteredHabits = handleDeleteHabit(habits, id);

    setHabits(filteredHabits);
  }

  function restartChallenge() {
    const resetHabits = resetChallengeHabits(habits);

    setHabits(resetHabits);

    setChallengeFailed(false);
    setChallengeStartDate(new Date());

    localStorage.removeItem("lastResetDate");
  }

  function addHabit() {
    if (habits.length >= MAX_HABITS) {
      alert("MAXIMUM HABIT LIMIT REACHED");

      return;
    }

    if (newHabit.trim() === "") return;

    const updatedHabits = handleAddHabit(habits, newHabit);

    setHabits(updatedHabits);

    setNewHabit("");
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <LevelUpModal level={level} showLevelUp={showLevelUp} />

      <div className="flex-1 w-full p-4 md:p-8">
        {/* HEADER */}

        <HeaderSection level={level} />

        {/* PROGRESS SECTION */}

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

        {/* HABITS */}

        <div className="mt-10 space-y-3">
          <HabitList
            habits={habits}
            challengeFailed={challengeFailed}
            toggleHabit={toggleHabit}
            deleteHabit={deleteHabit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
