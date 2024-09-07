export const totalPrice = (items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total +=
      Number(
        items[i].product?.item_data?.variations[0]?.item_variation_data
          .price_money.amount
      ) * Number(items[i].quantity);
  }
  return (total / 100).toFixed(2);
};
// export const totalPrice = (items) => {
//   let total = 0;
//   for (let i = 0; i < items.length; i++) {
//     total += Number(items[i].product.price) * Number(items[i].quantity);
//   }
//   return total.toFixed(2);
// };
