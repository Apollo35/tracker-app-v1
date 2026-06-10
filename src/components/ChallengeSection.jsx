function ChallengeSection({
  challengeCompleted,
  challengeFailed,
  restartChallenge,
  challengeDay,
  remainingDays,
  challengeProgress,
}) {

  return (
    <div className="mt-10 border border-green-500 p-6 bg-zinc-950">

      <p
        className={`text-xs uppercase tracking-[0.3em] ${
          challengeCompleted
            ? "text-green-400"
            : challengeFailed
            ? "text-red-500"
            : "text-green-500"
        }`}
      >
        {challengeCompleted
          ? "CHALLENGE COMPLETED"
          : challengeFailed
          ? "CHALLENGE FAILED"
          : "ACTIVE CHALLENGE"}
      </p>

      <button
        onClick={restartChallenge}
        className="mt-4 border border-red-500 text-red-500 px-4 py-2 uppercase tracking-widest text-xs hover:bg-red-500 hover:text-black transition"
      >
        Restart Challenge
      </button>

      <h3 className="text-3xl font-black uppercase mt-3">
        DAY {challengeDay} / 30
      </h3>

      <p className="text-zinc-500 uppercase tracking-widest text-sm mt-2">
        {remainingDays} DAYS REMAINING
      </p>

      <div className="w-full h-3 bg-zinc-900 mt-6 overflow-hidden">

        <div
          className={`h-full transition-all duration-500 ${
            challengeFailed
              ? "bg-red-500"
              : "bg-green-500"
          }`}
          style={{
            width: `${challengeProgress}%`,
          }}
        />

      </div>

      <p className="text-right text-green-500 text-sm mt-2 font-bold tracking-widest">
        {Math.floor(challengeProgress)}%
      </p>

    </div>
  )

}

export default ChallengeSection