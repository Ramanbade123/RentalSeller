const TermsService = () => {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="mb-4">Last Updated: April 2025</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
            <p>By using **Rentour**, you agree to comply with our Terms of Service. If you do not agree, please do not use our platform.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
            <ul className="list-disc ml-5">
                <li>Users must provide accurate information</li>
                <li>Borrowers are responsible for returning items on time</li>
                <li>Any damage to borrowed items must be reported immediately</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Payments & Fees</h2>
            <p>Payments for rented items must be completed via our secure payment system. Refunds are subject to our refund policy.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Prohibited Activities</h2>
            <p>Users are prohibited from:</p>
            <ul className="list-disc ml-5">
                <li>Listing illegal or stolen items</li>
                <li>Engaging in fraudulent transactions</li>
                <li>Abusing or harassing other users</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Termination</h2>
            <p>We reserve the right to suspend or terminate accounts that violate our terms.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
            <p>For any questions, reach us at **legal@rentour.com**.</p>
        </div>
    );
};

export default TermsService;
