import PropTypes from "prop-types";
import Rating from "../../utils/Rating/Rating";

const ProductCard = ({ product }) => {
  const { title, price, thumbnail, image, rating, stock } = product;

  return (
    <div className="space-y-3 shadow-md rounded py-6">
      <div className="h-64 bg-white flex justify-center items-center rounded-md overflow-hidden">
        <img
          className="max-h-full max-w-full hover:scale-125 duration-300"
          src={thumbnail ? thumbnail : image}
          alt={title}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h4 className="text-lg font-semibold text-slate-100">
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </h4>

        <p className="text-lg text-bold text-slate-200">
          Price: ${((parseInt(price) * 100) / 100).toFixed(2)}
        </p>
        <p className="text-base text-medium text-slate-200">
          {/* Rating: {rating?.rate}, Review: {rating?.count} */}
          <Rating rating={rating}/>
        </p>
        <p className="text-base text-medium text-teal-600">
          In stock {stock} Items.
        </p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
