import React, { useState } from 'react';

interface TopNavProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ isDark, onToggleTheme }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 backdrop-blur-xl border-b transition-colors duration-300"
      style={{
        backgroundColor: isDark ? 'rgba(28, 28, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      }}>
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 17h14M5 17c-1 0-2-1-2-2v-3l3-5c.5-1 1.5-1.5 2.5-1.5h7c1 0 2 .5 2.5 1.5l3 5v3c0 1-1 2-2 2" />
              <circle cx="7.5" cy="17" r="1.5" />
              <circle cx="17.5" cy="17" r="1.5" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight hidden sm:block"
            style={{ color: isDark ? '#fff' : '#1d1d1f' }}>
            AutoParts Pro
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
            }}
            title={isDark ? '切换明亮模式' : '切换暗黑模式'}
          >
            {isDark ? (
              <svg className="w-4.5 h-4.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm0 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-8a1 1 0 110 2h-1a1 1 0 110-2h1zM5 11a1 1 0 110 2H4a1 1 0 110-2h1zm14.07-5.66a1 1 0 010 1.41l-.71.71a1 1 0 11-1.41-1.41l.71-.71a1 1 0 011.41 0zM7.05 17.66a1 1 0 010 1.41l-.71.71a1 1 0 11-1.41-1.41l.71-.71a1 1 0 011.41 0zm11.9 0a1 1 0 01-1.41 1.41l-.71-.71a1 1 0 011.41-1.41l.71.71zM7.05 6.34a1 1 0 01-1.41 1.41l-.71-.71a1 1 0 011.41-1.41l.71.71zM12 8a4 4 0 100 8 4 4 0 000-8z"/>
              </svg>
            ) : (
              <svg className="w-4.5 h-4.5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
              </svg>
            )}
          </button>

          {/* User area */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
              }}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff'
                }}>
                U
              </div>
              <span className="text-sm hidden md:block" style={{ color: isDark ? '#e5e5e7' : '#1d1d1f' }}>
                账户
              </span>
            </button>

            {/* Dropdown menu */}
            {showUserMenu && (
              <div
                className="absolute right-0 top-12 w-48 rounded-2xl shadow-2xl py-2 overflow-hidden border"
                style={{
                  backgroundColor: isDark ? '#2c2c2e' : '#fff',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                }}
              >
                <button className="w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors"
                  style={{ color: isDark ? '#e5e5e7' : '#1d1d1f' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                  个人资料
                </button>
                <button className="w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors"
                  style={{ color: isDark ? '#e5e5e7' : '#1d1d1f' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  我的订单
                </button>
                <div className="my-1 mx-3 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />
                <button className="w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors"
                  style={{ color: isDark ? '#e5e5e7' : '#1d1d1f' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5.18-8.82a6.87 6.87 0 00-9.64 0" />
                  </svg>
                  登录 / 注册
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
