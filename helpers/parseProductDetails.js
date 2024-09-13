export default function parseProductDetails(str) {
  // Split the string at double newlines
  if (str === '') return null;
  if (str.indexOf('\n\n') < 0) return null;
  const parts = str.split('\n\n');

  // Create two arrays
  const array1 = [];
  const array2 = [];

  // Add the split parts to the arrays
  if (parts.length > 0) array1.push(parts[0]);
  if (parts.length > 1) array2.push(parts[1]);

  return { description: array1[0], acknowledgements: array2[0] };
}

// export default function parseProductDetails(details) {
//   let description = '';
//   let productDetails = '';
//   let ingredients = '';
//   // Split the string into sections using specific keywords
//   const descriptionStart = details.indexOf('Description:');
//   //   console.log(descriptionStart);
//   const productDetailsStart = details.indexOf('Product Details:');
//   const ingredientsStart = details.indexOf('Ingredients:');

//   //check if theres not a detailed description
//   if (
//     descriptionStart === -1 &&
//     productDetailsStart === -1 &&
//     ingredientsStart === -1
//   ) {
//     return null;
//   }

//   // Extract and trim each section
//   if (descriptionStart === -1) {
//     description = '';
//   } else {
//     description = details
//       .slice(descriptionStart + 'Description:'.length, productDetailsStart)
//       .trim();
//   }
//   if (productDetailsStart === -1) {
//     productDetails = '';
//   } else {
//     productDetails = details
//       .slice(productDetailsStart + 'Product Details:'.length, ingredientsStart)
//       .trim();
//     //   .replace(/\n/g, '<br/>');
//   }
//   if (ingredientsStart === -1) {
//     ingredients = '';
//   } else {
//     ingredients = details
//       .slice(ingredientsStart + 'Ingredients:'.length)
//       .trim();
//   }

//   // Return the object with parsed data
//   return {
//     Description: description,
//     ProductDetails: productDetails,
//     Ingredients: ingredients,
//   };
// }
