import bannerImage from "../assets/about.webp";
import Banner from "../components/Banner";

const About = () => {
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
    </div>
  );
};

export default About;
