import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const { registerWithEmailPassword, loginWithGoogle, isLoading } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // eslint-disable-next-line no-useless-escape
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      toast.error("Please Provide valid Email");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password)) {
      toast.error(
        "Password must be 6 character long, with at least one uppercase letter and one special character"
      );
      return;
    }

    registerWithEmailPassword(email, password)
      .then((response) => {
        toast.success("Registration Successful");
        console.log(response.user);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  const handleGoogleLoginClick = () => {
    loginWithGoogle()
      .then((result) => {
        toast.success("user logged in successfully");
        console.log(result.user);
      })
      .catch((error) => {
        toast.error(error?.message);
        console.log(error);
      });
  };

  return (
    <div>
      {isLoading && "Loading......"}
      <ToastContainer autoClose={2500} />
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
                <form onSubmit={handleRegister}>
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
            <div
              onClick={handleGoogleLoginClick}
              className="flex justify-center items-center gap-4 mt-6 w-full md:max-lg:w-1/2 mx-auto py-4 px-6 rounded-lg border-2 border-[#ff2259d7] cursor-pointer font-bold md:text-xl text-slate-800 hover:bg-gradient-to-r from-[#ff2259b0] to-[#ff6439b4] hover:border-transparent"
            >
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
