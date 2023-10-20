import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function UpdateProduct() {
  const loadProduct = useLoaderData();

  const {
    _id,
    title,
    description,
    image,
    thumbnail,
    price,
    rating,
    brand,
    category,
  } = loadProduct;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const product = {
      title,
      brand,
      category,
      price,
      image,
      rating: { rate: rating },
      description,
    };
    fetch(`http://localhost:5000/product/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true) {
          toast.success("Product Added Successfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error?.message);
      });
  };

  return (
    <div className="max-w-7xl xl:mx-auto px-6 my-10">
      <ToastContainer autoClose={1500} />
      <h1 className="text-3xl my-8 dark:text-slate-200 text-slate-700 font-bold text-center">
        Update Product
      </h1>
      <form
        onSubmit={handleUpdateProduct}
        className="space-y-6 dark:bg-base-200 bg-slate-200 p-6 rounded"
      >
        <div className="row sm:flex gap-6">
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold text-opacity-80">
              <span className="label-text dark:text-slate-200 text-slate-500">
                Name
              </span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Enter product name"
              className="input rounded bg-slate-100 dark:bg-base-300 dark:text-slate-400 text-slate-900 p-3 placeholder:text-opacity-60"
              required
            />
          </div>
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold text-opacity-80">
              <span className="label-text dark:text-slate-200 text-slate-500">
                Category
              </span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="e.g: monitor, laptop, smartphones, computer, storage, sound-system"
              className="input rounded bg-slate-100 dark:bg-base-300 dark:text-slate-400 text-slate-900 p-3 placeholder:text-opacity-60"
            />
          </div>
        </div>
        <div className="row sm:flex gap-6">
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold text-opacity-80">
              <span className="label-text dark:text-slate-200 text-slate-500">
                Brand
              </span>
            </label>
            <input
              type="text"
              name="brand"
              defaultValue={brand}
              placeholder="e.g: Acer, HP, Dell, Apple"
              className="input rounded bg-slate-100 dark:bg-base-300 dark:text-slate-400 text-slate-900 p-3 placeholder:text-opacity-60"
            />
          </div>
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold  text-opacity-80">
              <span className="label-text dark:text-slate-200 text-slate-500">
                Price
              </span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="850"
              className="input rounded bg-slate-100 dark:bg-base-300 dark:text-slate-400 text-slate-900 p-3 placeholder:text-opacity-60"
            />
          </div>
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold  text-opacity-80">
              <span className="label-text dark:text-slate-200 text-slate-500">
                Rating
              </span>
            </label>
            <input
              type="text"
              name="rating"
              defaultValue={rating?.rate}
              placeholder="Enter rating"
              className="input rounded bg-slate-100 dark:bg-base-300 dark:text-slate-400 text-slate-900 p-3 placeholder:text-opacity-60"
            />
          </div>
        </div>
        <div className="row sm:flex gap-6">
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold  text-opacity-80">
              <span className="label-text dark:text-slate-200 text-slate-500">
                Photo
              </span>
            </label>
            <input
              type="text"
              name="image"
              defaultValue={image ? image : thumbnail}
              placeholder="Enter photo URL"
              className="input rounded bg-slate-100 dark:bg-base-300 dark:text-slate-400 text-slate-900 p-3 placeholder:text-opacity-60"
            />
          </div>
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold  text-opacity-80">
              <span className="label-text dark:text-slate-200 text-slate-500">
                Short Description
              </span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Enter product short details"
              className="input rounded bg-slate-100 dark:bg-base-300 dark:text-slate-400 text-slate-900 p-3 placeholder:text-opacity-60"
            />
          </div>
        </div>
        <div className="row sm:flex gap-6 pt-4">
          <div className="form-control flex flex-col gap-4 w-full">
            <button className="text-slate-800 text-2xl font-bold text-center py-3 bg-slate-300 hover:bg-slate-800 hover:text-slate-200 rounded">
              Update Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
