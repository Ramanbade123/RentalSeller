const Privacy = () => {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">Effective Date: April 2025</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
            <p>Welcome to **Rentour**. We value your privacy and are committed to protecting your personal data.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
            <ul className="list-disc ml-5">
                <li>Personal details (name, email, phone number)</li>
                <li>Transaction details (items rented or lent, payment information)</li>
                <li>Usage data (how you interact with our platform)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc ml-5">
                <li>Facilitate borrowing and lending of items</li>
                <li>Process payments and refunds</li>
                <li>Ensure security and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Protection</h2>
            <p>We implement strong security measures to protect your data. However, we recommend using strong passwords and securing your personal details.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Contact Us</h2>
            <p>If you have any questions about this policy, contact us at **support@rentour.com**.</p>
        </div>
    );
};

export default Privacy;
