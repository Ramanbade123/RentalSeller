import React from "react";

const imageCards = [
    {
        img: "https://imdbnepal.vercel.app/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fq8eejQcg1bAqImEV8jh8RtBD4uH.jpg&w=2048&q=75",
        description: "An epic sci-fi adventure through time and space."
    },
    {
        img: "https://imdbnepal.vercel.app/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F9g0jrpKJrB4kdMTzjgAV9tZtrNn.jpg&w=2048&q=75",
        description: "A thrilling mystery unfolds in an abandoned city."
    },
    {
        img: "https://imdbnepal.vercel.app/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FlBoHzOgft2QfpjkVVvZCqeM4ttT.jpg&w=2048&q=75",
        description: "A heartwarming tale of friendship and courage."
    },
    {
        img: "https://imdbnepal.vercel.app/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fn4ycOGj2tRLfINTJQ3wl0vNYqpR.jpg&w=2048&q=75",
        description: "A fast-paced action thriller with unexpected twists."
    },
];

const CubicBezierCard = () => {
    return (
        <div className="flex flex-col items-center h-fit py-10 bg-yellow-300 pb-[30dvh]">
            <h1 className="text-2xl font-semibold mb-10">NEW ARRIVALS</h1>
            <div className="flex items-center gap-1">
                {imageCards.map((card, index) => (
                    <div
                        key={index}
                        className="relative group w-[250px] h-[300px] flex items-center justify-center bg-cover bg-center transition-all duration-[650ms] hover:w-[400px] hover:z-[10] hover:rounded-lg"
                        style={{ backgroundImage: `url(${card.img})` }}
                    >
                        {/* Description Box on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center text-white text-center w-[10px] opacity-0 transition-all duration-[660ms] group-hover:opacity-100 group-hover:w-full group-hover:bg-[rgba(0,0,0,0.1)] backdrop-blur-md">
                            <p className="w-[10px] overflow-hidden group-hover:w-[300px]">  {card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CubicBezierCard;
