import { Link, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Card = ({ product, handleRemove }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const { product_title, product_image, price, product_id } = product || {};
  return (
    <div className="flex relative mb-4 ">
      <Link
        to={`/product/${product_id}`}
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
      {pathname === "/dashboard" && (
        <div onClick={() => handleRemove(product_id)}  className="absolute p-3 -top-5 -right-5 bg-red-500 rounded-full text-white cursor-pointer">
          <FaTrash size={20}/>
        </div>
      )}
    </div>
  );
};

export default Card;
