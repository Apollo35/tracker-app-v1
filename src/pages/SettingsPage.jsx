function SettingsPage({ challengeEnabled, setChallengeEnabled }) {
  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <div className="mb-8">
        <p className="text-green-500 text-xs uppercase tracking-[0.3em]">
          SYSTEM CONFIGURATION
        </p>

        <h1 className="iron-display mt-2 text-5xl leading-none md:text-7xl">
          Settings
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Configure your Tracker experience.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-900">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            APP
          </p>

          <h2 className="iron-display mt-3 text-2xl leading-none">Tracker</h2>

          <p className="iron-data mt-3 text-xs text-zinc-500">VERSION 0.2.0</p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-900">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            STORAGE
          </p>

          <h2 className="iron-display mt-3 text-2xl leading-none">
            Local Storage
          </h2>

          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-green-500">
            Active
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-900">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            COMPANION
          </p>

          <h2 className="iron-display mt-3 text-2xl leading-none">Otter</h2>

          <p className="mt-3 text-xs uppercase tracking-widest text-zinc-500">
            Active companion
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-900">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            CLOUD SYNC
          </p>

          <h2 className="iron-display mt-3 text-2xl leading-none">
            Local Only
          </h2>

          <p className="mt-3 text-xs uppercase tracking-widest text-zinc-500">
            Cloud features disabled
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-900 md:col-span-2">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            GAMEPLAY
          </p>

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="iron-display text-2xl leading-none">
                30-Day Challenge
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Enable the challenge system for your habit routine.
              </p>
            </div>

            <label className="flex cursor-pointer items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                {challengeEnabled ? "Enabled" : "Disabled"}
              </span>

              <input
                type="checkbox"
                checked={challengeEnabled}
                onChange={(event) => setChallengeEnabled(event.target.checked)}
                className="h-5 w-5 accent-green-500"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
