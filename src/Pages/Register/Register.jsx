import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="w-full md:w-2/3 lg:w-1/3 mx-auto">
        <div className="py-24">
          <div className="flex-col">
            <div className="mb-10">
              <h1 className="text-5xl font-bold text-center text-white">
                Register now!
              </h1>
            </div>
            <div
              className="flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-xl"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="card-body">
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <span className="text-sm link link-hover text-[#202020]">
                        Already have a account?
                      </span>
                      <button
                        type="button"
                        className="py-1.5 px-4 border ms-1 rounded-lg bg-gradient-to-r from-[#ff2259] to-[#ff6339] text-white"
                      >
                        <Link to="/login">Login</Link>
                      </button>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="text-xl font-bold md:text-xl py-4 px-8 md:px-10 text-white bg-gradient-to-r from-[#ff6339] to-[#ff2259] rounded"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-6 w-full md:w-1/2 mx-auto py-4 px-6 rounded-lg border-2 border-[#ff2259d7] cursor-pointer font-bold md:text-xl text-white hover:bg-gradient-to-r from-[#ff2259b0] to-[#ff6439b4] hover:border-transparent">
              <FcGoogle className="text-2xl" />
              <button className="text-lg">Sign in With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
