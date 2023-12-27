"use client"

import React, { useState } from "react";
import { FaBars, FaBuffer, FaTimes } from "react-icons/fa";

//CSR = rsc , SSR = rfc
const menus = [
    // { index: 1, name: 'Join', path: '/join' },
    { index: 2, name: 'Board', path: '/board' },
    { index: 3, name: 'DTX Notice', path: '/notice' },
    { index: 4, name: 'React', path: '/study' },
]

const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false);

    let status = "not authenticated";
    return (
        //   navbar goes here
        <nav className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">

                    <div className="flex space-x-4">
                        {/* logo */}
                        <div>
                            <a href="/" className="flex items-center py-5 px-2 text-gray-700">
                                <FaBuffer className="w-6 h-6" />
                                <span className="font-bold px-2">Home</span>
                            </a>
                        </div>

                        {/* primary nav */}
                        {
                            menus?.map((item, index) => {
                                return (
                                    <div className="hidden md:flex items-center space-x-1" key={item.index} >
                                        <a href={item.path} className="py-5 px-3 text-gray-700 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* secondary nav */}
                    {status === "authenticated" ? (
                        <div className="hidden md:flex items-center space-x-1">
                            <button
                                className="py-5 px-3"
                                onClick={(evt) => {
                                    evt.preventDefault();
                                    alert("Log out");
                                }}
                            >
                                Log out
                            </button>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="/login" className="py-5 px-3">
                                Login
                            </a>
                            <a
                                href="/join"
                                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                            >
                                Join us
                            </a>
                        </div>
                    )}
                    {/* mobile menu */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuToggle(!menuToggle)}>
                            {menuToggle ? (
                                <FaTimes className="w-6 h-6" />
                            ) : (
                                <FaBars className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu items */}
            <div className={`${!menuToggle ? "hidden" : ""} md:hidden`}>
                <a
                    href="/features"
                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                >
                    Features
                </a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
                    Pricing
                </a>

                {status === "authenticated" ? (
                    <button
                        className="block py-2 px-4 text-sm hover:bg-gray-200"
                        onClick={(evt) => {
                            evt.preventDefault();
                            alert("Log out");
                        }}
                    >
                        Log out
                    </button>
                ) : (
                    <div>
                        <a
                            href="/login"
                            className="block py-2 px-4 text-sm hover:bg-gray-200"
                        >
                            Login
                        </a>
                        <a
                            href="/join"
                            className="block py-2 px-4 text-sm hover:bg-gray-200"
                        >
                            Join us
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
