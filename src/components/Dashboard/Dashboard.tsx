import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { 
  Home, 
  Settings, 
  Plus, 
  Download, 
  RefreshCw, 
  Layout,
  Globe,
  ArrowLeft
} from 'lucide-react';
import ChartWidget from './widgets/ChartWidget';
import TableWidget from './widgets/TableWidget';
import CardWidget from './widgets/CardWidget';
import TextWidget from './widgets/TextWidget';
import AddWidgetModal from './modals/AddWidgetModal';
import { chartData, tableData, cardStats, defaultLayout } from '../../data/mockData';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard: React.FC = () => {
  const [layouts, setLayouts] = useState({ lg: defaultLayout });
  const [isResetting, setIsResetting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [widgets, setWidgets] = useState([
    {
      key: 'chart-1',
      type: 'chart',
      title: chartData.salesOvertime.title,
      component: (
        <ChartWidget
          title={chartData.salesOvertime.title}
          data={chartData.salesOvertime}
          type="line"
          onEdit={(newTitle) => handleEditWidget('chart-1', { title: newTitle })}
        />
      )
    },
    {
      key: 'chart-2',
      type: 'chart',
      title: chartData.performanceMetrics.title,
      component: (
        <ChartWidget
          title={chartData.performanceMetrics.title}
          data={chartData.performanceMetrics}
          type="column"
          onEdit={(newTitle) => handleEditWidget('chart-2', { title: newTitle })}
        />
      )
    },
    {
      key: 'chart-3',
      type: 'chart',
      title: chartData.regionBreakdown.title,
      component: (
        <ChartWidget
          title={chartData.regionBreakdown.title}
          data={chartData.regionBreakdown}
          type="pie"
          onEdit={(newTitle) => handleEditWidget('chart-3', { title: newTitle })}
        />
      )
    },
    {
      key: 'cards',
      type: 'cards',
      title: 'Key Metrics',
      component: <CardWidget cards={cardStats} onEdit={(newTitle) => handleEditWidget('cards', { title: newTitle })} />
    },
    {
      key: 'table',
      type: 'table',
      title: tableData.title,
      component: <TableWidget data={tableData} onEdit={(newTitle) => handleEditWidget('table', { title: newTitle })} />
    }
  ]);

  const handleLayoutChange = (layout: any, allLayouts: any) => {
    setLayouts(allLayouts);
  };

  const resetLayout = () => {
    setIsResetting(true);
    setLayouts({ lg: defaultLayout });
    setTimeout(() => setIsResetting(false), 300);
  };

  const handleEditWidget = (widgetKey: string, updates: any) => {
    setWidgets(prev => prev.map(widget => {
      if (widget.key === widgetKey) {
        return {
          ...widget,
          ...updates,
          component: renderWidget({ ...widget, ...updates })
        };
      }
      return widget;
    }));
  };

  const exportToPNG = async () => {
    setIsExporting(true);
    try {
      const dashboardElement = document.querySelector('.dashboard-container') as HTMLElement;
      if (dashboardElement) {
        const canvas = await html2canvas(dashboardElement, {
          backgroundColor: '#ffffff',
          scale: 2,
          useCORS: true,
          allowTaint: true
        });
        
        const link = document.createElement('a');
        link.download = `dashboard-${new Date().toISOString().split('T')[0]}.png`;
        link.href = canvas.toDataURL();
        link.click();
      }
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleAddWidget = (widget: any) => {
    const existingLayouts = layouts.lg || [];
    const topY = existingLayouts.length > 0 ? Math.min(...existingLayouts.map(item => item.y)) : 0;
    
    const newWidget = {
      key: widget.id,
      type: widget.type,
      title: widget.title,
      component: renderWidget(widget)
    };
    
    setWidgets(prev => [...prev, newWidget]);
    
    const newLayoutItem = {
      i: widget.id,
      x: 0,
      y: Math.max(0, topY - 5),
      w: getWidgetWidth(widget.type),
      h: getWidgetHeight(widget.type),
      minW: 3,
      minH: 2
    };
    
    setLayouts(prev => ({
      ...prev,
      lg: [...prev.lg, newLayoutItem]
    }));
  };

  const getWidgetWidth = (type: string) => {
    switch (type) {
      case 'cards': return 8;
      case 'table': return 12;
      case 'text': return 6;
      default: return 6;
    }
  };

  const getWidgetHeight = (type: string) => {
    switch (type) {
      case 'cards': return 3;
      case 'table': return 5;
      case 'text': return 4;
      default: return 5;
    }
  };

  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case 'chart':
        return (
          <ChartWidget
            title={widget.title}
            data={widget.data}
            type={widget.chartType}
            onEdit={(newTitle) => handleEditWidget(widget.key, { title: newTitle })}
          />
        );
      case 'cards':
        return <CardWidget cards={widget.cards} onEdit={(newTitle) => handleEditWidget(widget.key, { title: newTitle })} />;
      case 'text':
        return (
          <TextWidget
            title={widget.title}
            content={widget.content}
            onUpdate={(newContent) => handleEditWidget(widget.key, { content: newContent })}
          />
        );
      case 'table':
        return <TableWidget data={widget.data} onEdit={(newTitle) => handleEditWidget(widget.key, { title: newTitle })} />;
      default:
        return <div>Unknown widget type</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">SalesPro Dashboard</h1>
                  <p className="text-sm text-gray-500">Real-time analytics and insights</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={exportToPNG}
                disabled={isExporting}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                <Download className={`h-4 w-4 mr-2 ${isExporting ? 'animate-spin' : ''}`} />
                {isExporting ? 'Exporting...' : 'Export PNG'}
              </button>
              <button 
                onClick={resetLayout}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Layout className="h-4 w-4 mr-2" />
                Reset Layout
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                <RefreshCw className={`h-4 w-4 mr-2 ${isResetting ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome back, Admin</h2>
              <p className="text-gray-600">Here's what's happening with your sales today.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Widget
            </button>
          </div>
        </div>

        <div className="dashboard-container bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                  linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            />
          </div>
          
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Layout className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                Drag and resize widgets to customize your dashboard
              </span>
            </div>
            <div className="text-xs text-gray-500">
              Changes are automatically saved. Use the reset button to restore the default layout.
            </div>
          </div>

          <div className="relative z-10">
            <ResponsiveGridLayout
              className="layout"
              layouts={layouts}
              onLayoutChange={handleLayoutChange}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
              cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
              rowHeight={60}
              isDraggable={true}
              isResizable={true}
              margin={[16, 16]}
              containerPadding={[0, 0]}
              useCSSTransforms={true}
              measureBeforeMount={false}
            >
              {widgets.map((widget) => (
                <div key={widget.key} className="widget-container">
                  {widget.component}
                </div>
              ))}
            </ResponsiveGridLayout>
          </div>
        </div>
        
        <AddWidgetModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddWidget={handleAddWidget}
        />
      </main>
    </div>
  );
};

export default Dashboard;