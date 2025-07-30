import authorImage from "../../assets/user.jpeg";
import ReviewCard from "./ReviewCard";

const AllReviews = [
  {
    authorImage: authorImage,
    authorName: "Jane Cooper",
    authorDesignation: "Ceo & Founder",
    authorComment:
      "Shipping TNC provided exceptioal service, ensuring our fragile items arrived intact and on time. Their attention to detail and reliability made them our go-to logistics partner.",
  },
  {
    authorImage: authorImage,
    authorName: "Jane Cooper",
    authorDesignation: "Ceo & Founder",
    authorComment:
      "Shipping TNC provided exceptional service, ensuring our fragile items arrived intact and on time. Their attention to detail and reliability made them our go-to logistics partner.",
  },
  {
    authorImage: authorImage,
    authorName: "Jane Cooper",
    authorDesignation: "Ceo & Founder",
    authorComment:
      "Shipping TNC provided exceptional service, ensuring our fragile items arrived intact and on time. Their attention to detail and reliability made them our go-to logistics partner.",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto text-center my-20">
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
            Reviews
          </span>
        </div>
      </div>

      <p className="text-3xl font-bold mb-10 mt-3">
        What Users <span className="text-[#0778D4]">Think About Us</span>
      </p>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {AllReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
