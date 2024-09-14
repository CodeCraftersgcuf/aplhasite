export default function categoryDataToDisplay(data) {
  let CATEGORIES = [];

  if (data) {
    data.forEach((ele) => {
      if (!ele.category_data.root_category) {
        CATEGORIES.push({
          category: {
            name: ele.category_data.name,
            id: ele.id,
          },
          subCategories: [],
        });
      }
    });

    data.forEach((ele) => {
      if (ele.category_data.root_category) {
        CATEGORIES.forEach((category, index) => {
          //   console.log(ele.category_data.root_category);
          //   console.log(category.id);
          if (category.category.id === ele.category_data.root_category) {
            CATEGORIES[index].subCategories.push({
              name: ele.category_data.name,
              id: ele.id,
            });
          }
        });
      }
    });
  }
  return CATEGORIES;
}
