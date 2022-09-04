import { useContext, Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CotegoriesContext } from "../../contexts/categories.context";

import "./categories.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CotegoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
export default CategoriesPreview;
