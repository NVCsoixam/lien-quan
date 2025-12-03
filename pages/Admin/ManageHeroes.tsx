
import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Hero } from '../../types';

const ManageHeroes: React.FC = () => {
  const { heroes, addHero, updateHero, deleteHero } = useData();
  const [isEditing, setIsEditing] = useState(false);
  const [currentHero, setCurrentHero] = useState<Partial<Hero>>({});

  const handleEdit = (hero: Hero) => {
    setCurrentHero(hero);
    setIsEditing(true);
  };

  const handleAdd = () => {
    setCurrentHero({
      id: Date.now().toString(),
      role: 'Fighter',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABuMbDooEokXl61wxk9igpurVnSIG7acUEUHU_PR29ldbUU7nb3uwHj0f9-vwsHxauOF5WkabkyfbymkfOKI3R0FaDCNcHZzEVcv_MySqgInFgQEQ9yoJ_bU53eS7nzT5SRvYwTmQMZeBWLayeC-BKs_yoh8dIqbBkszXUQDuErZCBiwKNZi6xlo8g5yEwKaa4_m62pZcdzUWfA1HlNlISUsm5g6YkN6loeg6aDINFA8Q_buTa7LryW4o_7qa3ObXTJpqHQt5Dwurv'
    });
    setIsEditing(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentHero.id && currentHero.name && currentHero.role) {
      const exists = heroes.find(h => h.id === currentHero.id);
      if (exists) {
        updateHero(currentHero as Hero);
      } else {
        addHero(currentHero as Hero);
      }
      setIsEditing(false);
      setCurrentHero({});
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Manage Heroes</h1>
          <p className="text-gray-400">Add new champions or update existing hero details.</p>
        </div>
        <button 
          onClick={handleAdd}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
        >
          <span className="material-symbols-outlined">add</span>
          Add Hero
        </button>
      </div>

      {isEditing ? (
        <div className="bg-[#2a2a3e] p-8 rounded-xl border border-white/10 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
            {heroes.find(h => h.id === currentHero.id) ? 'Edit Hero' : 'New Hero'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Hero Name</label>
                <input 
                  required
                  type="text" 
                  value={currentHero.name || ''} 
                  onChange={e => setCurrentHero({...currentHero, name: e.target.value})}
                  className="w-full bg-[#1d1022] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Role</label>
                <select 
                  value={currentHero.role || 'Fighter'} 
                  onChange={e => setCurrentHero({...currentHero, role: e.target.value as any})}
                  className="w-full bg-[#1d1022] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                >
                  {['Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'].map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-400">Image URL</label>
                <input 
                  type="text" 
                  value={currentHero.image || ''} 
                  onChange={e => setCurrentHero({...currentHero, image: e.target.value})}
                  className="w-full bg-[#1d1022] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button 
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-6 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/20 transition-all"
              >
                Save Hero
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {heroes.map(hero => (
            <div key={hero.id} className="bg-[#2a2a3e] rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all group relative">
              <div className="aspect-[3/4] relative">
                <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                   <button 
                      onClick={() => handleEdit(hero)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      EDIT
                   </button>
                   <button 
                      onClick={() => {
                        if(window.confirm(`Delete ${hero.name}?`)) deleteHero(hero.id);
                      }}
                      className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                    >
                      DELETE
                   </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold">{hero.name}</h3>
                <p className="text-primary text-sm font-medium">{hero.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageHeroes;
