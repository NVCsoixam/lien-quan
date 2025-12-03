
import React, { createContext, useContext, useState, useEffect } from 'react';
import { HEROES, NEWS, STATS } from '../constants';
import { Hero, NewsItem, HeroStat } from '../types';

interface DataContextType {
  heroes: Hero[];
  news: NewsItem[];
  stats: HeroStat[];
  addHero: (hero: Hero) => void;
  updateHero: (hero: Hero) => void;
  deleteHero: (id: string) => void;
  addNews: (news: NewsItem) => void;
  updateNews: (news: NewsItem) => void;
  deleteNews: (id: string) => void;
  updateStat: (stat: HeroStat) => void;
  resetData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize from LocalStorage or Constants
  const [heroes, setHeroes] = useState<Hero[]>(() => {
    const saved = localStorage.getItem('cc_heroes');
    return saved ? JSON.parse(saved) : HEROES;
  });

  const [news, setNews] = useState<NewsItem[]>(() => {
    const saved = localStorage.getItem('cc_news');
    return saved ? JSON.parse(saved) : NEWS;
  });

  const [stats, setStats] = useState<HeroStat[]>(() => {
    const saved = localStorage.getItem('cc_stats');
    return saved ? JSON.parse(saved) : STATS;
  });

  // Sync to LocalStorage
  useEffect(() => localStorage.setItem('cc_heroes', JSON.stringify(heroes)), [heroes]);
  useEffect(() => localStorage.setItem('cc_news', JSON.stringify(news)), [news]);
  useEffect(() => localStorage.setItem('cc_stats', JSON.stringify(stats)), [stats]);

  // Actions
  const addHero = (hero: Hero) => setHeroes(prev => [...prev, hero]);
  const updateHero = (updatedHero: Hero) => {
    setHeroes(prev => prev.map(h => h.id === updatedHero.id ? updatedHero : h));
  };
  const deleteHero = (id: string) => setHeroes(prev => prev.filter(h => h.id !== id));

  const addNews = (item: NewsItem) => setNews(prev => [item, ...prev]);
  const updateNews = (updatedItem: NewsItem) => {
    setNews(prev => prev.map(n => n.id === updatedItem.id ? updatedItem : n));
  };
  const deleteNews = (id: string) => setNews(prev => prev.filter(n => n.id !== id));

  const updateStat = (updatedStat: HeroStat) => {
    setStats(prev => prev.map(s => s.id === updatedStat.id ? updatedStat : s));
  };

  const resetData = () => {
    setHeroes(HEROES);
    setNews(NEWS);
    setStats(STATS);
    localStorage.clear();
    window.location.reload();
  };

  return (
    <DataContext.Provider value={{ 
      heroes, news, stats, 
      addHero, updateHero, deleteHero, 
      addNews, updateNews, deleteNews, 
      updateStat, resetData 
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
