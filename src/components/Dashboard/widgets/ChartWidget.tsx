import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Move, MoreVertical, Edit3 } from 'lucide-react';

interface ChartWidgetProps {
  title: string;
  data: any;
  type?: 'line' | 'column' | 'pie';
  height?: number;
  onEdit?: (newTitle: string) => void;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ 
  title, 
  data, 
  type = 'line', 
  height = 300,
  onEdit
}) => {
  const handleTitleEdit = () => {
    const newTitle = prompt('Enter new title:', title);
    if (newTitle && newTitle.trim() && onEdit) {
      onEdit(newTitle.trim());
    }
  };

  const getChartOptions = () => {
    const baseOptions = {
      chart: {
        type,
        height,
        backgroundColor: 'transparent',
        style: {
          fontFamily: 'Inter, sans-serif'
        }
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: type !== 'pie',
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: {
          fontSize: '12px',
          fontWeight: '500'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        style: {
          color: '#fff',
          fontSize: '12px'
        },
        borderRadius: 8,
        borderWidth: 0,
        shadow: true
      },
      plotOptions: {
        series: {
          animation: {
            duration: 1000
          },
          borderRadius: type === 'column' ? 4 : 0
        },
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              fontSize: '11px'
            }
          },
          showInLegend: true
        }
      }
    };

    if (type === 'pie') {
      return {
        ...baseOptions,
        series: [{
          name: 'Share',
          data: data.data
        }]
      };
    }

    return {
      ...baseOptions,
      xAxis: {
        categories: data.categories,
        gridLineWidth: 0,
        lineWidth: 0,
        tickWidth: 0,
        labels: {
          style: {
            fontSize: '11px',
            color: '#6b7280'
          }
        }
      },
      yAxis: {
        title: {
          text: null
        },
        gridLineWidth: 1,
        gridLineColor: '#f3f4f6',
        labels: {
          style: {
            fontSize: '11px',
            color: '#6b7280'
          }
        }
      },
      series: data.series
    };
  };

  return (
    <div className="h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <Move className="h-4 w-4 text-gray-400 cursor-move" />
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
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
        <HighchartsReact
          highcharts={Highcharts}
          options={getChartOptions()}
        />
      </div>
    </div>
  );
};

export default ChartWidget;