const ProductByCategoryCard = ({ image, title, price }) => {
  return (
    <>
      <div className={`flex items-center gap-x-4 px-4 `}>
        <img
          src={image}
          alt=""
          className={`md:w-48 w-32 aspect-square object-contain bg-white rounded-2xl my-4`}
        />
        <div>
          <h3 className={`font-medium text-xl`}>{title}</h3>
          <p className={`text-lg`}>от {price} руб.</p>
        </div>
      </div>
      <hr className={`border-black dark:border-white`} />
    </>
  );
};

export default ProductByCategoryCard;
