import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import authorImage from "../../assets/user.jpeg";
import ReviewCard from "./ReviewCard";

const AllReviews = [
  {
    authorImage: authorImage,
    authorName: "Jane Cooper",
    authorDesignation: "CEO & Gründer",
    authorComment:
      "Seit wir mit Swift Cargo arbeiten, laufen unsere Lieferketten reibungslos – pünktlich und zuverlässig wie nie zuvor.",
  },
  {
    authorImage: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png',
    authorName: "John Doe",
    authorDesignation: "Geschäftsinhaber",
    authorComment:
      "Seit wir mit Swift Cargo arbeiten, laufen unsere Lieferketten reibungslos – pünktlich und zuverlässig wie nie zuvor.",
  },
  {
    authorImage: 'https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg',
    authorName: "Alice Smith",
    authorDesignation: "Unternehmer",
    authorComment:
      "Die Sendungsverfolgung in Echtzeit gibt uns jederzeit volle Transparenz. Ein Service, auf den wir uns verlassen können.",
  },
  {
    authorImage: "https://img.freepik.com/premium-photo/portrait-smiling-young-man-looking-camera_33839-1731.jpg",
    authorName: "Michael Johnson",
    authorDesignation: "Betriebsleiter",
    authorComment:
      "Hervorragender Kundensupport – rund um die Uhr erreichbar und immer lösungsorientiert.",
  },
  {
    authorImage: 'https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    authorName: "Sarah Williams",
    authorDesignation: "E-commerce MD",
    authorComment:
      "Unsere sensiblen Waren sind bei Swift Cargo bestens geschützt. Sicherheit steht hier wirklich an erster Stelle.",
  },
  {
    authorImage: 'https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg',
    authorName: "David Brown",
    authorDesignation: "Versorgungskopf",
    authorComment:
      "Mit den maßgeschneiderten Logistiklösungen sparen wir Zeit und Kosten – ideal für unser wachsendes Unternehmen.",
  },
  {
    authorImage: authorImage,
    authorName: "Emma Davis",
    authorDesignation: "Einzelhandelsmanager",
    authorComment:
      "Von Standardfracht bis hin zu Gefahrgut – Swift Cargo hat für jede unserer Anforderungen die passende Lösung.",
  },
  {
    authorImage: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
    authorName: "Robert Miller",
    authorDesignation: "Md, QS Tech",
    authorComment:
      "Professionelle Abwicklung komplexer Sendungen. Ihre Expertise in Zoll und Dokumentation hat uns Zeit und Geld gespart.",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto text-center my-20 px-4">
      {/* Section title */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
            Rezension
          </span>
        </div>
      </div>

      <p className="text-2xl md:text-4xl max-w-sm w-full mx-auto font-bold mb-14">
        Was Benutzer über  <span className="text-[#0778D4]">uns denken</span>
      </p>

      {/* Swiper Container */}
      <div className="pb-10 md:pb-16">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{
            "--swiper-pagination-top": "auto",
            "--swiper-pagination-bottom": "-40px",
          }}
        >
          {AllReviews.map((review, index) => (
            <SwiperSlide key={index} className="flex h-auto">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
