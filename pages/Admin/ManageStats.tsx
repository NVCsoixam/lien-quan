
import React from 'react';
import { useData } from '../../context/DataContext';
import { HeroStat } from '../../types';

const ManageStats: React.FC = () => {
  const { stats, updateStat } = useData();

  const handleStatChange = (id: string, field: keyof HeroStat, value: string | number) => {
    const stat = stats.find(s => s.id === id);
    if (stat) {
      updateStat({
        ...stat,
        [field]: value
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Manage Statistics</h1>
        <p className="text-gray-400">Update live win rates, pick rates, and tier rankings directly.</p>
      </div>

      <div className="bg-[#2a2a3e] rounded-xl border border-white/5 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1d1022] border-b border-white/10">
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider w-1/4">Hero</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Rank (S-D)</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Win Rate %</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Pick Rate %</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Ban Rate %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {stats.map((stat) => (
                <tr key={stat.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <img className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src={stat.image} alt={stat.name} />
                      <span className="font-bold text-white">{stat.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <select
                      value={stat.rank}
                      onChange={(e) => handleStatChange(stat.id, 'rank', e.target.value)}
                      className="bg-[#1d1022] border border-white/10 text-white text-sm rounded focus:ring-primary focus:border-primary p-1.5 font-bold text-center w-16"
                    >
                      {['S', 'A', 'B', 'C', 'D'].map(rank => (
                        <option key={rank} value={rank}>{rank}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      step="0.1"
                      value={stat.winRate}
                      onChange={(e) => handleStatChange(stat.id, 'winRate', parseFloat(e.target.value))}
                      className="bg-[#1d1022] border border-white/10 text-white text-sm rounded focus:ring-primary focus:border-primary p-2 w-24"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      step="0.1"
                      value={stat.pickRate}
                      onChange={(e) => handleStatChange(stat.id, 'pickRate', parseFloat(e.target.value))}
                      className="bg-[#1d1022] border border-white/10 text-white text-sm rounded focus:ring-primary focus:border-primary p-2 w-24"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      step="0.1"
                      value={stat.banRate}
                      onChange={(e) => handleStatChange(stat.id, 'banRate', parseFloat(e.target.value))}
                      className="bg-[#1d1022] border border-white/10 text-white text-sm rounded focus:ring-primary focus:border-primary p-2 w-24"
                    />
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

export default ManageStats;
