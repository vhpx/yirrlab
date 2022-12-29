import { useState } from "react";

export default function AuthModal() {
  const [type, setType] = useState("login");

  const loginHandler = () => {
    setType("login");
  };

  const signupHandler = () => {
    setType("signup");
  };

  const resetPasswordHandler = () => {
    setType("resetPassword");
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="text-center font-bold text-4xl">
        {type === "login"
          ? "Welcome back"
          : type === "signup"
          ? "Create an account"
          : "Reser your password"}
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-lg" for="email">
            Email{" "}
          </label>
          <input
            id="email"
            placeholder="user@email.com"
            className="w-full border-2 border-[#d9b050] rounded-lg p-3 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-lg" for="password">
            Password{" "}
          </label>
          <input
            id="password"
            placeholder="Enter password"
            className="w-full border-2 border-[#d9b050] rounded-lg p-3 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-center">
          <button className="bg-[#d9b050] text-white uppercase text-xl font-bold rounded-lg p-3 w-full">
            {type === "login"
              ? "Log in"
              : type === "signup"
              ? "create account"
              : "recover"}
          </button>
        </div>

        <div className="text-center italic">
          {type === "login" ? (
            <div className="mt-2">
              <div onClick={signupHandler} className="hover:cursor-pointer">
                Not on YirrLab yet?{" "}
                <span className="font-semibold">Sign up</span>
              </div>
              <div
                onClick={resetPasswordHandler}
                className="font-semibold mt-1 hover:cursor-pointer"
              >
                Forgot password?
              </div>
            </div>
          ) : type === "signup" ? (
            <div onClick={loginHandler} className="hover:cursor-pointer">
              Already on YirrLab? <span className="font-semibold">Log in</span>
            </div>
          ) : (
            <div onClick={loginHandler} className="hover:cursor-pointer">
              Back to <span className="font-semibold">Log in</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
