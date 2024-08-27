import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from '../styles/header.module.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-white text-black py-4 px-4 md:px-8 lg:px-20 flex items-center justify-between w-full relative">
            <div className="flex items-center">
                <Image src="/images/SCEF.svg" alt="SCEF Logo" width={100} height={40} />
            </div>

            <div className={`${isMenuOpen ? styles.mobileMenu : 'hidden'} lg:flex flex-col lg:flex-row lg:pl-10 items-center flex-grow justify-between  w-full lg:w-auto`}>
                <nav className={styles.nav}>
                    <Link href="/" className="text-gray-700 hover:text-[#3366CC]">Home</Link>
                    <div className="relative group">
                        <Link href="/about" className="text-gray-700 hover:text-[#3366CC] flex items-center justify-center lg:justify-start">
                            About us <RiArrowDropDownLine className="text-xl" />
                        </Link>
                    </div>
                    <div className="relative group">
                        <Link href="/Services" className="text-gray-700 hover:text-[#3366CC] flex items-center justify-center lg:justify-start">
                            Our Services <RiArrowDropDownLine className="text-xl" />
                        </Link>
                    </div>
                    <div className="relative group">
                        <Link href="/GetInvolved" className="text-gray-700 hover:text-[#3366CC] flex items-center justify-center lg:justify-start">
                            Get Involved <RiArrowDropDownLine className="text-xl" />
                        </Link>
                    </div>
                    <div className="relative group">
                        <Link href="/News" className="text-gray-700 hover:text-[#3366CC] flex items-center justify-center lg:justify-start">
                            News and Update <RiArrowDropDownLine className="text-xl" />
                        </Link>
                    </div>
                </nav>

                <div className={styles.buttons}>
                    <button className="px-6 py-2 text-sm border-2 flex items-center justify-center gap-2 border-[#3366CC] rounded-full text-[#3366CC] hover:bg-[#3366CC] hover:text-white transition-colors">
                        <Image src="/images/donate.png" alt="Donate" width={16} height={16} />
                        Donate
                    </button>
                    <button className="px-6 py-2 text-sm border-2 flex items-center justify-center gap-2 border-[#3366CC] rounded-full text-white bg-[#3366CC] hover:bg-[#2855A8] transition-colors">
                        <Image src="/images/partnerWithUs.png" alt="Partner with us" width={16} height={16} />
                        Partner with us
                    </button>
                </div>
            </div>

            <button
                className="lg:hidden text-[#3366CC] z-50"
                onClick={toggleMenu}
            >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </header>
    );
};

export default Header;