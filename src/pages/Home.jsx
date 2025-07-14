import bannerImage from "../assets/home.webp";
import Features from "../components/Home/Features";
import Banner from "../components/Shared/Banner";

const Home = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        title={"Efficient & Reliable Shipping And Logistics Company"}
        paragraph={
          "Seamless and dependable logistics solutions designed to keep your business moving forward"
        }
        buttonText={"Learn More"}
      />
      <Features />
    </div>
  );
};

export default Home;
