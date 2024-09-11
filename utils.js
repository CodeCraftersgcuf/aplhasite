const CATEGORIES = [
  {
    category: 'Nuro Disposable',
    subCategories: [
      '1ml - Classic',
      '1ml - Limited Edition',
      '1ml - Essential',
      '3ml - Classic',
      '3ml - Super Blend',
      '3ml - Broad Spec',
    ],
  },
  {
    category: 'Nuro Cartridge',
    subCategories: ['1ml - Limited Edition', '1ml - Classic'],
  },
  {
    category: 'Candy Pod',
    subCategories: ['1ml - Broad Spec'],
  },
];

const CATEGORIES2 = [
  {
    category: '1ML CARTS',
    subCategories: ['1ML CLASSIC CART', '1ML THCA CART'],
  },
  {
    category: '1ML DISPOSABLES',
    subCategories: ['1ML CLASSIC DISPOSABLE', '1ML ESSENTIAL DISPOSABLE'],
  },
  {
    category: '1ML PODS',
    subCategories: ['BATTERY', 'POD BROAD SPEC'],
  },
  {
    category: '3ML DISPOSABLES',
    subCategories: [
      '3ML SUPER BLEND DISPOSABLE',
      '3ML CLASSIC DISPOSABLE',
      '3ML ESSENTIAL DISPOSABLE',
      '3ML BROAD SPEC DISPOSABLE',
    ],
  },
  {
    category: '5ML DISPOSABLES',
    subCategories: ['5ML BROAD SPEC DISPOSABLE'],
  },
  {
    category: 'COLONGNE',
    subCategories: ['PUMP'],
  },
  {
    category: 'PAPERS & CONES',
    subCategories: ['CROP KINGS', 'LEMON TREE', 'POP CONES'],
  },
  {
    category: 'PEROLLS',
    subCategories: ['TRE HOUSE'],
  },
];

// Function to capitalize the first letter of each word in a string
// const capitalizeFirstWord = str => {
//     return str.toLowerCase().replace(/^\w|\s\w/g, match => match.toUpperCase());
// };

// Modify the categories and subcategories
// const modifiedCategories = CATEGORIES2.map(categoryObj => ({
//     category: capitalizeFirstWord(categoryObj.category),
//     subCategories: categoryObj.subCategories.map(subCat => capitalizeFirstWord(subCat))
// }));
export const PASCAL_CATEGORIES = [
  {
    category: '1mL Carts',
    subCategories: ['1mL Classic Cart', '1mL THCA Cart'],
  },
  {
    category: '1mL Disposables',
    subCategories: ['1mL Classic Disposable', '1mL Essential Disposable'],
  },
  {
    category: '1mL Pods',
    subCategories: ['Battery', 'Pod Broad Spec'],
  },
  {
    category: '3mL Disposables',
    subCategories: [
      '3mL Super Blend Disposable',
      '3mL Classic Disposable',
      '3mL Essential Disposable',
      '3mL Broad Spec Disposable',
    ],
  },
  {
    category: '5mL Disposables',
    subCategories: ['5mL Broad Spec Disposable'],
  },
  {
    category: 'Colongne',
    subCategories: ['Pump'],
  },
  {
    category: 'Papers & Cones',
    subCategories: ['Crop Kings', 'Lemon Tree', 'Pop Cones'],
  },
  {
    category: 'Perolls',
    subCategories: ['Tre House'],
  },
];
