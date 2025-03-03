import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { addWishlist, getAllWishlists } from "../utils";

const ProductDetails = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const singleData = data.find((product) => product.product_id == product_id);
    setProduct(singleData);
  }, [product_id, data]);
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    rating,
  } = product;

  const handleWishlist = (product) => {
    // addWishlist(product);
    getAllWishlists()
  };
  return (
    <div className="flex gap-6 justify-center border border-[#FFFFFF] p-4 shadow-md  rounded-md my-6  ">
      <div className="w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl items-center">
        <img className="w-full h-full " src={product_image} alt="" />
      </div>
      <div className="mt-10 space-y-6">
        <h1 className="text-3xl font-[600px] ">{product_title}</h1>
        <h4 className="text-[20px] font-semibold"> $ {price} </h4>
        <p className="text-[18px] font-normal text-[#09080F99]">
          {description}
        </p>
        <div>
          <p className="text-[18px] font-bold"> {specification} </p>
        </div>
        <p className="text-[18px] font-bold">Rating: {rating}</p>
        <div className="flex gap-6">
          <button className="flex btn items-center gap-2 bg-[#9538E2] rounded-full  p-4 text-white font-bold text-xl">
            Add To Card <FaCartShopping />
          </button>
          <button
            onClick={() => handleWishlist(product)}
            className="btn rounded-md text-xl shadow-md p-4 items-center "
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
