import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
    const error = useRouteError();
    console.error("Caught error:", error);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
            <h1 className="text-4xl font-bold text-red-600">Oops! Something went wrong.</h1>
            <p className="text-gray-700 mt-4">
                {error?.statusText || error?.message || "An unexpected error occurred."}
            </p>
            <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorBoundary;
