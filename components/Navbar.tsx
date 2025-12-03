
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        { path: '/', label: 'HOME' },
        { path: '/news', label: 'NEWS' },
        { path: '/heroes', label: 'HEROES' },
        { path: '/stats', label: 'STATS' },
        { path: '/esports', label: 'ESPORTS' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-[#1d1022]/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Area */}
                    <div className="flex items-center gap-8">
                        <NavLink to="/" className="flex items-center gap-2 group">
                             <div className="size-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                <span className="material-symbols-outlined text-white text-2xl">diamond</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-white leading-none">COSMIC</span>
                                <span className="text-sm font-bold tracking-[0.2em] text-primary leading-none">CLASH</span>
                            </div>
                        </NavLink>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `px-4 py-2 text-sm font-bold tracking-wide transition-all duration-200 rounded-md
                                        ${isActive 
                                            ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(189,43,238,0.3)]' 
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    {/* Right Action Area */}
                    <div className="flex items-center gap-4">
                        {/* Search Bar - Desktop */}
                        <div className="hidden md:flex relative group">
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="bg-[#2a2a3e] border border-white/10 text-sm rounded-full py-2 pl-4 pr-10 w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-200 placeholder-gray-500"
                            />
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-white transition-colors">
                                search
                            </span>
                        </div>

                        {/* Admin Link (Replaces User Avatar for Demo) */}
                        <button 
                            onClick={() => navigate('/admin')}
                            className="hidden sm:flex items-center gap-2 bg-[#2a2a3e] hover:bg-primary text-white px-4 py-2 rounded-lg font-bold text-xs tracking-wide border border-white/10 transition-all duration-200"
                        >
                            <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
                            ADMIN
                        </button>

                        {/* Download Button */}
                        <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-5 py-2 rounded-lg font-bold text-sm tracking-wide shadow-lg shadow-primary/20 transform hover:-translate-y-0.5 transition-all duration-200">
                            <span className="material-symbols-outlined text-lg">download</span>
                            PLAY NOW
                        </button>


                         {/* Mobile Menu Button */}
                         <button 
                            className="lg:hidden text-gray-300 hover:text-white p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                         >
                             <span className="material-symbols-outlined text-3xl">
                                 {isMenuOpen ? 'close' : 'menu'}
                             </span>
                         </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-[#1d1022] border-t border-white/10 animate-fade-in">
                    <nav className="flex flex-col p-4 space-y-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `px-4 py-3 rounded-lg text-base font-bold transition-colors
                                    ${isActive 
                                        ? 'bg-primary/20 text-primary' 
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <div className="pt-4 border-t border-white/10 space-y-3">
                            <button 
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/admin');
                                }}
                                className="w-full flex justify-center items-center gap-2 bg-[#2a2a3e] text-white py-3 rounded-lg font-bold border border-white/10"
                            >
                                <span className="material-symbols-outlined">admin_panel_settings</span>
                                ADMIN DASHBOARD
                            </button>
                            <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-bold">
                                <span className="material-symbols-outlined">download</span>
                                PLAY NOW
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
