import { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default function ChatInterface() {
  const [messages, setMessages] = useState<Array<{ role: 'assistant' | 'user'; content: string }>>([]);

  const handleSendMessage = (message: string) => {
    setMessages([
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: 'この機能はデモ用です。実際のAI応答は実装されていません。' },
    ]);
  };

  const handleReset = () => {
    setMessages([]);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto pt-4 pb-32">
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
        </div>
      </div>
      <ChatInput onSendMessage={handleSendMessage} onReset={handleReset} />
    </div>
  );
}