import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import { getAllWishlists, removeWishlist } from "../utils";
import Card from "../components/Card";

const Dashboard = () => {
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const wishlist = getAllWishlists();
    setProducts (wishlist);
  }, []);
  const data = useLoaderData();
  const [product, setProduct] = useState(data);

  const handleShort = (sortBy) => {
    if (sortBy == "price") {
      const sorted = [...data].sort((a, b) => b.price - a.price);
      setProduct(sorted);
    } else if (sortBy == " rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setProduct(sorted);
    }
  };

  const handleRemove =(product_id)=>{
    removeWishlist(product_id)
    const wishlist = getAllWishlists();
    setProducts (wishlist);
  }
  return (
    <>
      <Heading
        title="Dashboard"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />
      <div className="text-center">
        <h1 className="text-3xl font-bold ">Dashboard</h1>
        <p className="space-y-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="flex gap-6 my-4 justify-center ">
          <button className="p-2 text-white font-bold bg-[#9538E2] text-center rounded-md w-[150px]">Cart</button>
          <button className="p-2 text-[#9538E2] font-bold border border-[#9538E2] rounded-md text-center w-[150px] bg-transparent">Wishlist</button>
        </div>
      </div>
      <div className="flex  justify-between">
        <div>
          <h4 className="text-2xl font-bold">Cart</h4>
        </div>
        <div className="flex gap-4">
          <h4 className="text-2xl font-bold">Total cost: </h4>
          <button
            onClick={() => handleShort(price)}
            className="btn btn-warning text-"
          >
            Short by price
          </button>
          <button
            onClick={() => handleShort(rating)}
            className="btn btn-warning"
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {products.map((product) => (
          <Card handleRemove={handleRemove} key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
