import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";
import { Carousel } from "react-responsive-carousel";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import "./BrandProducts.css";

function BrandProducts() {
  const { isLoading } = useContext(AuthContext);
  const loadedBrandProducts = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 30 });
  }, []);

  return (
    <div className="max-w-7xl lg:mx-auto px-6 my-10">
      <button
        className="btn dark:btn-neutral btn-outline"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      {isLoading && <LoadingSpinner />}
      {loadedBrandProducts.length < 1 ? (
        <div className="flex justify-center items-center flex-col my-20">
          <h2 className="text-5xl font-bold dark:text-white text-slate-700">
            Sorry, No Product Found!
          </h2>
          <img
            src="https://i.ibb.co/09NnrDb/product-is-empty-8044872-6430781.png"
            alt=""
          />
        </div>
      ) : (
        <div className="flex flex-col mx-auto justify-center items-center">
          <h2 className="text-3xl font-bold dark:text-slate-100 text-slate-800 mb-6">
            {params.brandName} Brand Products
          </h2>

          <div className="carousel mb-10">
            <Carousel
              autoPlay={false}
              infiniteLoop
              showThumbs={false}
              className="w-full"
            >
              <div className="item1">
                <div className="img1 xl:rounded-lg rounded-s-none flex justify-start px-10 py-24 w-full h-full">
                  <div className="content w-full md:w-2/3 lg:w-1/2 min-h-[30vh] text-left space-y-6">
                    <p className="text-xl font-medium text-orange-500 uppercase">
                      Genuine Machine
                    </p>
                    <h1 className="text-5xl font-bold text-white">
                      Household Electronics, <br />
                      New Products
                    </h1>
                    <p className="text-xl font-normal text-white">
                      100% satisfied customers
                    </p>
                    <button
                      type="button"
                      className="bg-white/80 dark:bg-slate-500 dark:text-white text-slate-900 py-3 px-6 font-medium text-lg flex items-center gap-2 rounded-lg"
                    >
                      Shop now
                      <span>
                        <HiOutlineArrowNarrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="item2">
                <div className="img2 xl:rounded-lg rounded-s-none flex justify-start px-10 py-24 w-full">
                  <div className="content w-full md:w-2/3 lg:w-1/2 min-h-[30vh] text-left space-y-4">
                    <p className="text-xl font-medium text-orange-500 uppercase">
                      More Intuitive
                    </p>
                    <h1 className="text-5xl font-bold text-white">
                      The Apple IPad 10th Generation
                    </h1>
                    <p className="text-xl font-normal text-white">
                      Colourfully reimagined to be more capable
                    </p>
                    <button
                      type="button"
                      className="bg-white/80 dark:bg-slate-500 dark:text-white text-slate-900 py-3 px-6 font-medium text-lg flex items-center gap-2 rounded-lg"
                    >
                      Shop now
                      <span>
                        <HiOutlineArrowNarrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="item3">
                <div className="img3 xl:rounded-lg rounded-s-none flex justify-start px-10 py-24 w-full">
                  <div className="content w-full md:w-2/3 lg:w-1/2 min-h-[30vh] text-left space-y-4">
                    <p className="text-xl font-medium text-orange-500 uppercase">
                      7 Color Backlighting
                    </p>
                    <h1 className="text-5xl font-bold text-white">
                      HERMES E2A Mechanical Keyboard + Mouse
                    </h1>
                    <p className="text-xl font-normal text-white">
                      Windows key Lock On/Off Indicator
                    </p>
                    <button
                      type="button"
                      className="bg-white/80 dark:bg-slate-500 dark:text-white text-slate-900 py-3 px-6 font-medium text-lg flex items-center gap-2 rounded-lg"
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

          <div className="products grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {loadedBrandProducts?.map((product) => (
              <ProductCard key={product._id} product={product} update={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BrandProducts;
