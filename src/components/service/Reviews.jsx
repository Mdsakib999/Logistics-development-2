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
      <h1 className="text-2xl font-semibold">Reviews</h1>
      <p className="text-3xl font-bold mb-10 mt-3">What Users think about us</p>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {AllReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
