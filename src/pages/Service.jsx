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
        title={"Intelligente Logistik sorgt für schnelle Lieferungen und weltweite Reichweite."}
        paragraph={
          "Wir liefern intelligente Logistik für Ihr Unternehmen. Von zuverlässigem Versand und sicherer Handhabung bis hin zur weltweiten Reichweite sorgen wir dafür, dass Ihre Waren jedes Mal pünktlich ankommen."
        }
        buttonText={"unsere Dienstleistungen"}
      />
      <Delivery />
      <OurProcess />
      <Sustainability />
      {/* <Industries /> */}
      {/* <ServiceFeatures /> */}
      {/* <Reviews /> */}
    </div>
  );
};

export default Service;
