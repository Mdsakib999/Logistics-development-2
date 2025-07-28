import bannerImage from "../assets/contact.webp";
import ContactForm from "../components/contact/ContactForm";
import InfoSection from "../components/contact/InfoSection";
import Banner from "../components/Shared/Banner";

const Contact = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        title={"Contact Us"}
        paragraph={
          "We’d love to hear from you! Whether you have a question, need support, or simply want to share your thoughts, our team is here and ready to assist. Your inquiries are important to us, and we’re committed to responding promptly and helping you every step of the way."
        }
        buttonText={"Get in touch"}
      />
      <InfoSection />
      <ContactForm />
    </div>
  );
};

export default Contact;
