import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";
import { Notfound } from "./Components/NotFound";
import ErrorBoundary from "./Components/ErrorBoundary"; // Import the Error Boundary
import HomePage from "./Pages/HomePage";

// Lazy load all secondary pages
const Collections = lazy(() => import("./Pages/Collections/Collections"));
const BestSeller = lazy(() => import("./Pages/Collections/BestSeller"));
const NewArrivals = lazy(() => import("./Pages/Collections/NewArrivals"));

// Product Categories
const Mobiles = lazy(() => import("./Pages/Categories/Mobiles"));
const Laptops = lazy(() => import("./Pages/Categories/Laptops"));
const Cameras = lazy(() => import("./Pages/Categories/Cameras"));
const Ipads = lazy(() => import("./Pages/Categories/Ipads"));
const Drones = lazy(() => import("./Pages/Categories/Drones"));
const Headphones = lazy(() => import("./Pages/Categories/Headphones"));

// Legal & Info Pages
const FAQs = lazy(() => import("./Pages/Legal/FAQs"));
const Privacy = lazy(() => import("./Pages/Legal/Privacy"));
const TermsService = lazy(() => import("./Pages/Legal/TermsServices"));

const ContactUs = lazy(() => import("./Pages/Info/ContactUs"));
const AboutUs = lazy(() => import("./Pages/Info/AboutUs"));

// Helper function to wrap lazy components in Suspense
const LazyLoad = (Component) => (
  <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
    <Component />
  </Suspense>
);

// Define router
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />, // Added Error Boundary
    children: [
      { index: true, element: <HomePage /> },

      // Collections & Products Routes
      {
        path: "collections",
        element: LazyLoad(Collections),
        errorElement: <ErrorBoundary />, // Error handling for collections
        children: [
          { index: true, element: LazyLoad(BestSeller) },
          { path: "new-arrivals", element: LazyLoad(NewArrivals) },
          { path: "mobiles", element: LazyLoad(Mobiles) },
          { path: "laptops", element: LazyLoad(Laptops) },
          { path: "cameras", element: LazyLoad(Cameras) },
          { path: "headphones", element: LazyLoad(Headphones) },
          { path: "ipads", element: LazyLoad(Ipads) },
          { path: "drones", element: LazyLoad(Drones) },
        ],
      },

      // Legal Pages
      { path: "faqs", element: LazyLoad(FAQs), errorElement: <ErrorBoundary /> },
      { path: "privacy-policy", element: LazyLoad(Privacy), errorElement: <ErrorBoundary /> },
      { path: "terms-of-service", element: LazyLoad(TermsService), errorElement: <ErrorBoundary /> },

      // Info Pages
      { path: "contact-us", element: LazyLoad(ContactUs), errorElement: <ErrorBoundary /> },
      { path: "about-us", element: LazyLoad(AboutUs), errorElement: <ErrorBoundary /> },
    ],
  },
  { path: "*", element: <Notfound />, errorElement: <ErrorBoundary /> }, // Handle unknown routes
]);

export default Router;
