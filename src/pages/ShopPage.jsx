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
    <div className="p-6">
      <h1 className="text-2xl font-bold">Shop</h1>
      <p className="mt-2 text-yellow-400">Diamonds: {diamonds}</p>
      <p className="text-gray-400 mt-2">Spend your diamonds here.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {SHOP_ITEMS.map((item) => {
          const isOwned = purchasedItems.includes(item.id);

          return (
            <div
              key={item.id}
              className="rounded-lg border border-zinc-800 p-4"
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
                className={`mt-4 w-full rounded-md py-2 transition ${
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
  );
}
