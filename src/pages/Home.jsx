import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div>
      {/* banner */}
      <Banner />
      {/* Heading */}
      {/* Categories tab section */}
      {/* <Categories categories={categories}/> */}
      <Categories categories={categories} />
      {/* Dynamic nested component */}
      <Outlet />
    </div>
  );
};

export default Home;
