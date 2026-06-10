function StatCard({ title, value }) {
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-5">

      <p className="text-zinc-500 text-xs uppercase tracking-widest">
        {title}
      </p>

      <h2 className="text-5xl font-black mt-4">
        {value}
      </h2>

    </div>
  )
}

export default StatCard