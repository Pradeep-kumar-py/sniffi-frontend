import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Custom function to apply active styles for desktop
    const activeStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? '600' : '500',
            color: isActive ? '#FE5F62' : '#3F3D56',
            borderBottom: isActive ? '2px solid #FE5F62' : 'none',
        };
    };

    // Custom function to apply active styles for mobile
    const mobileActiveStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? '600' : '500',
            color: isActive ? '#FE5F62' : '#3F3D56',
        };
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking on a link (mobile)
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`sticky top-0 left-0 right-0 z-50 
            ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white/10 backdrop-blur-sm'} 
            transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="flex items-center hover:opacity-90 transition-opacity flex-shrink-0"
                        onClick={closeMenu}
                    >
                        <div className="flex justify-start">
                            <span className="text-[#3F3D56] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-none">Sni</span>
                            <span className="text-[#FE5F62] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-none">ffi</span>
                        </div>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                        <NavLink 
                            to="/" 
                            style={activeStyle} 
                            className="px-1 py-2 text-base lg:text-lg font-medium tracking-tight hover:text-[#FE5F62] transition-colors whitespace-nowrap"
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to='/services' 
                            style={activeStyle} 
                            className="px-1 py-2 text-base lg:text-lg font-medium tracking-tight hover:text-[#FE5F62] transition-colors whitespace-nowrap"
                        >
                            Services
                        </NavLink>
                        <NavLink 
                            to="/privacy" 
                            style={activeStyle} 
                            className="px-1 py-2 text-base lg:text-lg font-medium tracking-tight hover:text-[#FE5F62] transition-colors whitespace-nowrap"
                        >
                            Privacy
                        </NavLink>
                        <NavLink 
                            to="/terms" 
                            style={activeStyle} 
                            className="px-1 py-2 text-base lg:text-lg font-medium tracking-tight hover:text-[#FE5F62] transition-colors whitespace-nowrap"
                        >
                            TnC
                        </NavLink>
                    </div>

                    {/* Desktop Book Appointment Button */}
                    <Link 
                        to="/book-appointment" 
                        className="hidden md:inline-flex items-center gap-2 bg-[#FE5F62] hover:bg-[#e45457] text-white font-medium px-4 lg:px-6 py-2.5 lg:py-3 rounded-md transition-all duration-300 shadow-lg group whitespace-nowrap"
                    >
                        Book Appointment
                        <FaPaw className="transition-transform group-hover:rotate-12" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FE5F62] focus:ring-opacity-50 rounded"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`bg-[#3F3D56] block transition-all duration-300 ease-out h-0.5 w-full rounded-sm transform origin-center ${
                                isMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}></span>
                            <span className={`bg-[#3F3D56] block transition-all duration-300 ease-out h-0.5 w-full rounded-sm ${
                                isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                            }`}></span>
                            <span className={`bg-[#3F3D56] block transition-all duration-300 ease-out h-0.5 w-full rounded-sm transform origin-center ${
                                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}></span>
                        </div>
                    </button>
                </div>
                
                {/* Mobile Navigation Dropdown */}
                <div 
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-sm rounded-b-lg shadow-lg border-t border-gray-100">
                        <NavLink 
                            to="/" 
                            style={mobileActiveStyle} 
                            className="block w-full text-center py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-md transition-colors"
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to='/services' 
                            style={mobileActiveStyle} 
                            className="block w-full text-center py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-md transition-colors"
                            onClick={closeMenu}
                        >
                            Services
                        </NavLink>
                        <NavLink 
                            to="/privacy" 
                            style={mobileActiveStyle} 
                            className="block w-full text-center py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-md transition-colors"
                            onClick={closeMenu}
                        >
                            Privacy
                        </NavLink>
                        <NavLink 
                            to="/terms" 
                            style={mobileActiveStyle} 
                            className="block w-full text-center py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-md transition-colors"
                            onClick={closeMenu}
                        >
                            TnC
                        </NavLink>
                        
                        {/* Mobile Book Appointment Button */}
                        <div className="pt-3 px-4">
                            <Link 
                                to="/book-appointment" 
                                className="flex items-center justify-center gap-2 bg-[#FE5F62] hover:bg-[#e45457] text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-lg group w-full"
                                onClick={closeMenu}
                            >
                                Book Appointment
                                <FaPaw className="transition-transform group-hover:rotate-12" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
