import { useState } from 'react';
import ChatInterface from './components/Chat/ChatInterface';
import ModelSelector from './components/ModelSelector/ModelSelector';

function App() {
  const [isModelSelectorOpen, setIsModelSelectorOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gpt-4o-2024-08-06');

  return (
    <div className="flex flex-col h-screen bg-[#343541]">
      <header className="flex items-center px-4 py-2 bg-[#202123]">
        <button
          onClick={() => setIsModelSelectorOpen(!isModelSelectorOpen)}
          className="text-white hover:bg-[#2A2B32] px-3 py-1 rounded-lg flex items-center gap-2"
        >
          <span>{selectedModel}</span>
          <span className="text-xs">▼</span>
        </button>
      </header>

      {isModelSelectorOpen && (
        <ModelSelector 
          selectedModel={selectedModel}
          onSelect={setSelectedModel}
          onClose={() => setIsModelSelectorOpen(false)} 
        />
      )}

      <ChatInterface />
    </div>
  );
}

export default App;