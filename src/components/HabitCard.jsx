function HabitCard({
  title,
  completed,
  streak,
  history,
  disabled,
  onToggle,
  onDelete
}) {

  const last7Days = [...Array(7)].map((_, index) => {

    const date = new Date()

    date.setDate(date.getDate() - (6 - index))

    return date.toDateString()
  })

const jsDay = new Date().getDay()

const todayIndex =
  jsDay === 0 ? 6 : jsDay - 1
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-5 flex items-center justify-between hover:border-green-500 transition">

      <div>

        <h3 className="text-lg font-bold uppercase tracking-wide">
          {title}
        </h3>

        <p className="text-zinc-500 text-xs mt-2 uppercase tracking-widest">
          STREAK: {streak} DAYS • LOGS: {history?.length || 0}
        </p>
        <p className="text-[10px] text-zinc-600 mt-2">
  {JSON.stringify(history)}
</p>
<div className="flex gap-1 mt-3 mb-1">

  {last7Days.map((day, index) => (

    <div
      key={index}
      className={`w-5 text-[9px] text-center ${
        day === new Date().toDateString()          ? "text-green-500"
          : "text-zinc-600"
      }`}
    >
      {new Date(day)
        .toLocaleDateString("en-US", {
          weekday: "narrow"
        })}
    </div>

  ))}

</div>
<div className="flex gap-2 mt-3">
          {last7Days.map((day, index) => {

            const isCompleted =
              history?.includes(day)

            return (
             <div
  key={index}
  title={
    isCompleted
      ? `Completed on ${day}`
      : `Missed ${day}`
  }
  className={`w-4 h-4 border transition-all ${
  isCompleted
    ? "bg-green-500 border-green-400 shadow-[0_0_6px_#22c55e]"
    : "bg-zinc-900 border-zinc-800"
}`}
/>
            )
          })}

        </div>

      </div>

      <div className="flex items-center gap-3">

        <button
          onClick={onToggle}
          disabled={disabled}
          className={`w-12 h-12 border-2 transition font-bold disabled:opacity-30 ${
            completed
              ? "bg-green-500 border-green-500 text-black"
              : "border-green-500 text-green-500"
          }`}
        >
          {completed ? "✓" : ""}
        </button>

        <button
          onClick={onDelete}
          className="w-12 h-12 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition font-bold"
        >
          -
        </button>

      </div>

    </div>
  )
}

export default HabitCard