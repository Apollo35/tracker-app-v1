function HeaderSection({
  level,
}) {

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

      <div>
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">
          PERFORMANCE SYSTEM
        </p>

        <h2 className="text-3xl md:text-5xl font-black uppercase mt-3">
          Dashboard
        </h2>
      </div>

      <div className="text-right">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">
          ACTIVE LEVEL
        </p>

        <h3 className="text-2xl md:text-4xl font-black text-green-500 mt-2">
          {level}
        </h3>
      </div>

    </div>
  )

}

export default HeaderSection