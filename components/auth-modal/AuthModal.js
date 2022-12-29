import { useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useForm } from "@mantine/form";
import { mutate } from "swr";

import { authenticate } from "../../utils/auth-handler";
import { showNotification } from "@mantine/notifications";
import { closeAllModals } from "@mantine/modals";

export default function AuthModal({ closeModal }) {
  const { supabaseClient } = useSessionContext();

  const [type, setType] = useState("login");
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const isFormInvalid = !!form.errors.email || !!form.errors.password;

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const email = form.values.email;
      const password = form.values.password;

      await authenticate({
        supabaseClient,
        method: type,
        email,
        password,
      });

      // Update the user's profile
      mutate("/api/user");

      // Close the modal
      closeModal();
    } catch (error) {
      showNotification({
        title: "Error",
        message: "Invalid email or password.",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

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
        <label className="text-lg font-bold" for="email">
          Email{" "}
        </label>
        <input
          id="email"
          placeholder="Enter email"
          className={`w-full border-2 rounded-lg p-3 focus:outline-none ${
            type === "reset_password"
              ? "cursor-not-allowed"
              : "border-[#d9b050]"
          } transition`}
          disabled={type === "reset_password"}
          value={form.values.email}
          onChange={(event) =>
            form.setFieldValue("email", event.currentTarget.value)
          }
        />

        {type === "reset_password" || (
          <>
            <label className="text-lg font-bold" for="password">
              Password{" "}
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full border-2 border-[#d9b050] rounded-lg p-3 focus:outline-none"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
            />
          </>
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
            onClick={handleAuth}
            disabled={type === "reset_password" || isFormInvalid}
          >
            {type === "login"
              ? loading
                ? "Logging in..."
                : "login"
              : type === "signup"
              ? loading
                ? "Creating account..."
                : "create account"
              : "coming soon"}
          </button>
        </div>

        <div className="text-center italic">
          {type === "login" ? (
            <div className="mt-2 flex flex-col justify-center items-center">
              <div onClick={() => setType("signup")} className="cursor-pointer">
                Not on YirrLab yet?{" "}
                <span className="not-italic font-semibold">
                  Create an account
                </span>
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
              <span className="not-italic font-semibold">Login</span>
            </div>
          ) : (
            <div
              onClick={() => setType("login")}
              className="cursor-pointer not-italic"
            >
              Back to <span className="font-semibold">Login</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
