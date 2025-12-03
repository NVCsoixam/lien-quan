import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#150c18] border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    {/* Logos */}
                    <div className="flex items-center gap-8 mb-8 md:mb-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                         <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-4xl text-white">sports_esports</span>
                            <span className="font-bold text-xl">GAME STUDIO</span>
                         </div>
                         <div className="h-8 w-px bg-white/20"></div>
                         <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-4xl text-white">token</span>
                            <span className="font-bold text-xl">PUBLISHER</span>
                         </div>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        {['facebook', 'discord', 'youtube_activity', 'tactic'].map((icon, idx) => (
                            <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-gray-400 transition-all duration-300">
                                <span className="material-symbols-outlined text-xl">{icon}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 pb-8">
                    <div className="space-y-4">
                        <h3 className="font-bold text-white mb-2">ABOUT</h3>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Game Introduction</a>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Our Team</a>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Careers</a>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-white mb-2">SUPPORT</h3>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Help Center</a>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Report Issue</a>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">System Requirements</a>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-white mb-2">COMMUNITY</h3>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Forums</a>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Discord Server</a>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Content Creators</a>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-white mb-2">LEGAL</h3>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Privacy Policy</a>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Terms of Service</a>
                        <a href="#" className="block text-gray-400 hover:text-primary text-sm">Cookie Policy</a>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-xs mt-8">
                    <p>&copy; 2025 Cosmic Clash Platform. All rights reserved. Trademarks belong to their respective owners.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;