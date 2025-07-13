import bannerImage from "../assets/about.webp";
import Banner from "../components/Shared/Banner";

const About = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        title={"About Us"}
        paragraph={
          "We’re a dedicated team passionate about moving goods quickly and safely worldwide.With years of experience in logistics, we focus on reliable services, innovative solutions, and building trust with every shipment"
        }
        buttonText={"Join Us"}
      />
    </div>
  );
};

export default About;
