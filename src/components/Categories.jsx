import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../redux/slices/categories.js";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <ul
        className={`flex md:flex-row flex-col gap-y-8 gap-x-4 items-center mt-8`}
      >
        {categories.items.map((category) => (
          <li key={category.id}>
            <Link
              to={`/products/category/${category.id}`}
              className={`text-xl`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
