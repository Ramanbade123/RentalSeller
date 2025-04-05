import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  FiChevronRight
} from 'react-icons/fi';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  // Mock Data
  const stats = [
    { title: "Total Revenue", value: "$12,345", change: "+12%", icon: <FiDollarSign /> },
    { title: "Active Rentals", value: "24", change: "+5", icon: <FiBox /> },
    { title: "Available Devices", value: "38", change: "-3", icon: <FiBox /> },
    { title: "Pending Requests", value: "7", change: "+2", icon: <FiAlertCircle /> }
  ];

  const recentActivity = [
    { id: 1, user: "John Doe", action: "rented MacBook Pro", time: "2h ago" },
    { id: 2, user: "Jane Smith", action: "requested iPad Pro", time: "5h ago" },
    { id: 3, user: "Mike Johnson", action: "returned Dell XPS", time: "1d ago" }
  ];

  const renderDeviceRentals = () => {
    const devices = [
      { name: "MacBook Pro", rentals: 42 },
      { name: "iPad Pro", rentals: 38 },
      { name: "Dell XPS", rentals: 25 }
    ];
    
    return (
      <div className="space-y-2 mt-4">
        {devices.map(device => (
          <div key={device.name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{device.name}</span>
              <span>{device.rentals} rentals</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div 
                className="bg-gray-700 h-2 rounded" 
                style={{ width: `${(device.rentals / 50) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleCreateListing = () => {
    console.log("Navigating to product details");
    navigate("/productdetails");
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-md transition-all`}>
        <div className="p-4 flex items-center justify-between border-b">
          {sidebarOpen ? (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gray-800 rounded-md" />
              <span className="font-bold">RenTour</span>
            </div>
          ) : (
            <div className="h-8 w-8 bg-gray-800 rounded-md mx-auto" />
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500">
            {sidebarOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
          </button>
        </div>
        
        <nav className="mt-6">
          {[
            { name: 'Dashboard', icon: <FiHome size={18} />, id: 'dashboard' },
            { name: 'Analytics', icon: <FiPieChart size={18} />, id: 'analytics' },
            { name: 'Listings', icon: <FiBox size={18} />, id: 'listings' },
            { name: 'Customers', icon: <FiUsers size={18} />, id: 'customers' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full px-4 py-3 text-sm ${
                activeTab === item.id ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className={`${sidebarOpen ? 'mr-3' : 'mx-auto'}`}>{item.icon}</span>
              {sidebarOpen && item.name}
            </button>
          ))}
          
          {/* Create Listing Button */}
          <button
            onClick={handleCreateListing}
            className={`flex items-center w-full px-4 py-3 mt-4 text-sm bg-gray-800 text-white rounded-md hover:bg-gray-700 ${
              !sidebarOpen ? 'justify-center' : ''
            }`}
          >
            <FiPlus className={`${sidebarOpen ? 'mr-3' : ''}`} />
            {sidebarOpen && 'Create Listing'}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">{activeTab}</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 border rounded-lg text-sm"
                />
              </div>
              <button className="p-2 text-gray-500">
                <FiBell />
              </button>
              <div className="h-8 w-8 bg-gray-200 rounded-full" />
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                    <p className={`text-sm mt-2 ${
                      stat.change.startsWith('+') ? 'text-green-600' : 
                      stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Device Rentals */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Device Rentals</h2>
              {renderDeviceRentals()}
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map(item => (
                  <div key={item.id} className="flex items-start">
                    <div className="h-10 w-10 bg-gray-200 rounded-full mr-3" />
                    <div>
                      <p className="font-medium">{item.user}</p>
                      <p className="text-gray-600 text-sm">{item.action}</p>
                      <p className="text-gray-400 text-xs mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}