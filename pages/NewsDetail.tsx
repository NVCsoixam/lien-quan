
import React, { useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useData } from '../context/DataContext';

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { news } = useData();
    const article = news.find(n => n.id === id);
    const relatedNews = news.filter(n => n.id !== id).slice(0, 3);

    // Categories mapping to match the visual style requested (Vietnamese/English)
    const categories = [
        { label: 'All', path: '/news' },
        { label: 'Updates', path: '/news' },
        { label: 'Shop', path: '/news' },
        { label: 'Events', path: '/news' },
        { label: 'Esports', path: '/esports' },
        { label: 'Guides', path: '/news' },
    ];

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
                    <button onClick={() => navigate('/news')} className="text-primary hover:underline">Return to News</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#1d1022] py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* LEFT COLUMN - Navigation Categories */}
                    <div className="lg:w-[15%] hidden lg:flex flex-col gap-4">
                        {categories.map((cat, idx) => (
                            <NavLink 
                                key={idx} 
                                to={cat.path}
                                className={({isActive}) => `
                                    relative overflow-hidden rounded-lg h-12 flex items-center px-4 font-bold text-sm tracking-wide transition-all
                                    ${cat.label === 'All' ? 'bg-[#2a2a3e] border-l-4 border-primary text-white' : 'bg-[#2a2a3e]/50 text-gray-400 hover:text-white hover:bg-[#2a2a3e]'}
                                `}
                            >
                                <span className="uppercase">{cat.label}</span>
                                {cat.label === 'Updates' && <span className="absolute right-2 text-white/10 material-symbols-outlined">settings</span>}
                                {cat.label === 'Shop' && <span className="absolute right-2 text-white/10 material-symbols-outlined">shopping_cart</span>}
                                {cat.label === 'Events' && <span className="absolute right-2 text-white/10 material-symbols-outlined">event</span>}
                            </NavLink>
                        ))}
                    </div>

                    {/* MIDDLE COLUMN - Article Content */}
                    <div className="lg:w-[60%] w-full">
                        <article className="animate-fade-in-up">
                            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 uppercase">
                                {article.title}
                            </h1>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 border-b border-white/10 pb-6">
                                <span className="text-primary font-bold">{article.date}</span>
                                <span>|</span>
                                <span>Written by <span className="text-gray-200">{article.author || 'Admin'}</span></span>
                                
                                <div className="ml-auto flex gap-2">
                                    <button className="bg-[#1877F2] text-white px-3 py-1 rounded text-xs font-bold flex items-center gap-1 hover:opacity-90 transition-opacity">
                                        <span className="material-symbols-outlined text-sm">share</span> Share
                                    </button>
                                </div>
                            </div>

                            <div className="prose prose-invert prose-lg max-w-none">
                                <p className="font-bold text-xl text-gray-200 mb-6 italic">
                                    2025 marks a special journey for our global technology brand partnership, bringing not just breakthrough products but becoming a trusted companion for the gaming community.
                                </p>
                                
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="w-full rounded-xl shadow-2xl mb-8 border border-white/10"
                                />

                                <div 
                                    className="text-gray-300 space-y-4"
                                    dangerouslySetInnerHTML={{ __html: article.content || '' }} 
                                />
                            </div>
                        </article>
                    </div>

                    {/* RIGHT COLUMN - Related Articles */}
                    <div className="lg:w-[25%] w-full">
                        <div className="sticky top-24">
                            <h3 className="text-xl font-bold text-white uppercase mb-6 border-l-4 border-primary pl-3">
                                Other Articles
                            </h3>
                            
                            <div className="flex flex-col gap-6">
                                {relatedNews.map(item => (
                                    <div 
                                        key={item.id} 
                                        onClick={() => {
                                            navigate(`/news/${item.id}`);
                                            window.scrollTo(0,0);
                                        }}
                                        className="group cursor-pointer flex flex-col gap-2"
                                    >
                                        <div className="relative overflow-hidden rounded-lg aspect-video">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase">
                                                {item.category}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs text-gray-500">{item.date}</span>
                                            <h4 className="font-bold text-white text-sm leading-snug group-hover:text-primary transition-colors line-clamp-3">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 relative overflow-hidden rounded-xl h-64 border border-white/10 group cursor-pointer">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSFeZ3tq2vFGOnni0DJd384fFmn16YjfdeyLkm_q_l8l3I5xGIo5_iTQm2igC2WPBZhoorJSZLLelYZGZsP1DFE6VUE9_5TSZAz7jHOsrmn3Ynih6lHi1MkTPZCcWUOTmoBz1i0qju7tbxCqv5YR-9IZRwoNbJbGay77Vr-U7APfGgPh5Cvzn3a12e8fnQDZLTxT12_JYUJ8sTrR34-agcw6bjkXysqgKI-4NiP0Qi7ARgqvbaQbDNVdRtHl6r9UGgbFAeVzFNJxrb" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                    <span className="material-symbols-outlined text-4xl text-accent-yellow mb-2 animate-bounce">emoji_events</span>
                                    <h4 className="font-black text-xl italic uppercase text-white">All-Star Showmatch</h4>
                                    <button className="mt-4 bg-accent-yellow text-black font-bold px-4 py-2 rounded uppercase text-sm">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
