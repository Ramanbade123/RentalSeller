import CollectionCard from "./Components/CollectionCard";
import NewArrivals from "./Components/NewArrivals";
import VideoBox from "./Components/VideoBox";

const HomePage = () => {

    return (
        <>
            <VideoBox />
            <NewArrivals />
            <div className="flex flex-col w-full">
                <h2 className="text-xl sm:text-3xl underline font-semibold mb-6 sm:mb-12 tracking-wider text-center"> COLLECTIONS</h2>
                <CollectionCard />
            </div>
        </>
    )
}

export default HomePage;