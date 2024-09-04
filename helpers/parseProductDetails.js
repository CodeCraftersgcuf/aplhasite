export default function parseProductDetails(details) {
  let description = '';
  let productDetails = '';
  let ingredients = '';
  // Split the string into sections using specific keywords
  const descriptionStart = details.indexOf('Description:');
  //   console.log(descriptionStart);
  const productDetailsStart = details.indexOf('Product Details:');
  const ingredientsStart = details.indexOf('Ingredients:');

  //check if theres not a detailed description
  if (
    descriptionStart === -1 &&
    productDetailsStart === -1 &&
    ingredientsStart === -1
  ) {
    return null;
  }

  // Extract and trim each section
  if (descriptionStart === -1) {
    description = '';
  } else {
    description = details
      .slice(descriptionStart + 'Description:'.length, productDetailsStart)
      .trim();
  }
  if (productDetailsStart === -1) {
    productDetails = '';
  } else {
    productDetails = details
      .slice(productDetailsStart + 'Product Details:'.length, ingredientsStart)
      .trim();
    //   .replace(/\n/g, '<br/>');
  }
  if (ingredientsStart === -1) {
    ingredients = '';
  } else {
    ingredients = details
      .slice(ingredientsStart + 'Ingredients:'.length)
      .trim();
  }

  // Return the object with parsed data
  return {
    Description: description,
    ProductDetails: productDetails,
    Ingredients: ingredients,
  };
}
