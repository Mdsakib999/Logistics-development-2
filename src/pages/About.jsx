import bannerImage from "../assets/about.jpg";
import CompanyHistory from "../components/About/CompanyHistory";
import Highlights from "../components/About/Highlights";
import NewsLetter from "../components/About/NewsLetter";
import OurStory from "../components/About/OurStory";
import Banner from "../components/Shared/Banner";

const About = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        title={"About Us"}
        paragraph={
          "We’re a dedicated team driven by a passion for ensuring goods are moved swiftly, securely, and efficiently across the globe. With years of hands-on experience in the logistics industry, our focus lies in delivering consistently reliable services, leveraging cutting-edge technologies, and crafting tailored solutions for each client. We don’t just transport shipments—we build lasting trust, one delivery at a time."
        }
        buttonText={"Join Us"}
      />
      <OurStory />
      <CompanyHistory />
      <Highlights />
      <NewsLetter />
    </div>
  );
};

export default About;
