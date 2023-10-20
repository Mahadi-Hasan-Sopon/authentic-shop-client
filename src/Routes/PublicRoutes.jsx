import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyCart from "../Pages/MyCart/MyCart";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../utils/Error/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/new",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <MyCart />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/product/details/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/product/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/products/brand/:brandName",
        element: <BrandProducts />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brand/${params.brandName}`),
      },
    ],
  },
]);

export default routes;
