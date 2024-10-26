import { Send } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 max-w-3xl mx-auto p-4">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="ChatGPT にメッセージを送信する"
          className="w-full p-4 pr-12 bg-[#40414f] rounded-lg text-white placeholder-gray-400 focus:outline-none"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}