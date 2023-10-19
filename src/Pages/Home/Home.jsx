import { Carousel } from "react-responsive-carousel";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Home.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import { Link } from "react-router-dom";

function Home() {
  const { isLoading } = useContext(AuthContext);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/trending")
      .then((res) => res.json())
      .then((data) => {
        setTrendingProducts(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrands(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="max-w-7xl xl:mx-auto my-6">
      {isLoading && <LoadingSpinner />}
      <header className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="carousel md:col-span-3 row-span-2">
          <Carousel autoPlay infiniteLoop showThumbs={false} className="w-full">
            <div className="item1">
              <div className="img1 xl:rounded-lg rounded-s-none flex justify-start px-10 py-24 w-full h-full">
                <div className="content w-full md:w-2/3 lg:w-1/2 min-h-[30vh] text-left space-y-6">
                  <h1 className="text-5xl font-bold text-white">
                    Motorola Edge Phone
                  </h1>
                  <p className="text-xl font-normal text-white">
                    Mobile phone technology has advanced rapidly over the years,
                    with various
                  </p>
                  <button
                    type="button"
                    className="bg-white text-slate-900 py-3 px-6 font-medium text-lg flex items-center gap-2 rounded-lg"
                  >
                    Shop now
                    <span>
                      <HiOutlineArrowNarrowRight />{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="item2">
              <div className="img2 xl:rounded-lg rounded-s-none flex justify-start px-10 py-24 w-full">
                <div className="content w-full md:w-2/3 lg:w-1/2 min-h-[30vh] text-left space-y-4">
                  <h1 className="text-5xl font-bold text-white">
                    Galaxy Folding Phones
                  </h1>
                  <p className="text-xl font-normal text-white">
                    Which can vary depending on the brand and model electronic
                    device.
                  </p>
                  <button
                    type="button"
                    className="bg-white text-slate-900 py-3 px-6 font-medium text-lg flex items-center gap-2 rounded-lg"
                  >
                    Shop now
                    <span>
                      <HiOutlineArrowNarrowRight />{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="item3">
              <div className="img3 xl:rounded-lg rounded-s-none flex justify-start px-10 py-24 w-full">
                <div className="content w-full md:w-2/3 lg:w-1/2 min-h-[30vh] text-left space-y-4">
                  <h1 className="text-5xl font-bold text-white">
                    Modern Mobile Phones
                  </h1>
                  <p className="text-xl font-normal text-white">
                    Mobile phone technology has advanced rapidly over the years,
                    with various
                  </p>
                  <button
                    type="button"
                    className="bg-white text-slate-900 py-3 px-6 font-medium text-lg flex items-center gap-2 rounded-lg"
                  >
                    Shop now
                    <span>
                      <HiOutlineArrowNarrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="right md:col-span-3 lg:col-span-1 flex flex-wrap md:flex-nowrap lg:flex-col gap-12 w-full">
          <div className="right1 px-4 py-6 min-h-[23vh] rounded-md w-full">
            <h3 className="text-xl font-semibold text-white">
              Special Discount
            </h3>
            <p className="text-base text-white font-semibold">UP TO 50% OFF</p>
            <button className="underline text-white text-base">Shop Now</button>
          </div>
          <div className="right2 px-4 py-6 min-h-[23vh] rounded-md w-full">
            <h3 className="text-xl font-semibold text-white">Hot Deals</h3>
            <p className="text-base text-white font-semibold">UP TO 30% OFF</p>
            <button className="underline text-white text-base">Shop Now</button>
          </div>
        </div>
      </header>
      <div className="trending my-6 md:my-10 px-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-6">
          Trending Products
        </h2>
        <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trendingProducts.length > 10 &&
            trendingProducts
              .slice(0, 10)
              ?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
        </div>
      </div>
      <div className="brands py-6 md:py-10 px-6">
        <h2 className="text-3xl uppercase font-bold text-slate-100 mb-6">
          Brands
        </h2>
        <div className="icons grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {brands?.map((brand) => (
            <Link to={`/products/brand/${brand.name}`}>
              <div
                key={brand._id}
                className="h-32 p-2 bg-white flex flex-col justify-center items-center rounded"
              >
                <img
                  className="max-w-full max-h-full h-3/4 overflow-hidden"
                  src={brand.image}
                  alt={brand.name}
                />
                <h3 className="text-xl font-bold text-slate-900 overflow-hidden">
                  {brand.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

const ProductCard = ({ product }) => {
  const { title, price, image, rating, stock } = product;

  return (
    <div className="space-y-3 shadow-md rounded py-6">
      <div className="h-64 bg-white flex justify-center items-center p-6 rounded-md">
        <img className="max-h-full max-w-full" src={image} alt={title} />
      </div>
      <div className="flex flex-col space-y-2">
        <h4 className="text-lg font-semibold text-slate-100">
          {title.slice(0, 20)}
          {"..."}
        </h4>

        <p className="text-lg text-bold text-slate-200">
          Price: ${((parseInt(price) * 100) / 100).toFixed(2)}
        </p>
        <p className="text-base text-medium text-slate-200">
          Rating: {rating?.rate}, Review: {rating?.count}
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
