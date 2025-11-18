import React, { useState } from "react";
import Logo from "../../public/favicon.png";

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpForm() {  
  const [form, setForm] = useState<SignUpFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<SignUpFormData>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const newErrors: Partial<SignUpFormData> = {};

    // Username
    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }

    // Email validation (VERY good regex)
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password rules
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password
    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // Live validation while typing
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Sign up submitted:", form);
    alert("Account created successfully!");
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
            Create an Account
          </h3>

          {/* Username */}
          <div className="mb-5">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2.5 text-sm transition focus:ring-2 focus:ring-[#f84525] focus:border-[#f84525] outline-none"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
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
                value={form.password}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2.5 text-sm transition focus:ring-2 focus:ring-[#f84525] focus:border-[#f84525] outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2.5 text-sm transition focus:ring-2 focus:ring-[#f84525] focus:border-[#f84525] outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword((prev) => !prev)
                }
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-[#f84525] text-white font-semibold rounded-md text-sm uppercase tracking-wide shadow hover:bg-[#d33b1f] transition active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>
      </div>

      <div className="h-10" />
    </div>
  );
}
