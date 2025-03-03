import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_title, product_image, price, id } = product || {};
  return (
    <div className="flex relative mb-4 ">
      <Link
        to={`/product/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-50 overflow-hidden">
          <img className="" src={product_image}></img>
        </figure>
        <div className="p-4">
          <h1 className="text-xl">{product_title}</h1>
          <p className="">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
