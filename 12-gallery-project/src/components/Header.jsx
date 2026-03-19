import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 py-4 shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold tracking-wider text-amber-400">
                    📸 SnapGallery
                </h1>
            </div>
        </header>
    );
};

export default Header;