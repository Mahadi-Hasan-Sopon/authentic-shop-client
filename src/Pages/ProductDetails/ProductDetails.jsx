import { useLoaderData, useNavigate } from "react-router-dom";
import Rating from "../../utils/Rating/Rating";
import Quantity from "../../utils/Quantity/Quantity";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const loadedProduct = useLoaderData();
  const [existingProduct, setExistingProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 50 });

    fetch("https://authentic-shop-backend.vercel.app/cart")
      .then((res) => res.json())
      .then((cartItems) => {
        // console.log(cartItems);
        setExistingProduct(cartItems);
      });
  }, []);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      toast.error("Quantity can not be below 1");
    }
  };

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);

    setQuantity(newQuantity);
  };

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity((prev) => prev + 1);
    } else {
      toast.error("Stock limit reached, can't buy more.");
    }
  };

  const {
    title,
    description,
    price,
    image,
    thumbnail,
    category,
    brand,
    rating,
    stock,
  } = loadedProduct;

  const cartProduct = { ...loadedProduct, quantity: parseInt(quantity) };

  const handleAddToCartClick = () => {
    const alreadyInCart = existingProduct?.filter(
      (product) => product._id === loadedProduct._id
    );
    console.log(alreadyInCart);
    if (alreadyInCart.length) {
      return toast.error("Product already in Cart.");
    }

    fetch("https://authentic-shop-backend.vercel.app/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true) {
          toast.success("Product successfully added to Cart.");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message);
      });
  };

  return (
    <div className="max-w-7xl lg:mx-auto p-6 my-10">
      <button
        className="btn dark:btn-neutral btn-outline"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div className="grid md:grid-cols-2 gap-10 mt-2">
        <div className="image w-full bg-white p-4 rounded">
          <img
            className="w-full h-full"
            src={thumbnail ? thumbnail : image}
            alt={title}
          />
        </div>
        <div className="content w-full space-y-4">
          <p className="text-base font-medium dark:text-slate-300 text-slate-500">
            Category: {category}
          </p>
          <p className="text-base font-medium dark:text-slate-300 text-slate-500">
            Brand: {brand}
          </p>
          <h1 className="text-3xl font-bold dark:text-slate-200 text-slate-600">
            {title}
          </h1>
          <p className="text-base font-medium dark:text-slate-300 text-slate-500">
            SKU: {loadedProduct?.id ? loadedProduct.id : loadedProduct?._id}
          </p>
          <Rating rating={rating} />
          <div className="price flex items-center gap-4">
            {loadedProduct?.oldPrice && (
              <h3 className="text-2xl font-bold text-red-500">
                <del>${loadedProduct.oldPrice}</del>
              </h3>
            )}
            <h3 className="text-2xl font-bold text-orange-400/95"> ${price}</h3>
          </div>
          <p className="text-base font-medium dark:text-slate-400 text-slate-500 pt-4">
            {description}
          </p>
          <div className="purchase py-6 flex items-center gap-6">
            <Quantity
              quantity={quantity}
              handleDecrement={handleDecrement}
              handleChange={handleChange}
              handleIncrement={handleIncrement}
            />
            <p className="text-lg font-bold text-orange-400/90">
              Only {stock - quantity} {stock > 1 ? "items" : "item"} in Stock!
            </p>
          </div>
          <div className="cart">
            <button
              onClick={handleAddToCartClick}
              className="w-full py-3 rounded-full border-2 border-orange-400/80 text-orange-400 hover:text-white hover:bg-orange-400/90 hover:border-transparent text-xl font-bold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1500} position="top-center" />
    </div>
  );
}

export default ProductDetails;
