import bannerImage from "../assets/home.jpeg";
import AboutUs from "../components/Home/AboutUs";
import Blog from "../components/Home/Blog";
import Faq from "../components/Home/Faq";
import Features from "../components/Home/Features";
import LogisticsOption from "../components/Home/LogisticsOption";
import OurMission from "../components/Home/OurMission";
import Solutions from "../components/Home/Solutions";
import Support from "../components/Home/Support";
import Reviews from "../components/service/Reviews";
import Banner from "../components/Shared/Banner";

const Home = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        title={"Logistik neu gedacht: flexibel, zuverlässig, individuell. Weil jede Fracht ihre eigene Lösung verdient."}
        paragraph={
          "Wir bieten nahtlose, zuverlässige und ganzheitliche Logistiklösungen, die individuell auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind – für reibungslose Abläufe, pünktliche Lieferungen und nachhaltigen Erfolg in einem dynamischen globalen Markt."
        }
        buttonText={"Mehr erfahren"}
      />
      <Features />
      <AboutUs />
      <OurMission />
      {/* <Blog /> */}
      {/* <Solutions /> */}
      {/* <LogisticsOption /> */}
      <Support />
      <Faq />
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
