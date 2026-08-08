import { SHOP_ITEMS } from "../constants/shopConfig";
import { canAfford, spendDiamonds } from "../services/economyService";
import { useState } from "react";
import {
  loadPurchasedItems,
  purchaseItem,
} from "../services/shopStorageService";

export default function ShopPage({ diamonds, setDiamonds }) {
  const [purchasedItems, setPurchasedItems] = useState(loadPurchasedItems());

  const handleBuy = (item) => {
    if (!canAfford(diamonds, item.price)) {
      alert("Not enough diamonds!");
      return;
    }

    console.log("Buying:", item);

    const remainingDiamonds = spendDiamonds(diamonds, item.price);

    setDiamonds(remainingDiamonds);

    const updatedPurchasedItems = purchaseItem(item.id);

    setPurchasedItems(updatedPurchasedItems);
  };

  return (
    <div className="flex-1 w-full p-4 md:p-8">
      <div>
        <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
          ECONOMY SYSTEM
        </p>

        <h1 className="text-4xl font-black uppercase mt-3">Shop</h1>

        <p className="mt-2 text-yellow-400 font-bold">💎 {diamonds}</p>

        <p className="text-zinc-500 mt-2">Spend your diamonds here.</p>
      </div>

      {/* Future Categories */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="border border-zinc-800 bg-zinc-950 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            COMPANION
          </p>

          <h2 className="mt-2 text-lg font-black uppercase">Coming Soon</h2>

          <p className="mt-2 text-sm text-zinc-500">
            Companion environment items and decorations.
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            THEMES
          </p>

          <h2 className="mt-2 text-lg font-black uppercase">Coming Soon</h2>

          <p className="mt-2 text-sm text-zinc-500">
            Unlock new visual themes for your Tracker.
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            COSMETICS
          </p>

          <h2 className="mt-2 text-lg font-black uppercase">Coming Soon</h2>

          <p className="mt-2 text-sm text-zinc-500">
            Cosmetic upgrades and future customization items.
          </p>
        </div>
      </div>

      {/* Current Shop Items */}

      <div className="mt-10">
        <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
          CURRENT ITEMS
        </p>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {SHOP_ITEMS.map((item) => {
            const isOwned = purchasedItems.includes(item.id);

            return (
              <div
                key={item.id}
                className="border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-600"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-4 h-40 w-full rounded-md object-cover"
                />

                <h2 className="text-xl font-bold">{item.name}</h2>

                <p className="mt-2 text-sm text-zinc-400">{item.description}</p>

                <p className="mt-4 font-semibold text-green-500">
                  💎 {item.price}
                </p>

                <button
                  onClick={() => handleBuy(item)}
                  disabled={isOwned}
                  className={`mt-4 w-full py-2 transition ${
                    isOwned
                      ? "cursor-not-allowed border border-zinc-700 text-zinc-500"
                      : "border border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                  }`}
                >
                  {isOwned ? "Owned" : "Buy"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
