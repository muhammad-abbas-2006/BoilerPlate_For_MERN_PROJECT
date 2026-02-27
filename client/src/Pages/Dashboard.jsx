import { useState } from "react"
import { Menu, User, Settings, LogOut } from "lucide-react"
import { Link } from "react-router-dom"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"} relative`}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <span className={`text-2xl font-bold text-rose-700 ${!sidebarOpen && "hidden"}`}>MyApp</span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>

        <nav className="mt-6">
          <Link to="#" className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-rose-100 transition-all rounded-md">
            <User size={20} />
            <span className={`${!sidebarOpen && "hidden"}`}>Profile</span>
          </Link>
          <Link to="#" className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-rose-100 transition-all rounded-md">
            <Settings size={20} />
            <span className={`${!sidebarOpen && "hidden"}`}>Settings</span>
          </Link>
          <Link to="#" className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-rose-100 transition-all rounded-md">
            <LogOut size={20} />
            <span className={`${!sidebarOpen && "hidden"}`}>Logout</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <button className="bg-rose-700 text-white px-4 py-2 rounded-md hover:bg-rose-800 transition-all">New Task</button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Users</h2>
            <p className="text-gray-500">Total 120 users</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Tasks</h2>
            <p className="text-gray-500">23 tasks pending</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Revenue</h2>
            <p className="text-gray-500">$1,200 this month</p>
          </div>
        </div>
      </div>
    </div>
  )
}