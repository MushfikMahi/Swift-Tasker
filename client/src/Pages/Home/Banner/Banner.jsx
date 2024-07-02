// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  const [text1] = useTypewriter({
    words: [
      "Survey on Customer Preferences",
      "Analysis of Consumer Buying Behaviors",
      "Study on User Satisfaction Levels",
    ],
    loop: 0,
  });
  const [text2] = useTypewriter({
    words: [
      "Review a Product on Amazon",
      "Rate Your Recent Purchase on Amazon",
      "Share Your Feedback on Amazon Products",
    ],
    loop: 3,
  });
  const [text3] = useTypewriter({
    words: [
      "Share a Blog Post on Social Media",
      "Promote Your Blog Post on Social Platforms",
      "Boost Your Blog's Visibility with Social Media Shares",
    ],
    loop: 3,
  });
  return (
    <div className="">
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
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/collage-customer-experience-concept_23-2149367132.jpg?t=st=1718887512~exp=1718891112~hmac=45e988cef749cfeec57242e340ffe4986ec9e86d8a24dfe1d7caa2e0914193a7&w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                  {text1}
                  <Cursor cursorColor="#008080" />
                </h1>
                <p className="mb-5 text-sm md:text-base">
                  Participate in our comprehensive survey to share your
                  preferences and opinions as a valued customer. Your feedback
                  will help us tailor our products and services to better meet
                  your needs and enhance your overall experience. Your insights
                  are crucial for us to understand market trends and customer
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/smiling-young-woman-showing-tips-haircare-looking-happy_259150-60113.jpg?t=st=1718887580~exp=1718891180~hmac=d0ba0b8c96f1a876c81bc600f9312e8a3a5400accd367db12693b5d7ac310fab&w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                  {text2}
                  <Cursor cursorColor="#008080" />
                </h1>
                <p className="mb-5 text-sm md:text-base">
                  Take a few moments to review a product you recently purchased
                  on Amazon. Your honest feedback helps other customers make
                  informed buying decisions and allows sellers to improve their
                  products and services. Share your experience and rate the
                  product to contribute to the Amazon community.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/blogging-gone-viral-camera-concept_53876-127618.jpg?t=st=1718887714~exp=1718891314~hmac=5fc05a9f82e1c5323f05b7ad19a795cfcbbacbd970b1512795aad187f7639023&w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                  {text3}
                  <Cursor cursorColor="#008080" />
                </h1>
                <p className="mb-5 text-sm md:text-base">
                  Take a few moments to review a product you recently purchased
                  on Amazon. Your honest feedback helps other customers make
                  informed buying decisions and allows sellers to improve their
                  products and services. Share your experience and rate the
                  product to contribute to the Amazon community.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
