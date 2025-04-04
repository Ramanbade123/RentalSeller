import React, { useState, useRef } from "react";

const VideoBox = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const videoRef = useRef(null);

    const handleLoadedData = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsError(true);
        setIsLoading(false);
    };

    return (
        <div className="bg-blue-600 w-full h-[100dvh] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* Show Loading Skeleton */}
                {isLoading && !isError && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                        <p className="text-white text-lg">Loading Video...</p>
                    </div>
                )}

                {/* Show Error Fallback */}
                {isError && (
                    <div className="absolute inset-0 bg-red-600 flex items-center justify-center">
                        <p className="text-white font-bold">Failed to Load Video</p>
                    </div>
                )}

                {/* Video Element */}
                {!isError && (
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        controls
                        onLoadedData={handleLoadedData}
                        onError={handleError}
                    >
                        <source src="/bgvideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    );
};

export default VideoBox;
