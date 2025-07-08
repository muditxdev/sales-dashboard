import React from 'react';
import { Move, MoreVertical, TrendingUp, TrendingDown, Edit3 } from 'lucide-react';
import * as Icons from 'lucide-react';

interface CardData {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  color: string;
}

interface CardWidgetProps {
  cards: CardData[];
  onEdit?: (newTitle: string) => void;
}

const CardWidget: React.FC<CardWidgetProps> = ({ cards, onEdit }) => {
  const handleTitleEdit = () => {
    const newTitle = prompt('Enter new title:', 'Key Metrics');
    if (newTitle && newTitle.trim() && onEdit) {
      onEdit(newTitle.trim());
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 text-blue-600';
      case 'green':
        return 'bg-green-50 text-green-600';
      case 'orange':
        return 'bg-orange-50 text-orange-600';
      case 'purple':
        return 'bg-purple-50 text-purple-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? IconComponent : Icons.Activity;
  };

  return (
    <div className="h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <Move className="h-4 w-4 text-gray-400 cursor-move" />
          <h3 className="text-sm font-semibold text-gray-900">Key Metrics</h3>
        </div>
        <div className="flex items-center space-x-1">
          {onEdit && (
            <button
              onClick={handleTitleEdit}
              className="p-1 hover:bg-gray-100 rounded"
              title="Edit title"
            >
              <Edit3 className="h-4 w-4 text-gray-400" />
            </button>
          )}
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {cards.map((card, index) => {
            const IconComponent = getIcon(card.icon);
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${getColorClasses(card.color)}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {card.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      card.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {card.change}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{card.value}</div>
                  <div className="text-sm text-gray-500">{card.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardWidget;