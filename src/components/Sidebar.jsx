function Sidebar() {

  return (
    <div className="w-full md:w-64 border-r border-zinc-900 p-6">

      <h1 className="text-3xl font-black uppercase tracking-widest">
        TRACKER
      </h1>

      <div className="mt-12 space-y-4">

        <button className="w-full border border-green-500 text-green-500 px-4 py-3 text-left uppercase tracking-widest text-sm">
          Dashboard
        </button>

        <button className="w-full border border-zinc-800 text-zinc-500 px-4 py-3 text-left uppercase tracking-widest text-sm hover:border-zinc-600 hover:text-white transition">
          Habits
        </button>

        <button className="w-full border border-zinc-800 text-zinc-500 px-4 py-3 text-left uppercase tracking-widest text-sm hover:border-zinc-600 hover:text-white transition">
          Progress
        </button>

      </div>

    </div>
  )

}

export default Sidebar