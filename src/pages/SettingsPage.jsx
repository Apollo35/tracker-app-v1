function SettingsPage() {
  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <h1 className="text-4xl font-black uppercase mb-8">Settings</h1>

      <div className="space-y-4">
        <div className="border border-zinc-800 p-4">
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

          <p className="text-zinc-400">Supabase Integration Planned</p>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
