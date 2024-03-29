import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const ProductByCategoryCard = ({ image, title, price }) => {
  const isGrid = useSelector((state) => state.grid.isGrid);

  return (
    <div
      className={`bg-white h-full dark:bg-gray-800 rounded-2xl active:scale-95 hover:brightness-90 group transition shadow-2xl dark:shadow-none `}
    >
      <div
        className={`flex gap-x-4 px-4  ${
          isGrid ? `flex-col` : `items-center`
        } `}
      >
        <img
          src={image}
          alt=""
          className={`md:w-48 w-32 aspect-square object-contain bg-white rounded-2xl my-4 ${
            isGrid ? `self-center` : ``
          } `}
        />
        <div>
          <h3 className={`font-medium text-xl group-hover:text-blue-500`}>
            {title}
          </h3>
          <p className={`text-lg `}>от {price} руб.</p>
        </div>
      </div>
    </div>
  );
};

ProductByCategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductByCategoryCard;
