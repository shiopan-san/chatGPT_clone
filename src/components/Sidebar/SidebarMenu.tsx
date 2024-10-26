import { Menu, Plus, Star } from 'lucide-react';
import SidebarMenuItem from './SidebarMenuItem';
import UserProfile from './UserProfile';

export default function SidebarMenu() {
  return (
    <div className="flex flex-col h-screen bg-[#202123] w-[260px] text-gray-200">
      <div className="p-2">
        <button className="flex items-center gap-3 w-full p-3 rounded-md hover:bg-gray-700 transition">
          <Plus className="w-5 h-5" />
          <span>新規チャット</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-2 py-2">
          <div className="text-xs text-gray-400 px-3 py-2">今日</div>
          <SidebarMenuItem icon={Star} text="フロントエンドとバックエンド" active />
          <SidebarMenuItem icon={Menu} text="Install tree command" />
          
          <div className="text-xs text-gray-400 px-3 py-2 mt-4">昨日</div>
          <SidebarMenuItem icon={Menu} text="マークダウン テーブル作成" />
        </div>
      </div>

      <UserProfile />
    </div>
  );
}