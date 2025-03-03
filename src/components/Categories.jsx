import { NavLink } from "react-router-dom";
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
      
        <div className="mt-[491px] mb-10 text-center">
          {categories.map((category) => (
            <NavLink
              className={(isActive) => `tab  ml-4  bg-[#09080F0D] my-4  rounded-full font-medium text-[18px] ${isActive ? 'tab-active' : ''}`}
              key={category.category}
              to={`/category/${category.category}`}
            >
              {category.category}
            </NavLink>
          ))}
        </div>
        
      
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.string.isRequired,
};

export default Categories;
