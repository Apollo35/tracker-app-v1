import HabitCard from "./HabitCard"

function HabitList({
  habits,
  challengeFailed,
  toggleHabit,
  deleteHabit,
}) {

  return (
    <div className="mt-10 space-y-3">

      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          title={habit.title}
          completed={habit.completed}
          streak={habit.streak}
          history={habit.history}
          disabled={challengeFailed}
          onToggle={() =>
            toggleHabit(habit.id)
          }
          onDelete={() =>
            deleteHabit(habit.id)
          }
        />
      ))}

    </div>
  )

}

export default HabitList