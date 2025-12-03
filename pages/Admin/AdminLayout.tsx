
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const AdminLayout: React.FC = () => {
  const { resetData } = useData();
  const navigate = useNavigate();

  const navItems = [
    { path: '/admin/news', icon: 'newspaper', label: 'Manage News' },
    { path: '/admin/heroes', icon: 'swords', label: 'Manage Heroes' },
    { path: '/admin/stats', icon: 'monitoring', label: 'Manage Stats' },
  ];

  return (
    <div className="min-h-screen flex bg-[#150c18] text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1d1022] border-r border-white/10 flex flex-col fixed h-full z-10">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
           <NavLink to="/" className="flex items-center gap-2 group">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">diamond</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">ADMIN<span className="text-primary">PANEL</span></span>
          </NavLink>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
            <button 
                onClick={() => {
                    if(window.confirm('Reset all data to default constants? This cannot be undone.')) {
                        resetData();
                    }
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors"
            >
                <span className="material-symbols-outlined">restart_alt</span>
                <span className="font-medium">Reset Data</span>
            </button>
            <button 
                onClick={() => navigate('/')}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
            >
                <span className="material-symbols-outlined">logout</span>
                <span className="font-medium">Exit Admin</span>
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
