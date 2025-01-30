const Footer = () => {
  return (
    <>
      <footer className="md:px-[282px] mb-4 ">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Gadget Heaven</h2>
          <p className="font-medium text-[16px] text-[#09080F99]">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
          <nav className="flex flex-col text-center space-y-2">
            <h6 className="text-[18px] font-bold text-[#09080F] text-center]">Services</h6>
            <a className="link text-[#09080F99] link-hover">Product Support</a>
            <a className="link text-[16px] text-[#09080F99] link-hover">Order Tracking</a>
            <a className="link text-[#09080F99] link-hover">Shipping & Delivery</a>
            <a className="link text-[#09080F99] link-hover">Returns</a>
          </nav>
          <nav className="flex flex-col text-center space-y-2">
            <h6 className="text-[18px] font-bold text-[#09080F] text-center">Company</h6>
            <a className="link text-[#09080F99] link-hover">About us</a>
            <a className="link text-[#09080F99] link-hover">Careers</a>
            <a className="link text-[#09080F99] link-hover">Contact</a>
          </nav>
          <nav className="flex flex-col text-center space-y-2">
            <h6 className="text-[18px] font-bold text-[#09080F] text-center">Legal</h6>
            <a className="link text-[#09080F99] link-hover">Terms of use</a>
            <a className="link text-[#09080F99] link-hover">Privacy policy</a>
            <a className="link text-[#09080F99] link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
