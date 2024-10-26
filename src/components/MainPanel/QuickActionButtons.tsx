import ActionButton from './ActionButton';
import { Image, FileText, Eye, Zap } from 'lucide-react';

export default function QuickActionButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto p-4">
      <ActionButton icon={Image} text="画像を作成する" />
      <ActionButton icon={FileText} text="テキストを要約する" />
      <ActionButton icon={Eye} text="画像を分析する" />
      <ActionButton icon={Zap} text="ブレーンストーミング" />
    </div>
  );
}