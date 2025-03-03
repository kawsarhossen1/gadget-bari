import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductCards from "./ProductCards";

const Categories = ({ categories }) => {
  return (
    <>
      {/* <div role="tablist" className="tabs tabs-lift">
      {categories.map(category =>(
        <Link key={category.category} role="tab" className="tab">
        category
        </Link>
      ))}
    </div> */}
      
        <div className="mt-[491px] mb-10">
          {categories.map((category) => (
            <Link
              className="p-4 ml-6 w-[192px] bg-[#09080F0D] my-4 pl-4 rounded-full font-medium text-[18px]  "
              key={category.category}
              to={`/category/${category.category}`}
            >
              {category.category}
            </Link>
          ))}
        </div>
        
      
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.string.isRequired,
};

export default Categories;
