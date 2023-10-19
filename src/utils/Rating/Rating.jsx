import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

function Rating({ rating }) {
  const { rate, count } = rating;

  const fillPercentage = (rate / 5) * 100;

  // Create an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={
        index < fillPercentage / 20 ? "text-yellow-400" : "text-gray-200"
      }
    >
      <FaStar />
    </span>
  ));

  return (
    <div className="star-rating flex items-center text-base">
      {stars} <span className="ms-2">{count} review</span>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.object.isRequired,
};

export default Rating;
