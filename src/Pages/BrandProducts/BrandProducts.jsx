import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";

function BrandProducts() {
  const { isLoading } = useContext(AuthContext);
  const loadedBrandProducts = useLoaderData();
  const params = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="max-w-7xl lg:mx-auto px-6">
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
        <div className="flex flex-col mx-auto justify-center items-center my-10">
          <h2 className="text-3xl font-bold dark:text-slate-100 text-slate-800 mb-6">
            {params.brandName} Brand Products
          </h2>

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
