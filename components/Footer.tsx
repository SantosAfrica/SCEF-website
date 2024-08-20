/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => (
    <footer className=" bg-blue w-full h-full  text-xs font-poppins font-extralight text-white py-10">
        <div className="container w-full px-6 lg:px-20">
            <div className="flex flex-col w-full sm:flex-row sm:justify-between gap-6 sm:gap-0 sm:items-start items-center">
                {/* Left section */}
                <div className="w-full sm:w-2/6 flex flex-col items-center sm:items-start  justify-center lg:w-1/3 gap-4 mb-6 lg:mb-0">
                    <Image src="/images/SCEFwhite.png" alt="SCEF Logo"
                        width={150} // Adjust width as needed
                        height={75} // Adjust height as needed 
                        className="mb-8 w-52 h-auto" />
                    <address className="not-italic mb-2">
                        54, Falolu Street, Surulere, Lagos
                    </address>
                    <p className="">+234-907-962-1110</p>
                    <p className="mb-2">+234-810-976-5897</p>
                    <a href="mailto:nesa.africa@gmail.com" className="text-blue-300">nesa.africa@gmail.com</a>
                </div>

                <div className='w-full sm:w-2/5'>
                    {/* Right section */}
                    <div className="w-full flex mb-8 lg:mb-0">
                        <div className="w-full flex gap-6">
                            <div className='w-1/3 sm:w-fit'>
                                <h4 className=" text-md mb-8">Company</h4>
                                <ul className='  flex flex-col gap-6'>
                                    <li><Link href="/about" legacyBehavior><a className="hover:text-blue-300">About Us</a></Link></li>
                                    <li><Link href="/mission" legacyBehavior><a className="hover:text-blue-300">Mission</a></Link></li>
                                    <li><Link href="/vision" legacyBehavior><a className="hover:text-blue-300">Vision</a></Link></li>
                                    <li><Link href="/get-involved" legacyBehavior><a className="hover:text-blue-300">Get involved</a></Link></li>
                                </ul>
                            </div>
                            <div className='w-1/3 sm:w-fit'>
                                <h4 className=" mb-8">Award Category</h4>
                                <ul className=' flex flex-col gap-6'>
                                    <li><Link href="/nominate" legacyBehavior><a className="hover:text-blue-300">Nominate your Champion</a></Link></li>
                                    <li><Link href="/award-timelines" legacyBehavior><a className="hover:text-blue-300">Award Timelines</a></Link></li>
                                    <li><Link href="/sponsorship" legacyBehavior><a className="hover:text-blue-300">Sponsorship</a></Link></li>
                                </ul>
                            </div>
                            <div className='w-1/3 sm:w-fit '>
                                <h4 className=" mb-8">Award Category</h4>
                                <ul className=' flex flex-col gap-6'>
                                    <li><Link href="/nominate" legacyBehavior><a className="hover:text-blue-300">Nominate your Champion</a></Link></li>
                                    <li><Link href="/award-timelines" legacyBehavior><a className="hover:text-blue-300">Award Timelines</a></Link></li>
                                    <li><Link href="/sponsorship" legacyBehavior><a className="hover:text-blue-300">Sponsorship</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-full">
                        <h4 className="font-bold mt-8 mb-4">Subscribe to our Newsletter</h4>
                        <div className="flex mb-4">
                            <input
                                type="email"
                                placeholder="Input your Email address"
                                className="p-2 w-full text-black rounded-l-lg focus:outline-none"
                            />
                            <button className="bg-black text-white p-2 rounded-r-lg">➔</button>
                        </div>
                        <p>
                            Stay in the loop with the latest updates! Subscribe to our newsletter for exclusive insights, exciting announcements, and all things NESA 2024. Don't miss a beat.
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t-2 border-gray-200 mt-8 pt-4">
                <div className="flex flex-col gap-2 sm:flex-row justify-between items-center py-4">
                    <p>SCEF©2024</p>
                    <ul className="flex space-x-4">
                        <li><Link href="/terms" legacyBehavior><a className="hover:text-blue-300">Terms and Condition</a></Link></li>
                        <li><Link href="/privacy" legacyBehavior><a className="hover:text-blue-300">Privacy</a></Link></li>
                    </ul>
                    <div className="flex space-x-4">
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
