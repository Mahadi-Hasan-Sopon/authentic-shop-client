import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

function Rating({ rating }) {
  const { rate, count } = rating;
  //   const normalizeRating = Math.min(5, Math.max(0, rate));
  //   const stars = Array.from({ length: 5 }, (_, index) => (
  //     <FaStar
  //       key={index}
  //       color={index < normalizeRating ? "gold" : "gray"}
  //       size={22}
  //     />
  //   ));
  const maxStars = 5;
  const starPercentage = (rate / maxStars) * 100;
  const filledStars = Math.floor(starPercentage / 20); // Each star represents 20%.
  const lastStarFill = (starPercentage % 20) / 20; // Calculate the fill percentage for the last star.

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<FaStar key={i} color="gold" size={24} />);
  }

  if (lastStarFill > 0) {
    stars.push(
      <FaStar
        key={filledStars}
        color="gold"
        size={24}
        style={{ clipPath: `inset(0 ${100 - lastStarFill * 100}% 0 0 )` }}
      />
    );
  }

  const emptyStars = maxStars - stars.length;

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaStar key={`empty-${i}`} color="gray" size={24} />);
  }
  return (
    <div className="star-rating flex">
      {stars} <span className="ms-2">{count} review</span>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.object.isRequired,
};

export default Rating;
