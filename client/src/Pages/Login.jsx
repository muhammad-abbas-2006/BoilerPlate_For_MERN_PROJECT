import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      const data = await res.json()

      if (res.ok) {
        alert("login Successful! " + data.message)
        navigate("/dashboard") // redirect to login page
      } else {
        alert("Error: " + data.message)
      }
    } catch (error) {
      console.log(`Data is not find`, error);

    }
    console.log(formData.email);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-rose-50 to-rose-100 relative overflow-hidden">

      {/* Background Soft Glows */}
      <div className="absolute w-96 h-96 bg-rose-300 opacity-20 rounded-full -top-32 -left-32 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-rose-400 opacity-20 rounded-full -bottom-32 -right-32 blur-3xl"></div>

      <div className="bg-white shadow-xl rounded-2xl w-[400px] p-10 transition-all duration-500 hover:shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Login to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div className="relative">
            <input
              name="email"
              type="email"
              value={formData.email}
              placeholder=" "
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:ring-1 focus:ring-rose-700 focus:border-rose-700 outline-none transition-all"
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-3.5 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-2 
              peer-focus:text-sm 
              peer-focus:text-rose-700">
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
            name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              placeholder=" "
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:ring-1 focus:ring-rose-700 focus:border-rose-700 outline-none transition-all"
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-3.5 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-2 
              peer-focus:text-sm 
              peer-focus:text-rose-700">
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

          {/* Login Button */}
          <button className="w-full bg-rose-700 hover:bg-rose-800 text-white py-3 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-lg">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-8 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-rose-700 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  )
}