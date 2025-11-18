import React, { useState } from "react";
import Logo from "../../public/favicon.png";

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

export default function LoginForm() {
  const [form, setForm] = useState<LoginFormData>({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen bg-[#f8f4f3] flex flex-col justify-center items-center px-4">
      
      {/* Logo */}
      <div className="absolute top-6 left-6 w-14 h-14 sm:w-20 sm:h-20">
        <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* Brand */}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        MOYA{" "}
        <span className="bg-[#f84525] text-white px-2 py-0.5 rounded-md">
          ሞያ
        </span>
      </h2>

      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <form onSubmit={handleSubmit}>

          <h3 className="text-center text-2xl font-semibold mb-8 text-gray-800">
            Log In
          </h3>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2.5 text-sm transition focus:ring-2 focus:ring-[#f84525] focus:border-[#f84525] outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2.5 text-sm transition focus:ring-2 focus:ring-[#f84525] focus:border-[#f84525] outline-none"
              />

              {/* Toggle Password */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  // Eye Open Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  </svg>
                ) : (
                  // Eye Closed Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.98 8.223A10.958 10.958 0 001 12s3 7 11 7c1.865 0 3.53-.4 5-.982M21 12a10.97 10.97 0 00-4.026-5.777M9.88 9.88a3 3 0 104.24 4.24M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="rounded border-gray-300 text-[#f84525] shadow-sm focus:ring-[#f84525]"
              />
              <span className="ml-2">Remember Me</span>
            </label>

            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-[#f84525] text-white font-semibold rounded-md text-sm uppercase tracking-wide shadow hover:bg-[#d33b1f] transition active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Footer spacing for small screens */}
      <div className="h-10" />
    </div>
  );
}
