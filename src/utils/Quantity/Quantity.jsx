import PropTypes from "prop-types";
import "./Quantity.css";

function Quantity({
  quantity,
  handleIncrement,
  handleDecrement,
  handleChange,
}) {
  return (
    <div>
      <div className="custom-number-input h-10 w-32">
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            onClick={() => handleDecrement()}
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">{"−"}</span>
          </button>
          <input
            onChange={handleChange}
            type="number"
            className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
            name="custom-input-number"
            value={quantity}
          ></input>
          <button
            onClick={() => handleIncrement()}
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Quantity.propTypes = {
  quantity: PropTypes.number,
  handleDecrement: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleChange: PropTypes.func,
};

export default Quantity;
