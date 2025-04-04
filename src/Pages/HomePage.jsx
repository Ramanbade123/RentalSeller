import CollectionCard from "./Components/CollectionCard";
import NewArrivals from "./Components/NewArrivals";
import VideoBox from "./Components/VideoBox";

const HomePage = () => {
    const Products = [
        {
            title: "Latest AI Powered Laptop",
            description:
                `The subtle texture adds depth and intrigue. The modern slim fit creates a polished silhouette. 
                    These suits are versatile, effortlessly transitioning from formal to casual with ease.`,
            imgsrc: "/featureproducts/ailaptop.svg"
        },
        {
            title: "Ultra HD Smart TV",
            description:
                `Experience cinema at home with stunning clarity and vibrant colors. This smart TV features voice control, sleek design, and apps built-in for your streaming needs.`,
            imgsrc: "/featureproducts/drone.svg",
        },
        {
            title: "Noise Cancelling Headphones",
            description:
                `Enjoy immersive sound with active noise cancellation and long battery life. Lightweight and comfortable, perfect for work and travel.`,
            imgsrc: "/featureproducts/headphone.svg"
        },
        {
            title: "Smartphone Pro Max",
            description:
                `Capture your moments with an advanced triple-camera system. Blazing fast performance and a stunning OLED display all packed into a sleek design.`,
            imgsrc: "/featureproducts/mobile.svg"
        },
    ];

    return (
        <>
            <VideoBox />
            <NewArrivals imageCards={Products} />
            <div className="flex flex-col w-full">
                <h2 className="text-2xl underline text-center font-semibold mb-10"> COLLECTIONS</h2>
                <CollectionCard Products={Products} />
            </div>
        </>
    )
}

export default HomePage;