import React, { useState } from 'react';
import { Move, MoreVertical, Search, Filter, ChevronUp, ChevronDown, Edit3 } from 'lucide-react';

interface TableData {
  title: string;
  columns: string[];
  data: Record<string, any>[];
}

interface TableWidgetProps {
  data: TableData;
  onEdit?: (newTitle: string) => void;
}

const TableWidget: React.FC<TableWidgetProps> = ({ data, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleTitleEdit = () => {
    const newTitle = prompt('Enter new title:', data.title);
    if (newTitle && newTitle.trim() && onEdit) {
      onEdit(newTitle.trim());
    }
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredData = data.data.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    
    const aValue = a[sortField.toLowerCase().replace(/\s/g, '')];
    const bValue = b[sortField.toLowerCase().replace(/\s/g, '')];
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Closed Won':
        return 'bg-green-100 text-green-800';
      case 'Negotiation':
        return 'bg-blue-100 text-blue-800';
      case 'Proposal':
        return 'bg-yellow-100 text-yellow-800';
      case 'Qualification':
        return 'bg-purple-100 text-purple-800';
      case 'Discovery':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <Move className="h-4 w-4 text-gray-400 cursor-move" />
          <h3 className="text-sm font-semibold text-gray-900">{data.title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-3 py-1 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Filter className="h-4 w-4 text-gray-400" />
          </button>
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
      
      <div className="flex-1 overflow-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {data.columns.map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort(column)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column}</span>
                    {sortField === column && (
                      sortDirection === 'asc' ? 
                        <ChevronUp className="h-3 w-3" /> : 
                        <ChevronDown className="h-3 w-3" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.company}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-green-600">
                  {row.dealValue}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStageColor(row.stage)}`}>
                    {row.stage}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {row.closeDate}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {row.owner}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWidget;