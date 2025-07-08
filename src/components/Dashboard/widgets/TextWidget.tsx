import React, { useState } from 'react';
import { Move, MoreVertical, Edit3, Save, X } from 'lucide-react';

interface TextWidgetProps {
  title: string;
  content: string;
  onUpdate?: (content: string) => void;
}

const TextWidget: React.FC<TextWidgetProps> = ({ title, content, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);

  const handleSave = () => {
    if (onUpdate) {
      onUpdate(editContent);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditContent(content);
    setIsEditing(false);
  };

  return (
    <div className="h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <Move className="h-4 w-4 text-gray-400 cursor-move" />
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        </div>
        <div className="flex items-center space-x-1">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Edit3 className="h-4 w-4 text-gray-400" />
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="p-1 hover:bg-gray-100 rounded text-green-600"
              >
                <Save className="h-4 w-4" />
              </button>
              <button
                onClick={handleCancel}
                className="p-1 hover:bg-gray-100 rounded text-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </>
          )}
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="p-4 h-full">
        {isEditing ? (
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your text content..."
          />
        ) : (
          <div className="text-gray-700 whitespace-pre-wrap">
            {content || 'Click edit to add content...'}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextWidget;