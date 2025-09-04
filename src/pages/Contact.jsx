import bannerImage from "../assets/contact.webp";
import ContactForm from "../components/contact/ContactForm";
import InfoSection from "../components/contact/InfoSection";
import Banner from "../components/Shared/Banner";

const Contact = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        title={"Kontaktieren Sie uns für weitere Informationen"}
        paragraph={
          "Wir freuen uns, von Ihnen zu hören! Ob Sie eine Frage haben, Unterstützung benötigen oder einfach nur Ihre Meinung mitteilen möchten – unser Team ist für Sie da und hilft Ihnen gerne weiter. Ihre Anfragen sind uns wichtig, und wir bemühen uns, schnell zu antworten und Sie bei jedem Schritt zu unterstützen."
        }
        buttonText={"Nehmen Sie Kontakt auf"}
      />
      <InfoSection />
      <ContactForm />
    </div>
  );
};

export default Contact;
