import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCards = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filterByCategory);
    } else {
      setProducts(data.slice(0, 9));
    }
  }, [category, data]);
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <button
        className="btn btn-warning font-bold "
        onClick={() => setProducts(data)}
      >
        View All
      </button>
    </>
  );
};

export default ProductCards;
