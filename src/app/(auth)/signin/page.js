import Image from "next/image"

const page = () => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto flex flex-col items-center justify-center">
      <div className="max-w-sm w-full bg-cs200 p-8 rounded-xl shadow-lg">
        <form className="">
          <h2 className="text-3xl font-bold mb-10  text-center text-white">
            Welcome Back!
          </h2>

          <div className="mb-4">
            <label
              for="email"
              className="block text-cs600 text-sm font-regular mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email id"
              className="w-full h-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-cp200"
            />
          </div>

          <div className="mb-6">
            <label
              for="password"
              className="block text-cs600 text-sm font-regular mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full h-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-cp200 mb-2"
            />
            <label
              for="password"
              className="block text-cs600 text-xs text-right font-regular mb-2">
              Forgot Password?
            </label>
          </div>

          <button className="w-full bg-cp100 text-white font-semibold py-2 rounded-lg mb-4">
            Login
          </button>
        </form>
        <button className="flex items-center justify-center gap-2 w-full text-white py-2 font-semibold rounded-lg border border-cp200 mb-4">
          Login with Mobile
        </button>
        <button className="flex items-center justify-center gap-2 w-full text-white py-2 font-semibold rounded-lg border border-cp200 mb-4">
          <Image src="/google-logo.png" width={20} height={20} alt="" />
          Login with Google
        </button>
        <div className=" text-xs text-white text-center">
          Don't have an account?{" "}
          <a href="" className="opacity-100 font-semibold text-cp200">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
