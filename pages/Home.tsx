
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';
import { useData } from '../context/DataContext';

const Home: React.FC = () => {
    const { news } = useData();
    const navigate = useNavigate();
    // Display only the latest 4 news items
    const displayNews = news.slice(0, 4);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[85vh] w-full overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${ASSETS.heroBanner})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d1022] via-[#1d1022]/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1d1022]/80 via-transparent to-transparent"></div>
                </div>
                
                <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full relative z-10 flex items-center">
                    <div className="max-w-2xl animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">New Update</span>
                            <span className="text-gray-300 text-sm font-medium tracking-wide">Version 4.0 Live Now</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4 drop-shadow-2xl">
                            WINTER <br/> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">BATTLE 2025</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg drop-shadow-md">
                            Experience the ultimate arena. Join millions of players in the most intense 5v5 mobile MOBA experience. New heroes, new skins, and a massive prize pool await.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#F030BE] hover:bg-[#d020a0] text-white px-8 py-4 rounded-lg font-bold text-lg tracking-widest clip-path-polygon transition-all duration-300 shadow-[0_0_20px_rgba(240,48,190,0.4)]">
                                JOIN BATTLE
                            </button>
                             <NavLink to="/news" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg tracking-widest transition-all duration-300">
                                READ PATCH NOTES
                            </NavLink>
                        </div>
                        
                        <div className="mt-12 flex items-center gap-8">
                            <div>
                                <p className="text-cyan-300 text-sm font-bold uppercase tracking-wider mb-1">Total Prize Pool</p>
                                <p className="text-4xl font-black text-white">$250,000</p>
                            </div>
                            <div className="w-px h-12 bg-white/20"></div>
                            <div>
                                <p className="text-pink-400 text-sm font-bold uppercase tracking-wider mb-1">Active Players</p>
                                <p className="text-4xl font-black text-white">10M+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="py-20 bg-[#1d1022]">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                             <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">Latest News</h2>
                             <div className="h-1 w-20 bg-primary rounded-full"></div>
                        </div>
                        <NavLink to="/news" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
                            VIEW ALL <span className="material-symbols-outlined">arrow_forward</span>
                        </NavLink>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayNews.map((item) => (
                            <div 
                                key={item.id} 
                                className="group cursor-pointer"
                                onClick={() => navigate(`/news/${item.id}`)}
                            >
                                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-white uppercase border border-white/10 z-20">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-gray-500 text-xs font-medium">{item.date}</span>
                                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 text-center md:hidden">
                        <NavLink to="/news" className="inline-flex items-center gap-2 text-primary font-bold">
                            VIEW ALL <span className="material-symbols-outlined">arrow_forward</span>
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
