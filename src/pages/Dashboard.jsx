import { useState } from "react";
import { useLoaderData } from "react-router-dom";





const Dashboard = () => {
   const data = useLoaderData()
   const [products, setProducts] = useState(data)

    const handleShort = sortBy => {
        if (sortBy == 'price'){
            const sorted = [...data].sort((a,b) => b.price - a.price)
            setProducts(sorted)

        }else if (sortBy == ' rating'){
            const sorted = [...data].sort((a,b) => b.rating - a.rating)
            setProducts(sorted)

        }
    }
  return (
    <div className="flex  justify-between">
        <div>
            <h4 className="text-2xl font-bold">Cart</h4>     
        </div>
      <div className="flex gap-4">
        <h4 className="text-2xl font-bold">Total cost: </h4>
        <button onClick={() => handleShort(price)} className="btn btn-warning text-">Short by price</button>
        <button onClick={() => handleShort(rating)} className="btn btn-warning">Purchase</button>
      </div>
    </div>
  );
};

export default Dashboard;
