import bannerImage from "../assets/about.jpg";
import CompanyHistory from "../components/About/CompanyHistory";
// import Highlights from "../components/About/Highlights";
// import NewsLetter from "../components/About/NewsLetter";
import OurStory from "../components/About/OurStory";
import Banner from "../components/Shared/Banner";

const About = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        title={"Über uns"}
        paragraph={
          "Spedition Bernhard GmbH steht für ganzheitliche Transportdienstleistungen in Europa. Unser Schwerpunkt liegt auf Luft- und Seefracht, wobei wir für reibungslose Abläufe, sichere Warenbewegungen und termingerechte Anlieferungen sorgen. Mit einem engagierten Team und einer flexiblen Serviceorientierung gestalten wir die europäische Logistik einfach, verlässlich und kundenfreundlich."
        }
        buttonText={"Jetzt Kontakt aufnehmen"}
      />
      <OurStory />
      <CompanyHistory />
      {/* <Highlights /> */}
      {/* <NewsLetter /> */}
    </div>
  );
};

export default About;
