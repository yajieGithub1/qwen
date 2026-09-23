import React, { useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import CardGrid from './components/CardGrid';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#000' : '#f5f5f7',
        color: isDark ? '#f5f5f7' : '#1d1d1f',
      }}
    >
      {/* CSS Variables for responsive sidebar */}
      <style>{`
        :root {
          --sidebar-width: 220px;
        }
        @media (max-width: 768px) {
          :root {
            --sidebar-width: 64px;
          }
        }
        
        /* Custom scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'};
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)'};
        }

        /* Line clamp */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Smooth transitions */
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>

      <TopNav isDark={isDark} onToggleTheme={toggleTheme} />
      <Sidebar
        isDark={isDark}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <CardGrid
        isDark={isDark}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default App;
