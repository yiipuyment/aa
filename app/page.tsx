'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('agent');
  
  const tabs = [
    { id: 'agent', name: '🤖 Agent', color: 'bg-blue-500' },
    { id: 'terminal', name: '💻 Terminal', color: 'bg-green-500' },
    { id: 'preview', name: '👁️ Preview', color: 'bg-purple-500' },
    { id: 'files', name: '📁 Files', color: 'bg-yellow-500' },
    { id: 'settings', name: '⚙️ Settings', color: 'bg-gray-500' },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="h-14 bg-white border-b flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🤖</div>
          <h1 className="text-xl font-bold text-gray-800">AI Workspace Pro</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">Online</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden p-4">
        <div className="h-full bg-white rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {tabs.find(t => t.id === activeTab)?.name.split(' ')[0]}
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              {tabs.find(t => t.id === activeTab)?.name}
            </h2>
            <p className="text-gray-500">
              Component coming soon...
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="h-16 bg-white border-t flex items-center justify-around px-2 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all ${
              activeTab === tab.id
                ? `${tab.color} text-white scale-110`
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="text-2xl">{tab.name.split(' ')[0]}</span>
            <span className="text-xs font-medium">{tab.name.split(' ')[1]}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
