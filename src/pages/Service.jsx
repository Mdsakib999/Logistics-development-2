import bannerImage from "../assets/services.png";
import Delivery from "../components/service/Delivery";
import Industries from "../components/service/Industries";
import OurProcess from "../components/service/OurProcess";
import Reviews from "../components/service/Reviews";
import ServiceFeatures from "../components/service/ServiceFeatures";
import Sustainability from "../components/service/Sustainability";
import Banner from "../components/Shared/Banner";

const Service = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        title={"Smart logistics ensuring fast deliveries & global reach"}
        paragraph={
          "We provide smart logistics solutions that keep your business moving. From fast shipping to secure handling and global coverage, our services ensure your goods reach their destination safely and on time."
        }
        buttonText={"Our Services"}
      />
      <Delivery />
      <OurProcess />
      <Sustainability />
      <Industries />
      {/* <ServiceFeatures /> */}
      {/* <Reviews /> */}
    </div>
  );
};

export default Service;
