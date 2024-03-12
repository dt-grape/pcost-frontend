import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../redux/slices/categories.js";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  React.useEffect(() => {
    if (id) {
      const category = categories.items.find((category) => category.id === id);
      if (category) {
        document.title = `pCost | ${category.name}`; // Устанавливаем имя категории в title
      }
    }
  }, [id, categories.items]);

  return (
    <div>
      <ul
        className={`flex md:flex-row flex-col gap-y-8 gap-x-4 items-center mt-8`}
      >
        {categories.items.map((category) => (
          <li key={category.id}>
            <button
              onClick={() =>
                navigate(`/products/category/${category.id}/${category.name}`)
              }
              className={`text-xl`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
