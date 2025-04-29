import React, { useState } from "react";
import {
  FiPieChart,
  FiBarChart2,
  FiTrendingUp,
  FiDownload,
  FiDollarSign,
  FiHome,
  FiBox,
  FiUsers,
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function AnalyticsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("analytics");

  const rentalTrends = [
    { month: "Jan", rentals: 45 },
    { month: "Feb", rentals: 52 },
    { month: "Mar", rentals: 68 },
    { month: "Apr", rentals: 72 },
    { month: "May", rentals: 85 },
    { month: "Jun", rentals: 91 },
  ];

  const devicePopularity = [
    { device: "MacBook Pro", percentage: 42 },
    { device: "iPad Pro", percentage: 28 },
    { device: "Dell XPS", percentage: 18 },
    { device: "Others", percentage: 12 },
  ];

  const revenueData = [
    { category: "Device Rentals", amount: 12500 },
    { category: "Accessories", amount: 3200 },
    { category: "Insurance", amount: 1800 },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans antialiased">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-white shadow-sm transition-all duration-200 border-r border-gray-200 flex flex-col`}>
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
            {sidebarOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
          </button>
        </div>

        <nav className="mt-6 flex-1">
          {[
            { name: "Dashboard", icon: <FiHome size={18} />, id: "dashboard", route: "/dashboard" },
            { name: "Analytics", icon: <FiPieChart size={18} />, id: "analytics", route: "/analytics" },
            { name: "Listings", icon: <FiBox size={18} />, id: "listings", route: "/listings" },
            { name: "Customers", icon: <FiUsers size={18} />, id: "customers", route: "/customers" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                navigate(item.route);
              }}
              className={`flex items-center w-full px-4 py-3 text-sm transition-colors ${
                activeTab === item.id
                  ? "bg-gray-100 text-gray-900 font-medium border-l-4 border-gray-800"
                  : "text-gray-600 hover:bg-gray-50 font-medium"
              }`}
            >
              <span className={`${sidebarOpen ? "mr-3" : "mx-auto"}`}>{item.icon}</span>
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
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
              >
                <FiArrowLeft size={18} />
              </button>
              <h1 className="text-xl font-semibold text-gray-800">Analytics</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <FiDownload className="mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 max-w-7xl mx-auto">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {/* Cards */}
            {[
              {
                label: "Total Rentals",
                value: "342",
                change: "12%",
                icon: <FiBarChart2 size={20} />,
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                trendColor: "text-green-600",
              },
              {
                label: "Total Revenue",
                value: "$24,580",
                change: "18%",
                icon: <FiDollarSign size={20} />,
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                trendColor: "text-green-600",
              },
              {
                label: "Avg. Rental Duration",
                value: "7.2 days",
                change: "5% decrease",
                icon: <FiPieChart size={20} />,
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                trendColor: "text-red-600",
                decrease: true,
              },
            ].map((card, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-xs border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{card.label}</p>
                    <p className="text-2xl font-semibold mt-1 text-gray-800">{card.value}</p>
                    <p className={`text-xs font-medium mt-2 flex items-center ${card.trendColor}`}>
                      <FiTrendingUp className={`mr-1 ${card.decrease ? "transform rotate-180" : ""}`} /> {card.change}
                    </p>
                  </div>
                  <div className={`h-12 w-12 rounded-lg ${card.iconBg} ${card.iconColor} flex items-center justify-center`}>
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rental Trends Chart */}
          <div className="bg-white p-5 rounded-lg shadow-xs border border-gray-200 mb-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold text-gray-800">Rental Trends</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-gray-800 text-white rounded-md">Monthly</button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Weekly</button>
              </div>
            </div>
            <div className="h-64 flex items-end space-x-2">
              {rentalTrends.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-blue-500 rounded-t-sm"
                    style={{ height: `${(item.rentals / 100) * 100}%` }}
                  />
                  <span className="text-xs text-gray-500 mt-1">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Device Popularity and Revenue Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Device Popularity */}
            <div className="bg-white p-5 rounded-lg shadow-xs border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-5">Device Popularity</h2>
              <div className="space-y-4">
                {devicePopularity.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm font-medium text-gray-700">
                      <span>{item.device}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="bg-white p-5 rounded-lg shadow-xs border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-5">Revenue Breakdown</h2>
              <div className="space-y-4">
                {revenueData.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm font-medium text-gray-700">
                      <span>{item.category}</span>
                      <span>${item.amount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{
                          width: `${(item.amount / Math.max(...revenueData.map(r => r.amount))) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Segments */}
          <div className="bg-white p-5 rounded-lg shadow-xs border border-gray-200 mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">Customer Segments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800">Students</h3>
                <p className="text-2xl font-semibold mt-2 text-blue-600">42%</p>
                <p className="text-xs text-blue-500 mt-1">Most active segment</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-medium text-purple-800">Freelancers</h3>
                <p className="text-2xl font-semibold mt-2 text-purple-600">30%</p>
                <p className="text-xs text-purple-500 mt-1">Growing customer base</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium text-green-800">Corporate</h3>
                <p className="text-2xl font-semibold mt-2 text-green-600">28%</p>
                <p className="text-xs text-green-500 mt-1">High revenue clients</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
