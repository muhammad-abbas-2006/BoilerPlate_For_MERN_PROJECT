import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      const data = await res.json()

      if (res.ok) {
        alert("Signup Successful! " + data.message)
        navigate("/login") // redirect to login page
      } else {
        alert("Error: " + data.message)
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong!")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-rose-50 to-rose-100 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-rose-300 opacity-20 rounded-full -top-32 -left-32 blur-3xl animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-rose-400 opacity-20 rounded-full -bottom-32 -right-32 blur-3xl animate-pulse"></div>

      <div className="bg-white shadow-xl rounded-2xl w-[400px] p-10 transition-all duration-500 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Join us and start your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
              required
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-3.5 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-2 
              peer-focus:text-sm 
              peer-focus:text-rose-500">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
              required
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-3.5 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-2 
              peer-focus:text-sm 
              peer-focus:text-rose-500">
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
              required
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-3.5 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-2 
              peer-focus:text-sm 
              peer-focus:text-rose-500">
              Password
            </label>

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-4 text-gray-500 hover:text-rose-700 transition"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Button */}
          <button className="w-full bg-rose-700 hover:bg-rose-800 text-white py-3 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-lg">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-8 text-gray-600">
          Already have an account?{" "}
          <NavLink to="/login" className="text-rose-700 font-semibold hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  )
}