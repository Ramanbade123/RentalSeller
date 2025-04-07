import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiShield, FiCalendar, FiDollarSign } from 'react-icons/fi';

const HowItWorks = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How Rentour Works</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple steps to rent the electronics you need, when you need them
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Browse & Select</h3>
              <p className="text-gray-600">
                Choose from our wide range of premium electronics and select your rental period.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Place Order</h3>
              <p className="text-gray-600">
                Complete your booking with secure payment and verification.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCalendar className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Receive Device</h3>
              <p className="text-gray-600">
                Get your device delivered or pick it up from a nearby location.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDollarSign className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Return & Repeat</h3>
              <p className="text-gray-600">
                Send it back when done or extend your rental period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">What's the minimum rental period?</h3>
              <p className="text-gray-600">
                Our minimum rental period is 7 days for most items. Some premium devices may have different minimum periods.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">What if I damage the device?</h3>
              <p className="text-gray-600">
                All rentals include optional damage protection plans. Without protection, you'll be responsible for repair costs.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Can I extend my rental?</h3>
              <p className="text-gray-600">
                Yes! You can extend your rental anytime before the due date, subject to availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of happy customers enjoying flexible electronics rental.
          </p>
          <Link 
            to="/products"
            className="inline-block px-8 py-4 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Browse Available Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;