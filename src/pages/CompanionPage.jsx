import { COMPANION } from "../constants/companionConfig";

function CompanionPage() {
  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <div className="mb-10">
        <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
          YOUR COMPANION
        </p>

        <h1 className="text-4xl font-black uppercase mt-3">Companion</h1>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="flex min-h-[320px] items-center justify-center border-b border-zinc-800 bg-zinc-900/30 p-8 md:border-b-0 md:border-r">
            <img
              src={COMPANION.image}
              alt={COMPANION.name}
              className="h-64 w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-green-500">
              ACTIVE COMPANION
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase">
              {COMPANION.name}
            </h2>

            <p className="mt-4 max-w-md text-zinc-400">
              {COMPANION.description}
            </p>

            <div className="mt-8 border border-zinc-800 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                COMPANION STATUS
              </p>

              <p className="mt-2 text-sm font-bold uppercase text-green-500">
                Always by your side
              </p>
            </div>

            <p className="mt-6 text-xs uppercase tracking-widest text-zinc-600">
              More companion interactions coming in future versions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanionPage;
