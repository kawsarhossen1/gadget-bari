const Card = ({ product }) => {
  const { product_title, product_image, price } = product || {};
  return (
    <>
      <div className="gap-4">
        <img className="object-cover" src={product_image} alt="" />
        <h1>{product_title}</h1>
        <p>{price}</p>
      </div>
      
    </>
  );
};

export default Card;
