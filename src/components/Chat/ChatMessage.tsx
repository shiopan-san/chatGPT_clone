import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  role: 'assistant' | 'user';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';
  
  return (
    <div className={`py-4 px-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`max-w-3xl mx-auto flex ${isUser ? 'flex-row-reverse' : ''} gap-4`}>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
          isUser ? 'bg-blue-500' : 'bg-[#19C37D]'
        }`}>
          {isUser ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-5 h-5 text-white" />
          )}
        </div>
        <div className={`flex-1 max-w-[80%] ${isUser ? 'text-right' : 'text-left'}`}>
          <div className={`inline-block px-4 py-2 text-white rounded-2xl ${
            isUser
              ? 'bg-blue-500 rounded-tr-sm'
              : 'bg-[#444654] rounded-tl-sm'
          }`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}