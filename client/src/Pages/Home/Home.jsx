import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Future from "./Future/Future";
import HowItWorks from "./HowItWorks/HowItWorks";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SwiftTasker | Home</title>
      </Helmet>
      <Banner></Banner>
      <Future></Future>
      <HowItWorks></HowItWorks>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
