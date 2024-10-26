import { User } from 'lucide-react';

export default function UserProfile() {
  return (
    <div className="border-t border-gray-700 p-2">
      <button className="flex items-center gap-3 w-full p-3 rounded-md hover:bg-gray-700 transition">
        <User className="w-5 h-5" />
        <span className="text-sm">ユーザー設定</span>
      </button>
    </div>
  );
}