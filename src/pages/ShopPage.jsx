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
      <div className="mb-8">
        <p className="text-green-500 text-xs uppercase tracking-[0.3em]">
          ECONOMY SYSTEM
        </p>

        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="iron-display text-5xl leading-none md:text-7xl">
              Shop
            </h1>

            <p className="mt-3 text-sm text-zinc-500">
              Spend your diamonds and unlock future upgrades.
            </p>
          </div>

          <div className="border border-green-900 bg-green-950/10 px-5 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              DIAMONDS
            </p>

            <p className="iron-data mt-2 text-2xl font-bold text-yellow-400">
              💎 {diamonds}
            </p>
          </div>
        </div>
      </div>

      {/* Future Categories */}

      <div className="grid gap-4 md:grid-cols-3">
        <div className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-900">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            COMPANION
          </p>

          <h2 className="iron-display mt-3 text-2xl leading-none">
            Coming Soon
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Companion environment items and decorations.
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-900">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            THEMES
          </p>

          <h2 className="iron-display mt-3 text-2xl leading-none">
            Coming Soon
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Unlock new visual themes for your Tracker.
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-900">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            COSMETICS
          </p>

          <h2 className="iron-display mt-3 text-2xl leading-none">
            Coming Soon
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Cosmetic upgrades and future customization items.
          </p>
        </div>
      </div>

      {/* Current Shop Items */}

      <div className="mt-10">
        <p className="text-green-500 text-[10px] font-bold uppercase tracking-[0.25em]">
          CURRENT ITEMS
        </p>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {SHOP_ITEMS.map((item) => {
            const isOwned = purchasedItems.includes(item.id);

            return (
              <div
                key={item.id}
                className={`border bg-zinc-950 p-4 transition ${
                  isOwned
                    ? "border-green-900/70 bg-green-950/5"
                    : "border-zinc-800 hover:border-green-900"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-4 h-40 w-full object-cover"
                />

                <div className="flex items-start justify-between gap-4">
                  <h2 className="iron-display text-2xl leading-none">
                    {item.name}
                  </h2>

                  {isOwned && (
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-500">
                      Owned
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-zinc-400">{item.description}</p>

                <p className="iron-data mt-4 text-sm font-bold text-yellow-400">
                  💎 {item.price}
                </p>

                <button
                  onClick={() => handleBuy(item)}
                  disabled={isOwned}
                  className={`mt-4 w-full py-3 text-xs font-bold uppercase tracking-[0.15em] transition ${
                    isOwned
                      ? "cursor-not-allowed border border-zinc-800 text-zinc-600"
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
