
import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const Stats: React.FC = () => {
    const { stats } = useData();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStats = stats.filter(stat => 
        stat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getRankColor = (rank: string) => {
        switch(rank) {
            case 'S': return 'bg-primary text-white border-primary';
            case 'A': return 'bg-accent-green text-white border-accent-green';
            case 'B': return 'bg-accent-blue text-white border-accent-blue';
            case 'C': return 'bg-accent-yellow text-black border-accent-yellow';
            default: return 'bg-gray-600 text-white';
        }
    };

    const getBarColor = (rank: string) => {
        switch(rank) {
            case 'S': return 'bg-primary';
            case 'A': return 'bg-accent-green';
            case 'B': return 'bg-accent-blue';
            case 'C': return 'bg-accent-yellow';
            default: return 'bg-gray-600';
        }
    };

    return (
        <div className="min-h-screen py-12 container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-4xl font-black text-white mb-2">Hero Statistics</h1>
                <p className="text-gray-400">Detailed win rates, pick rates, and ban rates for the current meta (Season 24).</p>
            </div>

            {/* Filter Bar */}
            <div className="bg-[#2a2a3e] p-4 rounded-xl border border-white/5 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                    <input 
                        type="text" 
                        placeholder="Search Hero..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#1d1022] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                </div>
                
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                    {['All', 'Top', 'Jungle', 'Mid', 'Bot', 'Support'].map((role) => (
                        <button key={role} className="px-4 py-2 rounded-lg bg-[#1d1022] border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 transition-colors text-sm font-bold">
                            {role}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#2a2a3e] rounded-xl border border-white/5 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#1d1022] border-b border-white/10">
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider w-1/4">Hero</th>
                                <th className="px-6 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Tier</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider w-1/4">Win Rate</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Pick Rate</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Ban Rate</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredStats.map((stat) => (
                                <tr key={stat.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 rounded-full p-0.5 bg-gradient-to-br from-white/20 to-transparent">
                                                <img className="h-full w-full rounded-full object-cover" src={stat.image} alt={stat.name} />
                                            </div>
                                            <span className="font-bold text-white text-lg">{stat.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className={`inline-flex items-center justify-center size-8 rounded-lg font-black border ${getRankColor(stat.rank)} bg-opacity-20 border-opacity-30`}>
                                            {stat.rank}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <span className="text-white font-bold w-12">{stat.winRate}%</span>
                                            <div className="w-full max-w-[140px] h-2 bg-[#1d1022] rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full rounded-full ${getBarColor(stat.rank)}`} 
                                                    style={{ width: `${stat.winRate}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-300 font-medium">
                                        {stat.pickRate}%
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-300 font-medium">
                                        {stat.banRate}%
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Stats;
