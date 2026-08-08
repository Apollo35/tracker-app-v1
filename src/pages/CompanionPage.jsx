import { COMPANION } from "../constants/companionConfig";

function CompanionPage() {
  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <div className="mb-8">
        <p className="text-green-500 text-xs uppercase tracking-[0.3em]">
          YOUR COMPANION
        </p>

        <h1 className="iron-display mt-2 text-5xl leading-none md:text-7xl">
          Companion
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Your companion grows alongside your daily routine.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative flex min-h-[360px] items-center justify-center border-b border-zinc-800 bg-zinc-900/30 p-8 md:border-b-0 md:border-r">
            <div className="absolute left-5 top-5">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-500">
                ACTIVE
              </span>
            </div>

            <img
              src={COMPANION.image}
              alt={COMPANION.name}
              className="h-72 w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              ACTIVE COMPANION
            </p>

            <h2 className="iron-display mt-3 text-5xl leading-none md:text-6xl">
              {COMPANION.name}
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
              {COMPANION.description}
            </p>

            <div className="mt-8 border border-green-900/70 bg-green-950/10 p-5">
              <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                COMPANION STATUS
              </p>

              <p className="iron-display mt-3 text-2xl leading-none">
                Always by your side
              </p>

              <p className="mt-2 text-xs uppercase tracking-widest text-zinc-600">
                Core companion active
              </p>
            </div>

            <div className="mt-6 border-t border-zinc-800 pt-5">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                More companion interactions coming in future versions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanionPage;
