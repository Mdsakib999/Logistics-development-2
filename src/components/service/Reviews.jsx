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
    authorDesignation: "CEO & Founder",
    authorComment:
      "Shipping TNC provided exceptional service. Their attention to detail and reliability made them our go-to logistics partner.",
  },
  {
    authorImage: authorImage,
    authorName: "John Doe",
    authorDesignation: "Business Owner",
    authorComment:
      "Very professional team, shipment was delivered on time. Highly recommend Shipping TNC!",
  },
  {
    authorImage: authorImage,
    authorName: "Alice Smith",
    authorDesignation: "Entrepreneur",
    authorComment:
      "Super smooth experience. Their tracking system kept me updated and stress-free.",
  },
  {
    authorImage: authorImage,
    authorName: "Michael Johnson",
    authorDesignation: "Operations Manager",
    authorComment:
      "Outstanding logistics support! They handled our international shipments. Communication was good throughout the process.",
  },
  {
    authorImage: authorImage,
    authorName: "Sarah Williams",
    authorDesignation: "E-commerce Director",
    authorComment:
      "Best shipping partner we've worked with. Fast, reliable, and cost-effective solutions for our business needs.",
  },
  {
    authorImage: authorImage,
    authorName: "David Brown",
    authorDesignation: "Supply Chain Head",
    authorComment:
      "Impressed by their technology integration and real-time tracking capabilities. Made our logistics management seamless and efficient.",
  },
  {
    authorImage: authorImage,
    authorName: "Emma Davis",
    authorDesignation: "Retail Manager",
    authorComment:
      "Consistent quality service every time. Their team goes above and beyond to ensure customer satisfaction.",
  },
  {
    authorImage: authorImage,
    authorName: "Robert Miller",
    authorDesignation: "Import/Export Specialist",
    authorComment:
      "Professional handling of complex shipments. Their expertise in customs and documentation saved us time and money.",
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
            Reviews
          </span>
        </div>
      </div>

      <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-14">
        What Users <span className="text-[#0778D4]">Think About Us</span>
      </p>

      {/* Swiper Container */}
      <div className="pb-32">
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
