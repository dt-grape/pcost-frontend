import { NavLink } from "react-router-dom";

import categories from "../helpers/categories";

const Categories = () => {
  return (
    <div className="wrapper">
      <ul className="categories-list">
        {categories.map((cat) => (
          <li key={cat.id} className="categories-item">
            <NavLink className="categories-link" to={cat.path}>
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
