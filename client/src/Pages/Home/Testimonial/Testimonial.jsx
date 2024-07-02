import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
const Testimonial = () => {
  const axiosCommon = useAxiosCommon();
  const [testimony, setTestimony] = useState([]);
  useEffect(() => {
    axiosCommon("/testimony").then((result) => {
      setTestimony(result.data);
    });
  }, []);
  return (
    <div>
      <div className="text-center">
        <Swiper
          style={{
            "--swiper-navigation-color": "#008080",
            "--swiper-pagination-color": "#008080",
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimony.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="md:p-20 p-5 space-y-2 rounded-3xl border md:mx-20 mx-10 shadow-2xl">
                <img
                  className="h-40 border-4 border-[#008080] mx-auto rounded-full"
                  src={data.avatar}
                  alt={data.name}
                />
                <h3 className="text-3xl font-bold">{data.name}</h3>
                <p>{data.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
