import React from "react";
import bannerImage from "../../assets/banner.jpg"

const Banner = () => {
  return (
    <div className="relative -top-16 -z-10">
      <div className=" bg-purple-600 rounded-2xl text-center pt-24 pb-32 md:pt-32 pb-56 ">
        <div className="mx-12 space-y-5 md:mx-56 ">
          <h1 className="text-xl font-bold text-white md:text-4xl ">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-xs text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="bg-white text-purple-600 rounded-2xl p-2 font-bold">Shop Now</button>
        </div>
      </div>

      {/*Following Section will float to the bottom of header  */}
      <div className="absolute border-2 rounded-3xl p-4 border-white bg-white bg-opacity-30 w-3/4 left-1/2 -bottom-3 transform -translate-x-1/2 translate-y-1/2 z-10 md:-bottom-36">
      <img className="rounded-2xl" src={bannerImage} alt="BannerImage" />
      </div>
    </div>
  );
};

export default Banner;
