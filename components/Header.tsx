import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/header.module.css'; // Import the CSS module

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white text-black pt-6 h-10 sm:h-20 px-4 md:px-8 lg:px-20 flex items-center justify-center w-full gap-2 relative">
            <div className="flex-shrink-0 mr-6">
                <Image src="/images/SCEF.svg" alt="SCEF Logo" width={100} // Adjust width as needed
                    height={40} // Adjust height as needed 
                />
            </div>

            <div className="flex flex-grow items-center justify-between">
                {/* Hamburger Icon */}
                {!isMenuOpen && (
                    <button
                        className="lg:hidden absolute  right-4 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                )}

                {/* Navigation Links for Desktop */}
                <nav
                    className={`hidden lg:flex gap-6 font-poppins ${styles.nav}`}
                >
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/Services">Our Services</Link>
                    <Link href="/GetInvolved">Get Involved</Link>
                    <Link href="/News">News and Update</Link>
                </nav>

                {/* Buttons */}
                <div className={`hidden lg:flex gap-4 ${styles.buttons}`}>
                    <button className="w-40 h-12 text-sm border-2 flex items-center justify-center gap-2 border-liteblue rounded-full text-liteblue">
                        <Image src="/images/donate.png" alt="Donate button icon"
                            width={16} // Adjust width as needed
                            height={16} // Adjust height as needed
                            className="h-4 w-auto" /> Donate
                    </button>
                    <button className="w-40 h-12 text-sm border-2 flex items-center justify-center gap-2 border-liteblue rounded-full text-white bg-liteblue">
                        <Image src="/images/partnerWithUs.png" alt="Partner with us button icon"
                            width={16} // Adjust width as needed
                            height={16} // Adjust height as needed
                            className="h-4 w-auto" /> Partner with us
                    </button>
                </div>
            </div>

            {/* Full-screen Menu Overlay */}
            {isMenuOpen && (
                <div className={`${styles.overlay} fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50`}>
                    <button
                        className="absolute rounded-full top-4 right-4 text-white text-3xl"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        &times;
                    </button>
                    <nav className="flex flex-col items-center gap-6">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">Home</Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">About</Link>
                        <Link href="/Services" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">Our Services</Link>
                        <Link href="/GetInvolved" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">Get Involved</Link>
                        <Link href="/News" onClick={() => setIsMenuOpen(false)} className="text-white text-2xl font-bold">News and Update</Link>
                    </nav>
                    <div className="mt-8 flex flex-col gap-4">
                        <button className="flex items-center justify-center gap-2 border-white border-2 rounded-full text-white bg-blue-600 px-6 py-3 text-xl">
                            <Image src="/images/donate.png" alt="Donate button icon"
                                width={16} // Adjust width as needed
                                height={16} // Adjust height as needed
                                className="w-6 h-6" /> Donate
                        </button>
                        <button className="flex items-center justify-center gap-2 border-white border-2 rounded-full text-white bg-blue-800 px-6 py-3 text-xl">
                            <Image src="/images/partnerWithUs.png" alt="Partner with us button icon"
                                width={16} // Adjust width as needed
                                height={16} // Adjust height as needed
                                className="w-6 h-6" /> Partner with us
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
