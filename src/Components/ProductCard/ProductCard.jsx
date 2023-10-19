import PropTypes from "prop-types";
import Rating from "../../utils/Rating/Rating";

const ProductCard = ({ product, update }) => {
  const { title, category, price, thumbnail, image, rating } = product;

  return (
    <div className="space-y-3 shadow-md rounded py-6 flex flex-col">
      <div className="h-64 bg-white flex justify-center items-center rounded-md overflow-hidden">
        <img
          className="max-h-full max-w-full hover:scale-125 duration-300"
          src={thumbnail ? thumbnail : image}
          alt={title}
        />
      </div>
      <div className="flex-grow flex flex-col space-y-2">
        <h4 className="text-xl font-semibold text-slate-100">
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </h4>
        <p className="text-base text-bold text-slate-200">
          Category: {category}
        </p>
        <p className="text-base text-bold text-slate-200">
          Price: ${((parseInt(price) * 100) / 100).toFixed(2)}
        </p>
        <p className="text-base text-medium text-slate-200">
          <Rating rating={rating} />
        </p>
        <div className="flex-grow"></div>
        <div
          className={`buttons flex ${update && "justify-between"} items-center`}
        >
          <button
            className={`btn btn-neutral ${update ? "w-auto" : "w-full"}`}
            type="button"
          >
            Details
          </button>
          {update && (
            <button className="btn btn-accent" type="button">
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  update: PropTypes.bool,
};

export default ProductCard;
