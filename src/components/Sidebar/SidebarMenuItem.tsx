import { LucideIcon } from 'lucide-react';

interface SidebarMenuItemProps {
  icon: LucideIcon;
  text: string;
  active?: boolean;
}

export default function SidebarMenuItem({ icon: Icon, text, active }: SidebarMenuItemProps) {
  return (
    <button
      className={`flex items-center gap-3 w-full p-3 rounded-md transition
        ${active ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm truncate">{text}</span>
    </button>
  );
}