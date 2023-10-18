import React from 'react';
import Link from 'next/link';
import "../styles/globals.css"




const NavBar = (props) => {

    let loggedInStatus=props.loggedInStatus

    let [userMenuStatus, displayUserMenu] = React.useState(false)
    let [mobileMenuStatus, displayMobileMenu] = React.useState(true)
    return (
        <nav style={{
            background: "linear-gradient(180deg, #090A23 26.14%, rgba(19, 32, 108, 0.00) 72.73%)"
        }} className="">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={` ${mobileMenuStatus ? "hidden" : "block"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                                onClick={()=>{
                                    displayMobileMenu(!mobileMenuStatus)
                                }   
                                }
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={` ${!mobileMenuStatus ? "hidden" : "block"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                                onClick={()=>{
                                    displayMobileMenu(!mobileMenuStatus)
                                }   
                                }
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="icon-2.webp"
                                alt="Workflow"
                            />
                            
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                            <Link href="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </Link>
                                <Link href="/forums"
                                
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Forums
                                </Link>
                                <Link
                                    href="/tutorials"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Tutorials
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About
                                </Link>
                            </div>
                        </div>
                    </div>
                   {loggedInStatus ?
                   
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">View notifications</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19c-2.76 0-5-2.24-5-5h10c0 2.76-2.24 5-5 5z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.73 15.76A7.01 7.01 0 0019 12h2a9 9 0 01-9 9v-2c1.61 0 3.09-.62 4.24-1.64z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 6l.01.01M7 6l.01.01M11 6l.01.01M12 3v.01M12 7v.01"
                                />
                            </svg>
                        </button>

                        <div className="ml-3 relative">
                            <div>
                                <button
                                    type="button"
                                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    id="user-menu"

                                    onClick={()=>{
                                        displayUserMenu(!userMenuStatus)
                                    }}
                                    aria-haspopup="true"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://avatars.githubusercontent.com/u/1396951?v=4"
                                        alt=""
                                    />
                                </button>
                            </div>

                            {userMenuStatus ? 
                            <div
                                className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Your Profile
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Settings
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    Sign out
                                </a>
                            </div>

                            : ""
}
                        </div>
                    </div> :" "}
                </div>
            </div>

            {mobileMenuStatus ?
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/"
                        
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </Link>
                    <a
                        href="/forums"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Forums
                    </a>
                    <a
                        href="/tutorials"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Tutorials
                    </a>
                    <a
                        href="/about"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About
                    </a>
                </div>
        
            </div> : ""
}
        </nav>
    );
};




export default NavBar;
