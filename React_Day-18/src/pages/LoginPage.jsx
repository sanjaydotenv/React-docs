import React from "react";
import { AuthHook } from "../hook/useAuthHook";

const LoginPage = () => {
  const { navigate , register , handleSubmit , loginFormSubmit } = AuthHook();

  return (
    <div className="min-h-screen w-full bg-[var(--bg-primary)] relative overflow-hidden flex items-center justify-center">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[var(--glow-purple)] blur-[140px]"></div>

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[var(--glow-blue)] blur-[140px]"></div>

      <form
      onSubmit={handleSubmit(loginFormSubmit)}
        className="
      relative z-10
      w-[420px]
      rounded-[28px]
      border border-[var(--glass-border)]
      bg-[var(--glass-bg)]
      backdrop-blur-xl
      shadow-[var(--shadow-card)]
      px-8
      py-10
      flex
      flex-col
      gap-6
    "
      >
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--text-primary)]">
            Welcome Back
          </h1>

          <p className="mt-2 text-[var(--text-secondary)]">
            Sign in to continue your journey.
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-5">
          <input
            {...register("email" , {
              required: "Email is required"
            })}
            type="email"
            placeholder="Email Address"
            className="
          w-full
          h-14
          rounded-xl
          border border-[var(--border-glass)]
          bg-[var(--bg-glass)]
          px-5
          text-[var(--text-primary)]
          placeholder:text-[var(--text-muted)]
          outline-none
          transition-all
          duration-300
          focus:border-[var(--primary)]
          focus:shadow-[var(--shadow-purple)]
        "
          />

          <input
            {...register("password" , {
              required: "Password is required"
            })}
            type="password"
            placeholder="Password"
            className="
          w-full
          h-14
          rounded-xl
          border border-[var(--border-glass)]
          bg-[var(--bg-glass)]
          px-5
          text-[var(--text-primary)]
          placeholder:text-[var(--text-muted)]
          outline-none
          transition-all
          duration-300
          focus:border-[var(--primary)]
          focus:shadow-[var(--shadow-purple)]
        "
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-[var(--text-secondary)] cursor-pointer">
            <input
              type="checkbox"
              className="accent-[var(--primary)] w-4 h-4"
            />
            Remember Me
          </label>

          <button
            type="button"
            className="text-[var(--primary-light)] hover:text-white transition"
          >
            Forgot Password?
          </button>
        </div>

        {/* Button */}
        <button
          type="submit"
          style={{ background: "var(--btn-gradient)" }}
          className="
        h-14
        rounded-xl
        text-white
        font-semibold
        shadow-[var(--shadow-button)]
        hover:scale-[1.02]
        active:scale-95
        transition-all
        duration-300
      "
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-[var(--text-secondary)]">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[var(--primary-light)] hover:underline cursor-pointer"
          >
            Create Account
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
