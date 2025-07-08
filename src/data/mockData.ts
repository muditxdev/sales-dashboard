// Mock data for dashboard widgets
export const chartData = {
  salesOvertime: {
    title: 'Sales Over Time',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      {
        name: 'Revenue',
        data: [45000, 52000, 48000, 61000, 67000, 71000, 78000, 82000, 76000, 89000, 94000, 102000],
        color: '#2563eb'
      },
      {
        name: 'Profit',
        data: [12000, 15000, 13000, 18000, 21000, 24000, 27000, 31000, 28000, 35000, 38000, 42000],
        color: '#10b981'
      }
    ]
  },
  performanceMetrics: {
    title: 'Performance Metrics',
    categories: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      {
        name: 'Target',
        data: [85, 90, 88, 92],
        color: '#6b7280'
      },
      {
        name: 'Actual',
        data: [88, 87, 95, 97],
        color: '#4f46e5'
      }
    ]
  },
  regionBreakdown: {
    title: 'Sales by Region',
    data: [
      { name: 'North America', y: 45.2, color: '#2563eb' },
      { name: 'Europe', y: 28.8, color: '#10b981' },
      { name: 'Asia Pacific', y: 18.5, color: '#f59e0b' },
      { name: 'Latin America', y: 7.5, color: '#ef4444' }
    ]
  }
};

export const tableData = {
  title: 'Recent Deals',
  columns: ['Company', 'Deal Value', 'Stage', 'Close Date', 'Owner'],
  data: [
    { company: 'Acme Corp', dealValue: '$125,000', stage: 'Negotiation', closeDate: '2025-02-15', owner: 'John Smith' },
    { company: 'TechStart Inc', dealValue: '$87,500', stage: 'Proposal', closeDate: '2025-02-28', owner: 'Sarah Johnson' },
    { company: 'Global Solutions', dealValue: '$340,000', stage: 'Closed Won', closeDate: '2025-01-20', owner: 'Mike Davis' },
    { company: 'Innovation Labs', dealValue: '$156,000', stage: 'Qualification', closeDate: '2025-03-10', owner: 'Emily Chen' },
    { company: 'Future Systems', dealValue: '$92,000', stage: 'Discovery', closeDate: '2025-03-05', owner: 'David Wilson' },
    { company: 'Smart Enterprises', dealValue: '$210,000', stage: 'Negotiation', closeDate: '2025-02-22', owner: 'Lisa Anderson' },
    { company: 'Digital Dynamics', dealValue: '$78,000', stage: 'Proposal', closeDate: '2025-03-15', owner: 'Tom Brown' },
    { company: 'NextGen Technologies', dealValue: '$425,000', stage: 'Closed Won', closeDate: '2025-01-30', owner: 'Amanda Lee' }
  ]
};

export const cardStats = [
  {
    title: 'Total Revenue',
    value: '$2.4M',
    change: '+12.5%',
    trend: 'up',
    icon: 'DollarSign',
    color: 'blue'
  },
  {
    title: 'Active Deals',
    value: '1,247',
    change: '+8.2%',
    trend: 'up',
    icon: 'TrendingUp',
    color: 'green'
  },
  {
    title: 'Conversion Rate',
    value: '24.8%',
    change: '-2.1%',
    trend: 'down',
    icon: 'Target',
    color: 'orange'
  },
  {
    title: 'New Leads',
    value: '847',
    change: '+15.3%',
    trend: 'up',
    icon: 'Users',
    color: 'purple'
  }
];

export const defaultLayout = [
  { i: 'chart-1', x: 0, y: 0, w: 6, h: 4, minW: 4, minH: 3 },
  { i: 'chart-2', x: 6, y: 0, w: 6, h: 4, minW: 4, minH: 3 },
  { i: 'chart-3', x: 0, y: 4, w: 4, h: 4, minW: 3, minH: 3 },
  { i: 'cards', x: 4, y: 4, w: 8, h: 2, minW: 4, minH: 2 },
  { i: 'table', x: 0, y: 6, w: 12, h: 4, minW: 6, minH: 3 }
];