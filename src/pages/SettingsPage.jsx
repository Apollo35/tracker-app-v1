function SettingsPage({ challengeEnabled, setChallengeEnabled }) {
  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <h1 className="text-4xl font-black uppercase mb-8">Settings</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-600">
          <h2 className="font-bold mb-2">App</h2>

          <p className="text-zinc-400">Version 0.2.0</p>
        </div>

        <div className="border border-zinc-800 p-4">
          <h2 className="font-bold mb-2">Storage</h2>

          <p className="text-zinc-400">Local Storage Active</p>
        </div>

        <div className="border border-zinc-800 p-4">
          <h2 className="font-bold mb-2">Companion</h2>

          <p className="text-zinc-400">Companion System Coming Soon</p>
        </div>

        <div className="border border-zinc-800 p-4">
          <h2 className="font-bold mb-2">Cloud Sync</h2>

          <p className="text-zinc-400">Not available in the local-first MVP.</p>
        </div>

        <div className="border border-zinc-800 p-4">
          <h2 className="font-bold mb-4">Gameplay</h2>

          <label className="flex items-center justify-between">
            <span>Enable 30-Day Challenge</span>

            <input
              type="checkbox"
              checked={challengeEnabled}
              onChange={(event) => setChallengeEnabled(event.target.checked)}
              className="w-5 h-5"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
