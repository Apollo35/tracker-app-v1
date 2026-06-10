function AddHabitForm({
  newHabit,
  setNewHabit,
  addHabit,
}) {

  return (
    <div className="mt-10 flex gap-4">

      <input
        type="text"
        placeholder="CREATE NEW HABIT"
        value={newHabit}
        onChange={(e) =>
          setNewHabit(e.target.value)
        }
        className="flex-1 bg-black border border-zinc-800 px-4 py-4 uppercase tracking-wide outline-none focus:border-green-500"
      />

      <button
        onClick={addHabit}
        className="border border-white px-8 py-4 uppercase font-bold hover:bg-white hover:text-black transition"
      >
        Add
      </button>

    </div>
  )

}

export default AddHabitForm