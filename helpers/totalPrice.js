export const totalPrice = (items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += Number(items[i].product.price) * Number(items[i].quantity);
  }
  return total.toFixed(2);
};
