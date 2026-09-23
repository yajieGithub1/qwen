import React, { useState } from 'react';
import { categories, Category } from '../data/categories';
import { getIconComponent } from './Icons';

interface SidebarProps {
  isDark: boolean;
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDark, selectedCategory, onSelectCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(cat =>
    cat.name.includes(searchQuery) || cat.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside
      className="fixed left-0 top-14 bottom-0 z-40 flex flex-col transition-all duration-300 border-r overflow-hidden"
      style={{
        width: 'var(--sidebar-width)',
        backgroundColor: isDark ? 'rgba(28, 28, 30, 0.95)' : 'rgba(242, 242, 247, 0.95)',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Search */}
      <div className="p-3 pb-2">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDark ? '#8e8e93' : '#86868b'}
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="搜索零部件..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl text-sm outline-none transition-all duration-200"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
              color: isDark ? '#fff' : '#1d1d1f',
              border: '1px solid transparent',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#667eea';
              e.target.style.backgroundColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'transparent';
              e.target.style.backgroundColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)';
            }}
          />
        </div>
      </div>

      {/* Category list */}
      <nav className="flex-1 overflow-y-auto px-2 pb-4 scrollbar-thin">
        {/* All items */}
        <button
          onClick={() => onSelectCategory(null)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 transition-all duration-200 group"
          style={{
            backgroundColor: selectedCategory === null
              ? (isDark ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)')
              : 'transparent',
          }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
            style={{
              backgroundColor: selectedCategory === null
                ? 'rgba(102, 126, 234, 0.3)'
                : (isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'),
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke={selectedCategory === null ? '#667eea' : (isDark ? '#8e8e93' : '#86868b')} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </div>
          <span
            className="text-sm font-medium truncate sidebar-text hidden md:block"
            style={{
              color: selectedCategory === null
                ? '#667eea'
                : (isDark ? '#e5e5e7' : '#1d1d1f'),
            }}
          >
            全部零部件
          </span>
        </button>

        {/* Categories */}
        {filteredCategories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            isSelected={selectedCategory === category.id}
            isDark={isDark}
            onSelect={() => onSelectCategory(category.id)}
          />
        ))}

        {filteredCategories.length === 0 && (
          <div className="text-center py-8 text-sm" style={{ color: isDark ? '#8e8e93' : '#86868b' }}>
            未找到匹配的零部件类型
          </div>
        )}
      </nav>
    </aside>
  );
};

interface CategoryItemProps {
  category: Category;
  isSelected: boolean;
  isDark: boolean;
  onSelect: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, isSelected, isDark, onSelect }) => {
  const IconComponent = getIconComponent(category.id);

  return (
    <button
      onClick={onSelect}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 transition-all duration-200 group"
      style={{
        backgroundColor: isSelected
          ? `${category.color}20`
          : 'transparent',
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{
          backgroundColor: isSelected
            ? `${category.color}30`
            : (isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'),
        }}
      >
        <IconComponent
          className="w-4.5 h-4.5"
          color={isSelected ? category.color : (isDark ? '#8e8e93' : '#86868b')}
        />
      </div>
      <span
        className="text-sm font-medium truncate sidebar-text hidden md:block"
        style={{
          color: isSelected ? category.color : (isDark ? '#e5e5e7' : '#1d1d1f'),
        }}
      >
        {category.name}
      </span>
    </button>
  );
};

export default Sidebar;
