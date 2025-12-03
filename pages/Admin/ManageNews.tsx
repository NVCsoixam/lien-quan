
import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { NewsItem } from '../../types';

const ManageNews: React.FC = () => {
  const { news, addNews, updateNews, deleteNews } = useData();
  const [isEditing, setIsEditing] = useState(false);
  const [currentNews, setCurrentNews] = useState<Partial<NewsItem>>({});

  const handleEdit = (item: NewsItem) => {
    setCurrentNews(item);
    setIsEditing(true);
  };

  const handleAdd = () => {
    setCurrentNews({
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-GB').replace(/\//g, '.'),
      category: 'Updates',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwYgPLpA-3lJCHFCeEfGywm5ipv0tKAu7WICKVVJv9KUEquQIiHlQ7N65n154a62lOSjcPzcmDK2XJD6BnmB-BITzO0F6yLzyfpULGVDjLeKJ5HoUD5eRyhdI8xPenOf-1_1cQP1ZQ4HrdXJ1otROAUjWppgArA-7XJRanFxLZJjUABm_0W0Q4dCrkQneVtkj0bg7SdupwLs4CeB0e7JW0esPbLLXXa4IVoIHlImZ1Ds99EhmakBCGFjArbw_g41ITRqI-48LU-5_l',
      content: '',
      author: 'Admin'
    });
    setIsEditing(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentNews.id && currentNews.title && currentNews.category) {
      const exists = news.find(n => n.id === currentNews.id);
      if (exists) {
        updateNews(currentNews as NewsItem);
      } else {
        addNews(currentNews as NewsItem);
      }
      setIsEditing(false);
      setCurrentNews({});
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Manage News</h1>
          <p className="text-gray-400">Create, edit, and delete news articles, including Esports updates.</p>
        </div>
        <button 
          onClick={handleAdd}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
        >
          <span className="material-symbols-outlined">add</span>
          Add Article
        </button>
      </div>

      {isEditing ? (
        <div className="bg-[#2a2a3e] p-8 rounded-xl border border-white/10 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
            {news.find(n => n.id === currentNews.id) ? 'Edit Article' : 'New Article'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Title</label>
                <input 
                  required
                  type="text" 
                  value={currentNews.title || ''} 
                  onChange={e => setCurrentNews({...currentNews, title: e.target.value})}
                  className="w-full bg-[#1d1022] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Category</label>
                <select 
                  value={currentNews.category || 'Updates'} 
                  onChange={e => setCurrentNews({...currentNews, category: e.target.value})}
                  className="w-full bg-[#1d1022] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                >
                  <option value="Updates">Updates</option>
                  <option value="Esports">Esports</option>
                  <option value="Community">Community</option>
                  <option value="Events">Events</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Date</label>
                <input 
                  type="text" 
                  value={currentNews.date || ''} 
                  onChange={e => setCurrentNews({...currentNews, date: e.target.value})}
                  className="w-full bg-[#1d1022] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">Author</label>
                <input 
                  type="text" 
                  value={currentNews.author || ''} 
                  onChange={e => setCurrentNews({...currentNews, author: e.target.value})}
                  className="w-full bg-[#1d1022] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-400">Image URL</label>
                <input 
                  type="text" 
                  value={currentNews.image || ''} 
                  onChange={e => setCurrentNews({...currentNews, image: e.target.value})}
                  className="w-full bg-[#1d1022] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-400">Content (HTML allowed)</label>
                <textarea 
                  rows={8}
                  value={currentNews.content || ''} 
                  onChange={e => setCurrentNews({...currentNews, content: e.target.value})}
                  className="w-full bg-[#1d1022] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono text-sm"
                  placeholder="<p>Write your article content here...</p>"
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
                Save Article
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {news.map(item => (
            <div key={item.id} className="bg-[#2a2a3e] p-4 rounded-xl border border-white/5 flex flex-col md:flex-row gap-6 items-center hover:bg-[#32324a] transition-colors group">
              <img src={item.image} alt={item.title} className="w-full md:w-32 h-20 object-cover rounded-lg" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase ${
                    item.category === 'Esports' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-xs">{item.date}</span>
                </div>
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
              </div>
              <div className="flex gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => handleEdit(item)}
                  className="p-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all"
                  title="Edit"
                >
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button 
                  onClick={() => {
                    if(window.confirm('Delete this article?')) deleteNews(item.id);
                  }}
                  className="p-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                  title="Delete"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageNews;
