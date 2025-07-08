import React, { useState } from 'react';
import { X, BarChart3, PieChart, LineChart, Table, CreditCard, Image, Type, TrendingUp, Activity } from 'lucide-react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface AddWidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWidget: (widget: any) => void;
}

const chartTypes = [
  { id: 'line', name: 'Line Chart', icon: LineChart, description: 'Show trends over time' },
  { id: 'column', name: 'Column Chart', icon: BarChart3, description: 'Compare values across categories' },
  { id: 'bar', name: 'Bar Chart', icon: Activity, description: 'Horizontal comparison chart' },
  { id: 'pie', name: 'Pie Chart', icon: PieChart, description: 'Show proportions of a whole' },
  { id: 'area', name: 'Area Chart', icon: TrendingUp, description: 'Filled line chart for volume data' },
  { id: 'scatter', name: 'Scatter Plot', icon: Activity, description: 'Show correlation between variables' }
];

const widgetTypes = [
  { id: 'chart', name: 'Chart or Table', icon: BarChart3, description: 'Interactive charts and data tables' },
  { id: 'text', name: 'Text', icon: Type, description: 'Add custom text content' },
  { id: 'image', name: 'Image', icon: Image, description: 'Display images and media' },
  { id: 'cards', name: 'Metric Cards', icon: CreditCard, description: 'Key performance indicators' }
];

const sampleData = {
  line: {
    chart: { type: 'line', height: 200 },
    title: { text: null },
    credits: { enabled: false },
    xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { title: { text: null } },
    series: [{ name: 'Sales', data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0], color: '#3b82f6' }]
  },
  column: {
    chart: { type: 'column', height: 200 },
    title: { text: null },
    credits: { enabled: false },
    xAxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    yAxis: { title: { text: null } },
    series: [{ name: 'Revenue', data: [85, 90, 95, 92], color: '#10b981' }]
  },
  bar: {
    chart: { type: 'bar', height: 200 },
    title: { text: null },
    credits: { enabled: false },
    xAxis: { categories: ['Product A', 'Product B', 'Product C'] },
    yAxis: { title: { text: null } },
    series: [{ name: 'Sales', data: [107, 31, 635], color: '#f59e0b' }]
  },
  pie: {
    chart: { type: 'pie', height: 200 },
    title: { text: null },
    credits: { enabled: false },
    series: [{
      name: 'Share',
      data: [
        { name: 'Chrome', y: 61.41, color: '#3b82f6' },
        { name: 'Firefox', y: 11.84, color: '#10b981' },
        { name: 'Safari', y: 10.85, color: '#f59e0b' }
      ]
    }]
  },
  area: {
    chart: { type: 'area', height: 200 },
    title: { text: null },
    credits: { enabled: false },
    xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
    yAxis: { title: { text: null } },
    series: [{ name: 'Users', data: [502, 635, 809, 947, 1402], color: '#8b5cf6' }]
  },
  scatter: {
    chart: { type: 'scatter', height: 200 },
    title: { text: null },
    credits: { enabled: false },
    xAxis: { title: { text: 'Height' } },
    yAxis: { title: { text: 'Weight' } },
    series: [{
      name: 'Data Points',
      data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6]],
      color: '#ef4444'
    }]
  }
};

const AddWidgetModal: React.FC<AddWidgetModalProps> = ({ isOpen, onClose, onAddWidget }) => {
  const [selectedType, setSelectedType] = useState<string>('chart');
  const [selectedChartType, setSelectedChartType] = useState<string>('line');
  const [widgetTitle, setWidgetTitle] = useState<string>('New Widget');
  const [customText, setCustomText] = useState<string>('Add your custom text content here...');

  if (!isOpen) return null;

  const handleAddWidget = () => {
    const widgetId = `widget-${Date.now()}`;
    
    if (selectedType === 'chart') {
      const widget = {
        id: widgetId,
        type: 'chart',
        title: widgetTitle,
        chartType: selectedChartType,
        data: sampleData[selectedChartType as keyof typeof sampleData]
      };
      onAddWidget(widget);
    } else if (selectedType === 'cards') {
      const widget = {
        id: widgetId,
        type: 'cards',
        title: widgetTitle,
        cards: [
          { title: 'New Metric', value: '1,234', change: '+5.2%', trend: 'up', icon: 'Activity', color: 'blue' }
        ]
      };
      onAddWidget(widget);
    } else if (selectedType === 'text') {
      const widget = {
        id: widgetId,
        type: 'text',
        title: widgetTitle,
        content: customText
      };
      onAddWidget(widget);
    }
    
    onClose();
    // Reset form
    setSelectedType('chart');
    setSelectedChartType('line');
    setWidgetTitle('New Widget');
    setCustomText('Add your custom text content here...');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-5/6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Add Widget</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel */}
          <div className="w-1/2 p-6 border-r border-gray-200 overflow-y-auto">
            {/* Widget Type Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Widget Type</h3>
              <div className="grid grid-cols-1 gap-2">
                {widgetTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex items-center p-3 rounded-lg border text-left transition-colors ${
                      selectedType === type.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <type.icon className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">{type.name}</div>
                      <div className="text-sm text-gray-500">{type.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Text Content (only show if text is selected) */}
            {selectedType === 'text' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Text Content
                </label>
                <textarea
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Enter your custom text content..."
                />
              </div>
            )}
            {/* Chart Type Selection (only show if chart is selected) */}
            {selectedType === 'chart' && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Chart Type</h3>
                <div className="grid grid-cols-2 gap-3">
                  {chartTypes.map((chart) => (
                    <button
                      key={chart.id}
                      onClick={() => setSelectedChartType(chart.id)}
                      className={`flex flex-col items-center p-4 rounded-lg border transition-colors ${
                        selectedChartType === chart.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <chart.icon className="h-8 w-8 mb-2" />
                      <div className="font-medium text-sm">{chart.name}</div>
                      <div className="text-xs text-gray-500 text-center mt-1">{chart.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Widget Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Widget Title
              </label>
              <input
                type="text"
                value={widgetTitle}
                onChange={(e) => setWidgetTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter widget title..."
              />
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="w-1/2 p-6 bg-gray-50">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Preview</h3>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                <h4 className="font-medium text-gray-900">{widgetTitle}</h4>
              </div>
              
              {selectedType === 'chart' && (
                <div className="h-48">
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={sampleData[selectedChartType as keyof typeof sampleData]}
                  />
                </div>
              )}
              
              {selectedType === 'cards' && (
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-600">New Metric</div>
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Activity className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">1,234</div>
                    <div className="text-sm text-green-600">+5.2%</div>
                  </div>
                </div>
              )}
              
              {selectedType === 'text' && (
                <div className="text-gray-600">
                  {customText}
                </div>
              )}
              
              {selectedType === 'image' && (
                <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Image className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-gray-500">Image placeholder</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAddWidget}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;