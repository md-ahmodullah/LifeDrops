import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider from "./Slider";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <div className="bg-[url('https://i.ibb.co.com/J2VVLQk/slider7.jpg')] h-[550px] bg-cover lg:bg-center bg-no-repeat flex items-center justify-center md:justify-end pr-0 md:pr-4 lg:pr-24 bg-red-400 bg-opacity-80 md:bg-opacity-50 bg-blend-overlay">
          <Slider
            title={"Every Drop Counts. Donate Blood, Save Lives"}
            subTitle={
              "Blood donation is a selfless act that can make a profound difference in the lives of others. By donating blood, you become a lifeline for patients battling illnesses, undergoing surgeries, or facing unexpected emergencies. Your generosity can provide hope and healing to those in need."
            }
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('https://i.ibb.co.com/KXsTdqm/slide01.jpg')] h-[550px] bg-cover bg-center bg-no-repeat flex items-center justify-center md:justify-start pl-0 md:pl-14 lg:pl-20 bg-red-400 bg-opacity-70 md:bg-opacity-55 bg-blend-overlay">
          <Slider
            title={"Finding Blood Made Easy, Connect with Donors"}
            subTitle={
              "Need blood for yourself or a loved one? Our platform connects you with available donors and blood drives in your area. Register as a recipient and receive the support you need quickly and efficiently."
            }
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('https://i.ibb.co.com/C80Ggty/slider12.jpg')] h-[550px] bg-cover bg-center bg-no-repeat flex items-center justify-center md:justify-start pl-0 md:pl-14 lg:pl-20 bg-red-400 bg-opacity-75 bg-blend-overlay">
          <Slider
            title={"Join Our Community: Make a Lasting Impact"}
            subTitle={
              "Become part of a compassionate community dedicated to saving lives. Connect with other donors, learn about blood types and their importance, and stay informed about upcoming blood drives. Together, we can ensure a steady supply of blood for those in need."
            }
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
