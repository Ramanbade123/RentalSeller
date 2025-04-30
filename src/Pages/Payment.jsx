import React, { useState, useEffect } from 'react';
import { FiCheck, FiLock, FiShield, FiCreditCard, FiDollarSign } from 'react-icons/fi';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState('esewa');
  const [esewaId, setEsewaId] = useState('');
  const [pin, setPin] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false); // Changed to false since we're using mock data
  const [error, setError] = useState(null);

  // Mock data for cart items(delete this side this is mock data)
  const mockCartItems = [
    { name: 'Edge Lite 6', price: 1977.00 },
    { name: 'iRead Mini', price: 499.00 }
  ];

  // Commented out the backend fetching code
  /*
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://your-api-endpoint.com/cart');
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        setCartItems(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);
  */

  // Use mock data instead (delete this side this is mock data)
  useEffect(() => {
    setCartItems(mockCartItems);
  }, []);

  //not to delete this from here
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading payment details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="text-center text-red-500">
          <p>Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Payment Details</h1>
            <p className="text-sm text-gray-500 mt-1">Complete your purchase securely</p>
          </div>
          
          {/* Order Summary */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{item.name}</span>
                  <span className="font-medium text-gray-800">¥ {item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center py-3 border-t border-gray-200">
              <span className="font-medium text-gray-700">Total Amount</span>
              <span className="text-lg font-semibold text-gray-900">¥ {subtotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Payment Method</h2>
            
            <div className="space-y-3">
              {/* eSewa Option */}
              <div 
                className={`p-4 border rounded-md cursor-pointer transition-all ${selectedPayment === 'sewa' ? 'border-gray-400 bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}
                onClick={() => setSelectedPayment('sewa')}
              >
                <div className="flex items-start">
                  <div className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedPayment === 'sewa' ? 'bg-gray-700 border-gray-700' : 'border-gray-400'}`}>
                    {selectedPayment === 'sewa' && <FiCheck className="text-white text-xs" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">eSewa Wallet ( Recommended)</h3>
                      <FiDollarSign className="text-gray-500" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Pay instantly with your eSewa account</p>
                  </div>
                </div>

                {selectedPayment === 'sewa' && (
                  <div className="mt-4 space-y-3 pl-8">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1 uppercase tracking-wider">eSewa ID</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                        value={esewaId}
                        onChange={(e) => setEsewaId(e.target.value)}
                        placeholder="Esewa ID"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1 uppercase tracking-wider">PIN</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="••••••"
                        maxLength="6"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Credit Card Option */}
              <div 
                className={`p-4 border rounded-md cursor-pointer transition-all ${selectedPayment === 'card' ? 'border-gray-400 bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}
                onClick={() => setSelectedPayment('card')}
              >
                <div className="flex items-start">
                  <div className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedPayment === 'card' ? 'bg-gray-700 border-gray-700' : 'border-gray-400'}`}>
                    {selectedPayment === 'card' && <FiCheck className="text-white text-xs" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">Credit/Debit Card</h3>
                      <FiCreditCard className="text-gray-500" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Visa, MasterCard, and other cards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <div>
            <button 
              className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              disabled={loading}
            >
              <FiShield className="mr-2" />
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
            <div className="mt-3 flex items-center justify-center text-xs text-gray-500">
              <FiLock className="mr-1.5" />
              <span>Secure SSL encrypted payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;