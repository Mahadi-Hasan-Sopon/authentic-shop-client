import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

function BrandProducts() {
  const loadedBrandProducts = useLoaderData();
  const params = useParams();

  console.log(loadedBrandProducts);
  return (
    <div className="max-w-7xl xl:mx-auto px-6">
      <h2 className="text-3xl font-bold text-slate-100 mb-6">
        {params.brandName} Brand Products
      </h2>
      <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {loadedBrandProducts?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BrandProducts;
