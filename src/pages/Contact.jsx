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
          "We’d love to hear from you! Whether you have a question, need assistance, or want to share feedback, feel free to reach out. Our team is here to help and will get back to you as soon as possible."
        }
        buttonText={"Get in touch"}
      />
      <InfoSection />
      <ContactForm />
    </div>
  );
};

export default Contact;
