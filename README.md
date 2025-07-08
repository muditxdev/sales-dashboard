# SalesPro - Modern Sales Dashboard

A beautiful, modern sales dashboard built with React 18, TypeScript, and Vite. Features drag-and-drop widgets, interactive charts, and a responsive design perfect for sales teams and analytics.

## ✨ Features

- **🎯 Interactive Dashboard**: Drag-and-drop widget layout with real-time resizing
- **📊 Rich Visualizations**: Powered by Highcharts with multiple chart types
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🎨 Modern UI**: Clean, professional interface with Tailwind CSS
- **⚡ Fast Performance**: Built with React 18 and Vite for optimal speed
- **🔧 Customizable Widgets**: Add, edit, and configure widgets on the fly
- **📈 Multiple Chart Types**: Line, column, bar, pie, area, and scatter plots
- **📋 Data Tables**: Sortable and searchable data tables
- **💳 Metric Cards**: Key performance indicators at a glance
- **📝 Text Widgets**: Custom text content with inline editing
- **🖼️ Export Functionality**: Export dashboard as PNG images

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/muditxdev/salespro-dashboard.git
cd salespro-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 18** - Modern React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Grid Layout** - Drag-and-drop grid system
- **Highcharts** - Interactive charting library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard/
│   │   ├── Dashboard.tsx          # Main dashboard component
│   │   ├── modals/
│   │   │   └── AddWidgetModal.tsx # Widget creation modal
│   │   └── widgets/
│   │       ├── ChartWidget.tsx    # Chart component
│   │       ├── TableWidget.tsx    # Data table component
│   │       ├── CardWidget.tsx     # Metric cards component
│   │       └── TextWidget.tsx     # Text content component
│   └── LandingPage/
│       └── LandingPage.tsx        # Landing page component
├── data/
│   └── mockData.ts               # Sample data for widgets
├── App.tsx                       # Main app component
└── main.tsx                      # App entry point
```

## 🎮 Usage

### Adding Widgets

1. Click the "Add Widget" button in the dashboard header
2. Select widget type (Chart, Text, Image, or Metric Cards)
3. Choose chart type if creating a chart widget
4. Customize the widget title
5. Preview your widget in real-time
6. Click "Add Widget" to add it to your dashboard

### Customizing Layout

- **Drag**: Click and drag widgets to reposition them
- **Resize**: Hover over widgets to see resize handles, then drag to resize
- **Edit**: Click the edit icon on any widget to modify its title or content
- **Reset**: Use the "Reset Layout" button to restore the default arrangement

### Exporting

Click the "Export PNG" button in the header to download your dashboard as a high-quality PNG image.

## 🎨 Widget Types

### Chart Widgets
- **Line Chart**: Perfect for showing trends over time
- **Column Chart**: Great for comparing values across categories
- **Bar Chart**: Horizontal comparison charts
- **Pie Chart**: Show proportions and percentages
- **Area Chart**: Filled line charts for volume data
- **Scatter Plot**: Display correlation between variables

### Data Widgets
- **Table Widget**: Sortable and searchable data tables
- **Metric Cards**: Key performance indicators with trend indicators
- **Text Widget**: Custom text content with inline editing

## 🔧 Configuration

The dashboard uses mock data by default. To integrate with your own data:

1. Replace the mock data in `src/data/mockData.ts`
2. Update the widget components to fetch from your API
3. Modify the chart configurations as needed

## 📱 Responsive Design

SalesPro is fully responsive and adapts to different screen sizes:

- **Desktop**: Full grid layout with all features
- **Tablet**: Optimized grid with touch-friendly controls
- **Mobile**: Stacked layout with swipe gestures

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mudit Jain**
- GitHub: [@muditjain](https://github.com/muditxdev)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Highcharts](https://www.highcharts.com/) - Charting library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

## 📊 Demo

Visit the live demo: [SalesPro Dashboard Demo](https://muditxdev.github.io/sales-dashboard/)

---

Made with ❤️ by [Mudit Jain](https://github.com/muditxdev)