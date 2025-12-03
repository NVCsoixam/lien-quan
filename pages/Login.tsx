
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ASSETS } from '../constants';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/admin';

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        // HARDCODED CREDENTIALS (As requested)
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isAdminAuthenticated', 'true');
            navigate(from, { replace: true });
        } else {
            setError('Incorrect username or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1d1022] relative overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${ASSETS.heroBanner})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1d1022] via-transparent to-[#1d1022]"></div>

            <div className="bg-[#2a2a3e] p-8 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <div className="size-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-white text-4xl">lock</span>
                    </div>
                    <h1 className="text-2xl font-black text-white">Admin Access</h1>
                    <p className="text-gray-400 text-sm mt-2">Please log in to continue.</p>
                </div>

                {error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-200 text-sm p-3 rounded-lg mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">error</span>
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Username</label>
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-[#1d1022] border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="Enter username (admin)"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#1d1022] border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="Enter password (admin)"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5"
                    >
                        LOGIN
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button onClick={() => navigate('/')} className="text-gray-500 hover:text-white text-sm transition-colors">
                        &larr; Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
