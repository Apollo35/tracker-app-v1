const STORAGE_KEY = "purchasedItems";

export function loadPurchasedItems() {
  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function savePurchasedItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function purchaseItem(itemId) {
  const items = loadPurchasedItems();

  if (items.includes(itemId)) {
    return items;
  }

  const updatedItems = [...items, itemId];

  savePurchasedItems(updatedItems);

  return updatedItems;
}