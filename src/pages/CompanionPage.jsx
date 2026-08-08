import { COMPANION } from "../constants/companionConfig";

function CompanionPage() {
  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <h1 className="text-4xl font-black uppercase mb-8">Companion</h1>

      <div className="border border-zinc-800 p-6 max-w-md">
        <img
          src={COMPANION.image}
          alt={COMPANION.name}
          className="w-full h-64 object-contain mb-6"
        />

        <h2 className="text-2xl font-bold uppercase">{COMPANION.name}</h2>

        <p className="text-zinc-400 mt-2">{COMPANION.description}</p>
      </div>
    </div>
  );
}

export default CompanionPage;
