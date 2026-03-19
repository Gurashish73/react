import React from "react";

const Card = ({ elem }) => {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <a
                href={elem.url}
                target="_blank"
                rel="noreferrer"
                className="block relative h-64 overflow-hidden"
            >
                <img
                    src={`https://picsum.photos/id/${elem.id}/400/300`}
                    alt={`Photo by ${elem.author}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-transparent group-hover:bg-black/60 transition-all duration-300 flex items-end p-4">
                    <h2 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        By {elem.author}
                    </h2>
                </div>
            </a>
        </div>
    );
};

export default Card;
