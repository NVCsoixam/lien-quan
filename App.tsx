
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Heroes from './pages/Heroes';
import News from './pages/News';
import Stats from './pages/Stats';
import Esports from './pages/Esports';
import Login from './pages/Login';
import NewsDetail from './pages/NewsDetail';

// Admin Pages
import AdminLayout from './pages/Admin/AdminLayout';
import ManageNews from './pages/Admin/ManageNews';
import ManageHeroes from './pages/Admin/ManageHeroes';
import ManageStats from './pages/Admin/ManageStats';
import RequireAuth from './components/RequireAuth';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
    return (
        <DataProvider>
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    {/* Public Routes with Navbar */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="heroes" element={<Heroes />} />
                        <Route path="news" element={<News />} />
                        <Route path="news/:id" element={<NewsDetail />} />
                        <Route path="stats" element={<Stats />} />
                        <Route path="esports" element={<Esports />} />
                    </Route>

                    {/* Authentication Route */}
                    <Route path="/login" element={<Login />} />

                    {/* Protected Admin Routes */}
                    <Route path="/admin" element={
                        <RequireAuth>
                            <AdminLayout />
                        </RequireAuth>
                    }>
                        <Route index element={<ManageNews />} />
                        <Route path="news" element={<ManageNews />} />
                        <Route path="heroes" element={<ManageHeroes />} />
                        <Route path="stats" element={<ManageStats />} />
                    </Route>
                    
                    <Route path="*" element={<Home />} />
                </Routes>
            </HashRouter>
        </DataProvider>
    );
};

export default App;
