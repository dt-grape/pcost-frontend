import PropTypes from "prop-types";

const ProductByCategoryCard = ({ image, title, price }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl active:scale-95 hover:brightness-90 group transition`}
    >
      <div className={`flex items-center gap-x-4 px-4`}>
        <img
          src={image}
          alt=""
          className={`md:w-48 w-32 aspect-square object-contain bg-white rounded-2xl my-4`}
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
