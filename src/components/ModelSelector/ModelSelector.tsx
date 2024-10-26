import { Check, Sparkles, Zap } from 'lucide-react';

interface ModelSelectorProps {
  selectedModel: string;
  onSelect: (model: string) => void;
  onClose: () => void;
}

export default function ModelSelector({ selectedModel, onSelect, onClose }: ModelSelectorProps) {
  const models = [
    {
      id: 'gpt-4o-2024-08-06',
      name: 'gpt-4o-2024-08-06',
      icon: Sparkles,
    },
    {
      id: 'gpt-4o-mini-2024-07-18',
      name: 'gpt-4o-mini-2024-07-18',
      icon: Zap,
    },
  ];

  const handleSelect = (modelId: string) => {
    onSelect(modelId);
    onClose();
  };

  return (
    <div className="absolute top-12 left-4 w-80 bg-[#202123] rounded-lg shadow-lg border border-gray-700 z-50">
      <div className="p-2">
        <div className="px-3 py-2 text-xs text-gray-500">モデル</div>
        {models.map((model) => (
          <button
            key={model.id}
            className="w-full px-3 py-2 flex items-center gap-3 hover:bg-[#2A2B32] rounded-lg text-left"
            onClick={() => handleSelect(model.id)}
          >
            <model.icon className="w-5 h-5 text-white" />
            <div className="flex-1 text-white">
              <span>{model.name}</span>
            </div>
            {selectedModel === model.id && (
              <Check className="w-4 h-4 text-[#19C37D]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}