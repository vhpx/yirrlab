import { useState } from "react";

export default function AuthModal() {
  const [type, setType] = useState("login");

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center font-bold text-4xl">
        {type === "login"
          ? "Welcome back"
          : type === "signup"
          ? "Create an account"
          : "Reset your password"}
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <label className="text-lg font-bold" for="email">
            Email{" "}
          </label>
          <input
            id="email"
            placeholder="Enter email"
            className={`w-full border-2 rounded-lg p-3 focus:outline-none ${
              type === "reset_password" ? "" : "border-[#d9b050]"
            } transition`}
            disabled={type === "reset_password"}
          />
        </div>

        {type === "reset_password" || (
          <div>
            <label className="text-lg font-bold" for="password">
              Password{" "}
            </label>
            <input
              id="password"
              placeholder="Enter password"
              className="w-full border-2 border-[#d9b050] rounded-lg p-3 focus:outline-none"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-center">
          <button
            className={`text-white capitalize text-xl font-bold rounded-lg p-2 w-full ${
              type === "reset_password"
                ? "bg-zinc-300/70 text-zinc-600/30 cursor-not-allowed"
                : "bg-[#d9b050]"
            }`}
          >
            {type === "login"
              ? "Log in"
              : type === "signup"
              ? "create account"
              : "coming soon"}
          </button>
        </div>

        <div className="text-center italic">
          {type === "login" ? (
            <div className="mt-2 flex flex-col justify-center items-center">
              <div onClick={() => setType("signup")} className="cursor-pointer">
                Not on YirrLab yet?{" "}
                <span className="not-italic font-semibold">Sign up</span>
              </div>
              <div
                onClick={() => setType("reset_password")}
                className="font-semibold not-italic mt-1 w-fit cursor-pointer"
              >
                Forgot password?
              </div>
            </div>
          ) : type === "signup" ? (
            <div onClick={() => setType("login")} className="cursor-pointer">
              Already on YirrLab?{" "}
              <span className="not-italic font-semibold">Log in</span>
            </div>
          ) : (
            <div
              onClick={() => setType("login")}
              className="cursor-pointer not-italic"
            >
              Back to <span className="font-semibold">Log in</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
