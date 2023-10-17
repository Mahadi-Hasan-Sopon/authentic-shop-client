function AddProduct() {
  return (
    <div className="max-w-7xl xl:mx-auto">
      <h1 className="text-3xl my-8 text-slate-800 dark:text-slate-5100 font-bold text-center">
        Add Product
      </h1>
      <form className="space-y-6 bg-base-200 p-6">
        <div className="row sm:flex gap-6">
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold text-opacity-80">
              <span className="label-text dark:text-slate-200">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
              required
            />
          </div>
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter product category"
              className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
            />
          </div>
        </div>
        <div className="row sm:flex gap-6">
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="850"
              className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
            />
          </div>
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
            />
          </div>
        </div>
        <div className="row sm:flex gap-6">
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Enter rating"
              className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
            />
          </div>
          <div className="form-control flex flex-col gap-4 w-full">
            <label className="label text-xl font-semibold text-secondaryBlack text-opacity-80">
              <span className="label-text">Short Details</span>
            </label>
            <input
              type="text"
              name="short-details"
              placeholder="Enter product short details"
              className="input rounded p-3 placeholder:text-secondaryBlack placeholder:text-opacity-60"
            />
          </div>
        </div>
        <div className="row sm:flex gap-6">
          <div className="form-control flex flex-col gap-4 w-full">
            <button className="text-primaryNut text-2xl font-medium text-center py-3 bg-stone-200 hover:bg-base-100 rounded">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
