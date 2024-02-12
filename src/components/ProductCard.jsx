const ProductCard = ({ img, name, price }) => {
  return (
    <div className="card">
      <img src={img} alt="" className="card-image" />
      <div className="card-info">
        <span className="card-name">{name}</span>
        <span className="card-price">от {price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
