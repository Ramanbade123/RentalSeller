import CollectionCard from "./Components/CollectionCard";
import NewArrivals from "./Components/NewArrivals";
import VideoBox from "./Components/VideoBox";

const HomePage = () => {

    return (
        <>
            <VideoBox />
            <NewArrivals />
            <div className="flex flex-col w-full">
                <h2 className="text-2xl underline text-center font-semibold mb-10"> COLLECTIONS</h2>
                <CollectionCard />
            </div>
        </>
    )
}

export default HomePage;