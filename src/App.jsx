import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { MAX_HABITS } from "./constants/gameConfig";

import { saveHabits, loadHabits } from "./services/storageService";
import { resetChallengeHabits } from "./services/challengeService";

import Sidebar from "./components/Sidebar";
import LevelUpModal from "./components/LevelUpModal";

import useDailyReset from "./hooks/useDailyReset";
import useChallengeCompletion from "./hooks/useChallengeCompletion";
import useChallengeFailure from "./hooks/useChallengeFailure";
import useLevelSystem from "./hooks/useLevelSystem";
import useAchievements from "./hooks/useAchievements";
import useProgressMetrics from "./hooks/useProgressMetrics";
import useChallengeMetrics from "./hooks/useChallengeMetrics";

import {
  handleToggleHabit,
  handleDeleteHabit,
  handleAddHabit,
} from "./actions/habitActions";

import DashboardPage from "./pages/DashboardPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AchievementsPage from "./pages/AchievementsPage";
import SettingsPage from "./pages/SettingsPage";

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
      <Sidebar />

      <LevelUpModal level={level} showLevelUp={showLevelUp} />

      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage
              level={level}
              currentLevelXP={currentLevelXP}
              nextLevelXP={nextLevelXP}
              progressPercentage={progressPercentage}
              challengeCompleted={challengeCompleted}
              challengeFailed={challengeFailed}
              restartChallenge={restartChallenge}
              challengeDay={challengeDay}
              remainingDays={remainingDays}
              challengeProgress={challengeProgress}
              achievements={achievements}
              xp={xp}
              totalLogs={totalLogs}
              habits={habits}
              consistencyRate={consistencyRate}
              newHabit={newHabit}
              setNewHabit={setNewHabit}
              addHabit={addHabit}
              toggleHabit={toggleHabit}
              deleteHabit={deleteHabit}
            />
          }
        />

        <Route path="/analytics" element={<AnalyticsPage />} />

        <Route path="/achievements" element={<AchievementsPage />} />

        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
