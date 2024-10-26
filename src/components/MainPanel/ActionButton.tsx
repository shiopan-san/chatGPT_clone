import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  text: string;
}

export default function ActionButton({ icon: Icon, text }: ActionButtonProps) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-[#40414f] rounded-lg text-gray-200 hover:bg-[#4a4b55] transition">
      <Icon className="w-5 h-5" />
      <span className="text-sm">{text}</span>
    </button>
  );
}