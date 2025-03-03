//get all product to a local storage

const getAllWishlists = () => {
  const all = localStorage.getItem("wishlists");

  if (all) {
    const wishlists = JSON.parse(all);
    console.log(wishlists)
    return wishlists;
  } else {
    console.log([])
    return [];
  }
};

//add a product to a local storage
const addWishlist = (product) => {
  //get all previously saved product data

  const wishlists = [];
  wishlists.push(product);
  localStorage.setItem("wishlists", JSON.stringify(wishlists));
};

//remove a product to a local storage

export { addWishlist, getAllWishlists };
