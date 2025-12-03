
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';
import { useData } from '../context/DataContext';

const News: React.FC = () => {
    const { news } = useData();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pb-20">
             <div className="relative h-[40vh] w-full overflow-hidden mb-12">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${ASSETS.newsBanner})` }}
                >
                     <div className="absolute inset-0 bg-gradient-to-b from-[#1d1022]/60 to-[#1d1022]"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide mb-3 inline-block">Latest Update</span>
                        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-4xl mb-4">
                            Major Update 4.0: New Hero Elara, Map Changes & Balance Adjustments
                        </h1>
                        <p className="text-gray-300 max-w-2xl text-sm md:text-base">
                            Welcome to the biggest update of the year! Discover Elara, the Starlight Weaver, along with massive changes to the jungle, item reworks, and more.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                            <h2 className="text-2xl font-bold text-white">All News</h2>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">All</button>
                                <button className="px-3 py-1 rounded-full bg-white/5 text-gray-400 hover:text-white text-xs font-bold">Events</button>
                                <button className="px-3 py-1 rounded-full bg-white/5 text-gray-400 hover:text-white text-xs font-bold">Updates</button>
                                <button className="px-3 py-1 rounded-full bg-white/5 text-gray-400 hover:text-white text-xs font-bold">Esports</button>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {news.map((item) => (
                                <div 
                                    key={item.id} 
                                    onClick={() => navigate(`/news/${item.id}`)}
                                    className="flex flex-col md:flex-row gap-6 bg-[#2a2a3e] rounded-xl overflow-hidden hover:bg-[#32324a] transition-colors group cursor-pointer border border-white/5 p-4"
                                >
                                    <div className="w-full md:w-64 h-48 md:h-40 shrink-0 rounded-lg overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex flex-col justify-center py-2">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-primary text-xs font-bold uppercase tracking-wider">{item.category}</span>
                                            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                            <span className="text-gray-500 text-xs">{item.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-2">
                                            {item.content ? item.content.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...' : 'Click to read more...'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Pagination */}
                        <div className="flex justify-center mt-12 gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white hover:bg-white/10"><span className="material-symbols-outlined">chevron_left</span></button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white hover:bg-white/10">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white hover:bg-white/10">3</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white hover:bg-white/10"><span className="material-symbols-outlined">chevron_right</span></button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/4 space-y-8">
                        <div className="bg-[#2a2a3e] p-6 rounded-xl border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-4 border-l-4 border-primary pl-3">Trending</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-4 items-start cursor-pointer group">
                                        <span className="text-4xl font-black text-white/10 group-hover:text-primary/40 transition-colors">0{i}</span>
                                        <div>
                                            <h4 className="text-white font-medium text-sm group-hover:text-primary transition-colors">New Championship Skins Revealed</h4>
                                            <span className="text-xs text-gray-500">2 hours ago</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 rounded-xl text-center">
                            <h3 className="text-xl font-bold text-white mb-2">Join the Community</h3>
                            <p className="text-gray-300 text-sm mb-6">Connect with thousands of players on our official Discord.</p>
                            <button className="bg-white text-blue-900 w-full py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">forum</span>
                                JOIN DISCORD
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
