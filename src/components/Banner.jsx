import bannerImg from '../assets/banner.jpg'

const Banner = () => {
  return (
    <>
      
      <div className="absolute top-[500px]   md:top-[380px] left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[50%]">
        <div className="p-2 border border-white rounded-md ">
          <img 
            src={bannerImg}
            alt="VR Headset"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
      
    </>
  );
};

export default Banner;
