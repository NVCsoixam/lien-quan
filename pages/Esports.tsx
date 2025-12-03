
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';
import { useData } from '../context/DataContext';

const Esports: React.FC = () => {
    const { news } = useData();
    const navigate = useNavigate();
    const [activeRegion, setActiveRegion] = useState('TG');

    // Filter news for 'Esports' category only
    const esportsNews = news.filter(item => item.category === 'Esports' || item.category === 'Tournaments');

    // Regions mapping
    const regions = [
        { id: 'AOG', label: 'AOG (Vietnam)' },
        { id: 'GCS', label: 'GCS (Taiwan)' },
        { id: 'RPL', label: 'RPL (Thailand)' },
        { id: 'TG', label: 'International (World)' },
    ];

    // Extended dummy matches data with region field
    const allMatches = [
        // TG - International
        { id: 1, region: 'TG', team1: 'Flash Wolves', team2: 'Saigon Phantom', time: '19:00', date: 'Dec 14', score: 'VS' },
        { id: 2, region: 'TG', team1: 'Buriram United', team2: 'Team Flash', time: '20:30', date: 'Dec 14', score: 'VS' },
        { id: 3, region: 'TG', team1: 'V Gaming', team2: 'Talon Esports', time: '18:00', date: 'Dec 15', score: 'VS' },
        
        // AOG - Vietnam
        { id: 4, region: 'AOG', team1: 'Saigon Phantom', team2: 'V Gaming', time: '17:00', date: 'Jan 10', score: 'VS' },
        { id: 5, region: 'AOG', team1: 'Team Flash', team2: 'Box Gaming', time: '19:30', date: 'Jan 10', score: 'VS' },

        // GCS - Taiwan
        { id: 6, region: 'GCS', team1: 'Bro Esports', team2: 'Flash Wolves', time: '18:00', date: 'Jan 12', score: 'VS' },
        
        // RPL - Thailand
        { id: 7, region: 'RPL', team1: 'Bacon Time', team2: 'Buriram United', time: '16:00', date: 'Jan 11', score: 'VS' },
    ];

    const displayMatches = allMatches.filter(m => m.region === activeRegion);

    return (
        <div className="min-h-screen pb-20">
             <div className="relative h-[50vh] w-full overflow-hidden mb-12">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${ASSETS.heroBanner})` }}
                >
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1d1022] via-[#1d1022]/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10">
                    <div className="container mx-auto flex flex-col items-center text-center">
                        <span className="material-symbols-outlined text-6xl text-primary mb-4 animate-bounce">trophy</span>
                        <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-2xl">
                            Winter Championship 2025
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl font-medium">
                            The biggest tournament of the year is here. Watch the top teams from around the world compete for the glorious cup.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest shadow-lg shadow-primary/30 transition-all">
                                Watch Live
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest border border-white/20 transition-all">
                                Schedule
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Upcoming Matches Section */}
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-4">
                        <h2 className="text-3xl font-black text-white uppercase italic">Match Schedule</h2>
                        
                        {/* Region Tabs */}
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            {regions.map(region => (
                                <button
                                    key={region.id}
                                    onClick={() => setActiveRegion(region.id)}
                                    className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all
                                        ${activeRegion === region.id 
                                            ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                                            : 'bg-[#2a2a3e] text-gray-400 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {region.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Matches List */}
                    <div className="grid gap-4 mb-8">
                        {displayMatches.length > 0 ? (
                            displayMatches.map(match => (
                                <div key={match.id} className="bg-[#2a2a3e] border border-white/5 p-4 md:p-6 rounded-xl flex flex-col md:flex-row items-center justify-between hover:border-primary/50 transition-all group animate-fade-in-up">
                                    <div className="flex items-center gap-4 md:w-1/3 justify-end w-full">
                                        <span className="text-xl font-bold text-white text-right flex-1">{match.team1}</span>
                                        <div className="size-12 bg-gray-700 rounded-full flex items-center justify-center shrink-0 border-2 border-transparent group-hover:border-primary transition-colors">
                                            <span className="material-symbols-outlined">shield</span>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-[#1d1022] px-12 py-3 rounded-lg my-4 md:my-0 border border-white/10 flex flex-col items-center w-full md:w-auto">
                                        <span className="text-3xl font-black text-primary italic">{match.score}</span>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{match.date} • {match.time}</span>
                                    </div>

                                    <div className="flex items-center gap-4 md:w-1/3 justify-start w-full">
                                        <div className="size-12 bg-gray-700 rounded-full flex items-center justify-center shrink-0 border-2 border-transparent group-hover:border-secondary transition-colors">
                                            <span className="material-symbols-outlined">security</span>
                                        </div>
                                        <span className="text-xl font-bold text-white flex-1">{match.team2}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 bg-[#2a2a3e]/50 rounded-xl border border-white/5 border-dashed">
                                <span className="material-symbols-outlined text-4xl text-gray-600 mb-2">event_busy</span>
                                <p className="text-gray-400">No upcoming matches scheduled for this region.</p>
                            </div>
                        )}
                    </div>

                    {/* Bracket Image Section */}
                    <div className="mt-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="material-symbols-outlined text-primary">tournament</span>
                            <h3 className="text-xl font-bold text-white uppercase">Tournament Bracket</h3>
                        </div>
                        <div className="w-full bg-[#2a2a3e] p-2 rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                             <div className="relative aspect-video w-full bg-black/50 flex items-center justify-center rounded-lg overflow-hidden group">
                                <img 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSFeZ3tq2vFGOnni0DJd384fFmn16YjfdeyLkm_q_l8l3I5xGIo5_iTQm2igC2WPBZhoorJSZLLelYZGZsP1DFE6VUE9_5TSZAz7jHOsrmn3Ynih6lHi1MkTPZCcWUOTmoBz1i0qju7tbxCqv5YR-9IZRwoNbJbGay77Vr-U7APfGgPh5Cvzn3a12e8fnQDZLTxT12_JYUJ8sTrR34-agcw6bjkXysqgKI-4NiP0Qi7ARgqvbaQbDNVdRtHl6r9UGgbFAeVzFNJxrb" 
                                    alt="Tournament Bracket" 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute top-4 right-4 pointer-events-none">
                                    <span className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-md">SWISS STAGE</span>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Latest Esports News */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-black text-white uppercase italic">Esports News</h2>
                        <div className="h-px flex-grow bg-white/10"></div>
                    </div>

                    {esportsNews.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {esportsNews.map((item) => (
                                <div 
                                    key={item.id} 
                                    onClick={() => navigate(`/news/${item.id}`)}
                                    className="group cursor-pointer bg-[#2a2a3e] rounded-xl overflow-hidden border border-white/5 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                                            {item.category}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <span className="text-gray-500 text-xs font-bold mb-2 block">{item.date}</span>
                                        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-[#2a2a3e] rounded-xl border border-white/5 border-dashed">
                            <p className="text-gray-400">No esports news available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Esports;
