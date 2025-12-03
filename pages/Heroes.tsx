
import React, { useState } from 'react';
import { ASSETS } from '../constants';
import { useData } from '../context/DataContext';

const Heroes: React.FC = () => {
    const { heroes } = useData();
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filters = ['All', 'Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'];

    const filteredHeroes = heroes.filter(hero => {
        const matchesFilter = activeFilter === 'All' || hero.role === activeFilter;
        const matchesSearch = hero.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="pb-20">
            {/* Header Banner */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden mb-8">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${ASSETS.heroesBanner})` }}
                >
                     <div className="absolute inset-0 bg-gradient-to-t from-[#1d1022] to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight drop-shadow-lg">
                            Heroes & Skins
                        </h1>
                        <p className="text-gray-300 mt-2 max-w-lg">Find your champion. Master their abilities. Dominate the arena.</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10 sticky top-24 z-30 bg-[#1d1022]/95 p-4 rounded-xl border border-white/5 backdrop-blur-xl shadow-2xl">
                    {/* Search */}
                    <div className="relative w-full md:w-auto md:min-w-[300px]">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
                        <input 
                            type="text" 
                            placeholder="Find a hero..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#2a2a3e] border border-white/10 text-white rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all duration-200
                                    ${activeFilter === filter 
                                        ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {filteredHeroes.map(hero => (
                        <div key={hero.id} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-[#2a2a3e] cursor-pointer shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border border-white/5">
                            <img 
                                src={hero.image} 
                                alt={hero.name} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{hero.role}</p>
                                <h3 className="text-xl font-bold text-white">{hero.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredHeroes.length === 0 && (
                    <div className="text-center py-20">
                        <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">sentiment_dissatisfied</span>
                        <p className="text-xl text-gray-400">No heroes found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Heroes;
