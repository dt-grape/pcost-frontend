import PropTypes from "prop-types";

const ProductCard = ({ img, name, price }) => {
  return (
    <div
      className="
    dark:bg-gray-800
    flex flex-col bg-white h-full justify-start p-4 rounded-2xl active:scale-90 hover:brightness-90 group transition shadow-2xl dark:shadow-none"
    >
      <img
        src={img}
        alt=""
        className={`w-full aspect-square object-contain bg-white rounded-2xl mb-4`}
      />
      <div className={`flex flex-col`}>
        <span className={`font-medium text-xl group-hover:text-blue-500`}>
          {name}
        </span>
        <span className={`text-lg`}>от {price}</span>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
