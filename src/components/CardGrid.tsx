import React from 'react';
import { parts, Part } from '../data/parts';
import { categories } from '../data/categories';

interface CardGridProps {
  isDark: boolean;
  selectedCategory: string | null;
}

const CardGrid: React.FC<CardGridProps> = ({ isDark, selectedCategory }) => {
  const filteredParts = selectedCategory
    ? parts.filter(p => p.category === selectedCategory)
    : parts;

  const selectedCategoryData = selectedCategory
    ? categories.find(c => c.id === selectedCategory)
    : null;

  return (
    <main
      className="pt-14 transition-all duration-300 min-h-screen"
      style={{
        marginLeft: 'var(--sidebar-width)',
        backgroundColor: isDark ? '#000' : '#f5f5f7',
      }}
    >
      <div className="p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ color: isDark ? '#f5f5f7' : '#1d1d1f' }}>
            {selectedCategoryData ? selectedCategoryData.name : '全部零部件'}
          </h1>
          <p className="mt-1 text-sm" style={{ color: isDark ? '#8e8e93' : '#86868b' }}>
            {selectedCategoryData
              ? `${selectedCategoryData.nameEn} · ${filteredParts.length} 件商品`
              : `${filteredParts.length} 件精选定制零部件`
            }
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {filteredParts.map((part) => (
            <PartCard key={part.id} part={part} isDark={isDark} />
          ))}
        </div>

        {filteredParts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-lg font-medium" style={{ color: isDark ? '#8e8e93' : '#86868b' }}>
              该分类暂无零部件
            </p>
            <p className="text-sm mt-1" style={{ color: isDark ? '#636366' : '#aeaeb2' }}>
              请选择其他分类查看
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

interface PartCardProps {
  part: Part;
  isDark: boolean;
}

const PartCard: React.FC<PartCardProps> = ({ part, isDark }) => {
  const category = categories.find(c => c.id === part.category);

  return (
    <div
      className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      style={{
        backgroundColor: isDark ? '#1c1c1e' : '#fff',
        boxShadow: isDark
          ? '0 2px 8px rgba(0,0,0,0.3)'
          : '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      {/* Square image area */}
      <div
        className="relative aspect-square flex items-center justify-center overflow-hidden"
        style={{
          background: isDark
            ? `linear-gradient(135deg, ${category?.color}15 0%, ${category?.color}05 100%)`
            : `linear-gradient(135deg, ${category?.color}10 0%, ${category?.color}03 100%)`,
        }}
      >
        {/* Emoji as placeholder image */}
        <span className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
          {part.image}
        </span>

        {/* Tag */}
        {part.tag && (
          <div
            className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: category?.color || '#667eea',
              color: '#fff',
            }}
          >
            {part.tag}
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${category?.color}40 0%, ${category?.color}20 100%)`,
          }}
        >
          <button
            className="px-4 py-2 rounded-full text-sm font-medium text-white transition-transform duration-200 hover:scale-105"
            style={{
              backgroundColor: category?.color || '#667eea',
            }}
          >
            查看详情
          </button>
        </div>
      </div>

      {/* Bottom info */}
      <div className="p-3">
        <h3
          className="text-sm font-semibold truncate"
          style={{ color: isDark ? '#f5f5f7' : '#1d1d1f' }}
        >
          {part.name}
        </h3>
        <p
          className="text-xs mt-1 line-clamp-2 leading-relaxed"
          style={{ color: isDark ? '#8e8e93' : '#86868b' }}
        >
          {part.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span
            className="text-sm font-bold"
            style={{ color: category?.color || '#667eea' }}
          >
            {part.price}
          </span>
          <button
            className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
            }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#8e8e93' : '#86868b'} strokeWidth="2" strokeLinecap="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
