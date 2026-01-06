import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";   // <-- import autoplay module
import "swiper/css";
import Roadmapslider from "../../../assets/Roadmapslider.png";
import Elearningslider from "../../../assets/Elearningslider.png";
import Pionnerplatformslider from "../../../assets/Pionnerplatformslider.png";

//import dashboardImg from "../../../assets/dashboard.png";
//import featureImg1 from "../../../assets/p2.jpg";
//import featureImg2 from "../../../assets/dashboard.png";

const Slider = ({ imgY, imgScale, overlayOpacity }) => {
  return (
    <div className="relative w-[90%] md:w-[80%] lg:w-[80%] mx-auto -mt-32">
      {/* Slider */}
      <motion.div
  style={{ y: imgY, scale: imgScale }}
  className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl shadow-2xl overflow-hidden"
>
  <Swiper
    modules={[Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop={true}
    className="h-full"
  >
    <SwiperSlide>
      <img
        src={Elearningslider}
        alt="Dashboard"
        className="w-full h-full object-cover rounded-xl"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src={Roadmapslider}
        alt="Feature 1"
        className="w-full h-full object-cover rounded-xl"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src={Pionnerplatformslider}
        alt="Feature 2"
        className="w-full h-full object-cover rounded-xl"
      />
    </SwiperSlide>
  </Swiper>
</motion.div>

    </div>
  );
};

export default Slider;
