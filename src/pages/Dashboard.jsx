import React from "react";
import { useState } from "react";
import {
  FiHome,
  FiPieChart,
  FiBox,
  FiUsers,
  FiPlus,
  FiDollarSign,
  FiBell,
  FiSearch,
  FiAlertCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  // UI State
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  // Mock Data
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,345",
      change: "+12%",
      icon: <FiDollarSign className="text-gray-700" />,
    },
    {
      title: "Active Rentals",
      value: "24",
      change: "+5",
      icon: <FiBox className="text-gray-700" />,
    },
    {
      title: "Available Devices",
      value: "38",
      change: "-3",
      icon: <FiBox className="text-gray-700" />,
    },
    {
      title: "Pending Requests",
      value: "7",
      change: "+2",
      icon: <FiAlertCircle className="text-gray-700" />,
    },
  ];

  const recentActivity = [
    { id: 1, user: "John Doe", action: "rented MacBook Pro", time: "2h ago" },
    { id: 2, user: "Jane Smith", action: "requested iPad Pro", time: "5h ago" },
    {
      id: 3,
      user: "Mike Johnson",
      action: "returned Dell XPS",
      time: "1d ago",
    },
  ];

  // CSS-only chart
  const renderDeviceRentals = () => {
    const devices = [
      { name: "MacBook Pro", rentals: 42 },
      { name: "iPad Pro", rentals: 38 },
      { name: "Dell XPS", rentals: 25 },
    ];

    return (
      <div className="space-y-4 mt-6">
        {devices.map((device) => (
          <div key={device.name} className="space-y-1">
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>{device.name}</span>
              <span>{device.rentals} rentals</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-gray-700 h-2 rounded-full"
                style={{ width: `${(device.rentals / 50) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans antialiased">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-sm transition-all duration-200 border-r border-gray-200 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          {sidebarOpen ? (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gray-800 rounded-md flex items-center justify-center text-white font-medium">
                RT
              </div>
              <span className="font-bold text-gray-800">RenTour</span>
            </div>
          ) : (
            <div className="h-8 w-8 bg-gray-800 rounded-md mx-auto flex items-center justify-center text-white font-medium">
              RT
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100"
          >
            {sidebarOpen ? (
              <FiChevronLeft size={18} />
            ) : (
              <FiChevronRight size={18} />
            )}
          </button>
        </div>

        <nav className="mt-6 flex-1">
          {[
            { 
              name: "Dashboard", 
              icon: <FiHome size={18} />, 
              id: "dashboard",
              onClick: () => {
                setActiveTab("dashboard");
                navigate("/dashboard");
              }
            },
            { 
              name: "Analytics", 
              icon: <FiPieChart size={18} />, 
              id: "analytics",
              onClick: () => {
                setActiveTab("analytics");
                navigate("/analytics");
              }
            },
            { 
              name: "Listings", 
              icon: <FiBox size={18} />, 
              id: "listings",
              onClick: () => {
                setActiveTab("listings");
                navigate("/listings");
              }
            },
            { 
              name: "Customers", 
              icon: <FiUsers size={18} />, 
              id: "customers",
              onClick: () => {
                setActiveTab("customers");
                navigate("/customers");
              }
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className={`flex items-center w-full px-4 py-3 text-sm transition-colors ${
                activeTab === item.id
                  ? "bg-gray-100 text-gray-900 font-medium border-l-4 border-gray-800"
                  : "text-gray-600 hover:bg-gray-50 font-medium"
              }`}
            >
              <span className={`${sidebarOpen ? "mr-3" : "mx-auto"}`}>
                {item.icon}
              </span>
              {sidebarOpen && item.name}
            </button>
          ))}
        </nav>

        {/* Create Listing Button */}
        <div className="p-4 border-t border-gray-200 mt-auto">
          <button
            onClick={() => navigate("/productdetails")}
            className="flex items-center w-full px-4 py-3 text-sm bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            <FiPlus className={sidebarOpen ? "mr-3" : "mx-auto"} />
            {sidebarOpen && "Create Listing"}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-xs p-4 border-b border-gray-200">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-xl font-semibold text-gray-800 capitalize">
              {activeTab}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-400 w-64"
                />
              </div>
              <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                <FiBell size={18} />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-medium">
                  JD
                </div>
                {sidebarOpen && (
                  <span className="text-sm font-medium text-gray-700">
                    John Doe
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 max-w-7xl mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-xs border border-gray-200 hover:shadow-sm transition-shadow"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-semibold mt-1 text-gray-800">
                      {stat.value}
                    </p>
                    <p
                      className={`text-xs font-medium mt-2 ${
                        stat.change.startsWith("+")
                          ? "text-green-600"
                          : stat.change.startsWith("-")
                          ? "text-red-600"
                          : "text-gray-500"
                      }`}
                    >
                      {stat.change} from last week
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts & Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Device Rentals Chart */}
            <div className="bg-white p-5 rounded-lg shadow-xs border border-gray-200 lg:col-span-2">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                  Device Rentals
                </h2>
                <button className="text-xs font-medium text-gray-600 hover:text-gray-800">
                  View All
                </button>
              </div>
              {renderDeviceRentals()}
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-5 rounded-lg shadow-xs border border-gray-200">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                  Recent Activity
                </h2>
                <button className="text-xs font-medium text-gray-600 hover:text-gray-800">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="h-10 w-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-700 font-medium">
                      {item.user.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-800">{item.user}</p>
                        <p className="text-xs text-gray-400">{item.time}</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions Table */}
          <div className="mt-8 bg-white p-5 rounded-lg shadow-xs border border-gray-200">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold text-gray-800">
                Recent Transactions
              </h2>
              <button className="text-xs font-medium text-gray-600 hover:text-gray-800">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Device
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[1, 2, 3].map((item) => (
                    <tr key={item} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800">
                        #TRX-00{item}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                        Customer {item}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                        Device Model {item}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                        $1{item}9.00
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            item % 2 === 0
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {item % 2 === 0 ? "Completed" : "Pending"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}