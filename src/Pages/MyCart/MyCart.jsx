import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function MyCart() {
  const loadedCartProducts = useLoaderData();
  const [cartItems, setCartItems] = useState(loadedCartProducts);

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Product Deleted Successfully");
          const remainingProducts = cartItems.filter((item) => item._id !== id);
          setCartItems(remainingProducts);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-7xl lg:mx-auto px-6 my-10 min-h-[40vh]">
      <h1 className="text-5xl font-bold text-center dark:text-slate-100 text-slate-700">
        My Cart
      </h1>
      <ToastContainer autoClose={1500} />
      {cartItems.length < 1 && (
        <div className="w-full h-full flex flex-col justify-center items-center space-y-6 my-16">
          <h1 className="text-4xl font-bold text-red-400">
            No, Product in Cart !
          </h1>
          <p className="text-xl font-medium dark:text-slate-200 text-slate-500">
            add product to see list
          </p>

          <button className="btn btn-info dark:text-slate-200 text-slate-500 text-lg font-semibold">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="my-6">
          <div className="overflow-x-auto">
            <table className="table dark:text-slate-200 text-slate-500">
              <thead>
                <tr>
                  <th className="dark:text-slate-300 text-slate-500">Serial</th>
                  <th className="dark:text-slate-300 text-slate-500">Image</th>
                  <th className="dark:text-slate-300 text-slate-500">Title</th>
                  <th className="dark:text-slate-300 text-slate-500">
                    Quantity
                  </th>
                  <th className="dark:text-slate-300 text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((product, index) => (
                  <tr
                    key={product._id}
                    className="cursor-pointer hover:bg-slate-700 hover:text-slate-200 rounded"
                  >
                    <th className="text-lg"> {index + 1}</th>
                    <td className="h-28 min-w-[100px]">
                      <img
                        className="h-full rounded"
                        src={product?.image ? product.image : product.thumbnail}
                        alt=""
                      />
                    </td>
                    <td className="text-lg font-medium min-w-[200px]">
                      {product.title}
                    </td>
                    <td className="text-lg"> {product.quantity} </td>
                    <td onClick={() => handleDeleteClick(product._id)}>
                      <MdDeleteForever className="text-2xl hover:text-pink-600" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCart;
