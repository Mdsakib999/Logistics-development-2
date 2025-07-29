import bannerImage from "../assets/home.jpeg";
import AboutUs from "../components/Home/AboutUs";
import Blog from "../components/Home/Blog";
import Faq from "../components/Home/Faq";
import Features from "../components/Home/Features";
import LogisticsOption from "../components/Home/LogisticsOption";
import OurMission from "../components/Home/OurMission";
import Solutions from "../components/Home/Solutions";
import Support from "../components/Home/Support";
import Banner from "../components/Shared/Banner";

const Home = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        title={"Efficient & Reliable Shipping And Logistics Company"}
        paragraph={
          "We provide seamless, reliable, and end-to-end logistics solutions tailored to your business needs—ensuring smooth operations, on-time deliveries, and continuous momentum in a fast-paced global market."
        }
        buttonText={"Learn More"}
      />
      <Features />
      <AboutUs />
      <OurMission />
      <Blog />
      <Solutions />
      <LogisticsOption />
      <Support />
      <Faq />
    </div>
  );
};

export default Home;
