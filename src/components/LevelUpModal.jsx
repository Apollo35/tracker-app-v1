function LevelUpModal({
  level,
  showLevelUp,
}) {

  if (!showLevelUp) {
    return null
  }

  return (
    <div className="fixed top-10 right-10 border border-green-500 bg-black px-6 py-4 z-50">

      <p className="text-green-500 font-black uppercase tracking-[0.3em] text-sm">
        LEVEL UP
      </p>

      <h3 className="text-3xl font-black text-white mt-2">
        LEVEL {level}
      </h3>

    </div>
  )

}

export default LevelUpModal