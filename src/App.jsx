import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { MAX_HABITS, DIAMONDS_PER_HABIT } from "./constants/gameConfig";
import {
  saveHabits,
  loadHabits,
  saveDiamonds,
  loadDiamonds,
} from "./services/storageService";
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
import CompanionPage from "./pages/CompanionPage";
import ShopPage from "./pages/ShopPage";
import SettingsPage from "./pages/SettingsPage";

import { rewardStreak } from "./services/rewardService";
import { rewardAchievement } from "./services/rewardService";

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
  const [diamonds, setDiamonds] = useState(() => {
    return loadDiamonds();
  });

  const [challengeStartDate, setChallengeStartDate] = useState(() => {
    const savedDate = localStorage.getItem("challengeStartDate");

    return savedDate ? new Date(savedDate) : new Date();
  });

  const [challengeFailed, setChallengeFailed] = useState(false);

  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [challengeEnabled, setChallengeEnabled] = useState(false);

  useEffect(() => {
    saveHabits(habits);
  }, [habits]);

  useEffect(() => {
    saveDiamonds(diamonds);
  }, [diamonds]);

  useEffect(() => {
    if (challengeEnabled) return;

    setChallengeCompleted(false);
    setChallengeFailed(false);
  }, [challengeEnabled]);

  useEffect(() => {
    localStorage.setItem(
      "challengeStartDate",
      challengeStartDate.toISOString(),
    );
  }, [challengeStartDate]);

  useDailyReset(habits, setHabits);

  const { challengeDay, remainingDays, challengeProgress } =
    useChallengeMetrics(habits, challengeStartDate, challengeEnabled);

  useChallengeCompletion(challengeDay, challengeFailed, setChallengeCompleted);

  useChallengeFailure(
    habits,
    challengeDay,
    setChallengeFailed,
    challengeEnabled,
  );

  const {
    totalLogs,
    xp,
    level,
    currentLevelXP,
    nextLevelXP,
    progressPercentage,
  } = useProgressMetrics(habits);

  const { achievements } = useAchievements(habits, totalLogs);
  useEffect(() => {
    let earnedDiamonds = 0;

    achievements.forEach((achievement) => {
      earnedDiamonds += rewardAchievement(achievement);
    });

    if (earnedDiamonds > 0) {
      setDiamonds((previous) => previous + earnedDiamonds);
    }
  }, [achievements]);

  const { showLevelUp } = useLevelSystem(level);

  function toggleHabit(id) {
    const previousHabit = habits.find((habit) => habit.id === id);

    const updatedHabits = handleToggleHabit(habits, id);

    const updatedHabit = updatedHabits.find((habit) => habit.id === id);

    const reward = rewardStreak(previousHabit, updatedHabit);

    if (reward > 0) {
      setDiamonds((previous) => previous + reward);
    }

    setHabits(updatedHabits);
  }

  function deleteHabit(id) {
    const confirmed = window.confirm("DELETE THIS HABIT?");

    if (!confirmed) return;

    const filteredHabits = handleDeleteHabit(habits, id);

    setHabits(filteredHabits);
  }

  function restartChallenge() {
    if (!challengeEnabled) return;

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
              diamonds={diamonds}
              challengeEnabled={challengeEnabled}
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
              newHabit={newHabit}
              setNewHabit={setNewHabit}
              addHabit={addHabit}
              toggleHabit={toggleHabit}
              deleteHabit={deleteHabit}
            />
          }
        />

        <Route
          path="/analytics"
          element={
            <AnalyticsPage
              xp={xp}
              level={level}
              totalLogs={totalLogs}
              habitsCount={habits.length}
            />
          }
        />

        <Route path="/companion" element={<CompanionPage />} />

        <Route
          path="/shop"
          element={<ShopPage diamonds={diamonds} setDiamonds={setDiamonds} />}
        />
        <Route
          path="/settings"
          element={
            <SettingsPage
              challengeEnabled={challengeEnabled}
              setChallengeEnabled={setChallengeEnabled}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
