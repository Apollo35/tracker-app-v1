function HabitCard({
  title,
  completed,
  streak,
  history,
  disabled,
  onToggle,
  onDelete,
}) {
  const weekDays = [...Array(7)].map((_, index) => {
    const date = new Date();
    const day = date.getDay();

    date.setDate(date.getDate() - day + index);

    return {
      date: date.toDateString(),
      label: date.toLocaleDateString("en-US", {
        weekday: "short",
      }),
    };
  });

  return (
    <div
      className={`border bg-zinc-950 p-5 transition ${
        completed
          ? "border-green-500/40"
          : "border-zinc-800 hover:border-zinc-600"
      }`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span
              className={`h-2 w-2 rounded-full ${
                completed ? "bg-green-500" : "bg-zinc-700"
              }`}
            />

            <h3 className="truncate text-lg font-bold uppercase tracking-wide">
              {title}
            </h3>
          </div>

          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-widest text-zinc-500">
            <span>STREAK: {streak} DAYS</span>
            <span>LOGS: {history?.length || 0}</span>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-2">
            {weekDays.map((day) => {
              const isCompleted = history?.includes(day.date);

              return (
                <div
                  key={day.date}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-[9px] font-bold uppercase text-zinc-500">
                    {day.label}
                  </span>

                  <div
                    title={
                      isCompleted
                        ? `Completed on ${day.date}`
                        : `Not completed on ${day.date}`
                    }
                    className={`h-4 w-4 border transition ${
                      isCompleted
                        ? "border-green-400 bg-green-500"
                        : "border-zinc-800 bg-zinc-900"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <p className="hidden text-[9px] font-bold uppercase tracking-widest text-zinc-500 sm:block">
            {completed ? "DONE" : "TODAY"}
          </p>
          <button
            onClick={onToggle}
            disabled={disabled}
            aria-label={
              completed ? `Mark ${title} incomplete` : `Complete ${title}`
            }
            className={`h-12 w-12 border-2 font-bold transition ${
              completed
                ? "border-green-500 bg-green-500 text-black"
                : "border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
            } disabled:cursor-not-allowed disabled:opacity-30`}
          >
            {completed ? "✓" : ""}
          </button>

          <button
            onClick={onDelete}
            aria-label={`Delete ${title}`}
            className="h-12 w-12 border-2 border-red-500 text-red-500 transition hover:bg-red-500 hover:text-black"
          >
            −
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitCard;
