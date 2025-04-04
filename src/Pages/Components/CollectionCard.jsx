import React from "react";

const CollectionCard = ({ Products }) => {
    return (
        <div className="w-full flex flex-col gap-8 py-10 bg-gray-100">
            {Products.map((product, index) => {
                const isEven = index % 2 === 1;
                const layoutClass = isEven ? "flex-row-reverse" : "flex-row";

                return (
                    <div
                        key={index}
                        className={`flex ${layoutClass} items-center bg-white shadow-md w-full px-8 py-6`}
                    >
                        <div className="w-1/2 flex justify-center">
                            <img
                                src={product.imgsrc}
                                alt={product.title}
                                className="w-[70%] h-auto object-contain"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col gap-2 p-4">
                            <h2 className="text-2xl font-bold">{product.title}</h2>
                            <p className="text-[14px] leading-relaxed">
                                {product.description}
                            </p>
                            <button className="text-[12px] self-start px-4 py-1 border-[2px]  bg-black text-white hover:bg-white hover:text-black  transition">
                                VIEW DETAILS
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CollectionCard;
