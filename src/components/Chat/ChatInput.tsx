import { RotateCcw, Send } from 'lucide-react';
import { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onReset: () => void;
}

export default function ChatInput({ onSendMessage, onReset }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#343541] via-[#343541] to-transparent pt-6 pb-4">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4">
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="ChatGPT にメッセージを送信する"
            className="w-full p-4 pr-24 bg-[#40414F] rounded-lg text-white placeholder-gray-400 focus:outline-none"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              type="submit"
              className="text-gray-400 hover:text-white transition"
              title="メッセージを送信"
            >
              <Send className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onReset}
              className="text-gray-400 hover:text-white transition"
              title="チャットをリセット"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}