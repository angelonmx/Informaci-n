import { useState } from 'react';
import { ChatbotProvider } from './hooks/useChatbotContext';
import { ChatPanel } from './components/ChatPanel';
import { ChatHistory } from './components/ChatHistory';
import { ServerConfig } from './components/ServerConfig';
import { SettingsPanel } from './components/SettingsPanel';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'history' | 'servers' | 'settings'>('chat');

  return (
    <ChatbotProvider>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        {/* Header */}
        <header className="bg-purple-900 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Chatbot Avanzado</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto p-4 flex flex-col md:flex-row gap-4">
          {/* Navigation Sidebar */}
          <nav className="md:w-64 bg-gray-800 rounded-lg p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeTab === 'chat' ? 'bg-purple-700' : 'hover:bg-gray-700'
                  }`}
                >
                  💬 Chat
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeTab === 'history' ? 'bg-purple-700' : 'hover:bg-gray-700'
                  }`}
                >
                  📚 Historial
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('servers')}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeTab === 'servers' ? 'bg-purple-700' : 'hover:bg-gray-700'
                  }`}
                >
                  🖥️ Servidores
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeTab === 'settings' ? 'bg-purple-700' : 'hover:bg-gray-700'
                  }`}
                >
                  ⚙️ Configuración
                </button>
              </li>
            </ul>
          </nav>

          {/* Content Area */}
          <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden flex flex-col">
            {activeTab === 'chat' && <ChatPanel />}
            {activeTab === 'history' && <ChatHistory />}
            {activeTab === 'servers' && <ServerConfig />}
            {activeTab === 'settings' && <SettingsPanel />}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 p-4 text-center text-gray-400">
          <p>Chatbot Avanzado - Versión Web</p>
        </footer>
      </div>
    </ChatbotProvider>
  );
}

export default App;
