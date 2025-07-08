import React from 'react';
import { Link } from 'react-router-dom';
import { cardStats } from '../../data/mockData';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive dashboard with real-time insights and interactive charts powered by Highcharts.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor key metrics and KPIs with customizable widgets and automated reporting.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with team members through integrated communication tools.'
    },
    {
      icon: Target,
      title: 'Goal Management',
      description: 'Set, track, and achieve business objectives with intelligent goal-setting features.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with React 18 and Vite for exceptional performance and smooth user experience.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance with industry standards.'
    }
  ];

  const benefits = [
    'Drag-and-drop dashboard customization',
    'Real-time data visualization',
    'Mobile-responsive design',
    'Advanced filtering and sorting',
    'Export and sharing capabilities',
    'API integration ready'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SalesPro</span>
            </div>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Powered by React 18 & Vite
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Modern Sales
              <span className="block text-blue-600">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your sales process with our comprehensive dashboard solution. 
              Built for modern teams who need powerful analytics and intuitive design.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg text-lg font-medium transition-colors duration-200">
              Watch Demo
            </button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-lg font-semibold">Sales Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {cardStats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-600">{stat.title}</div>
                      <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-green-600">{stat.change}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 h-40">
                  <div className="text-sm font-medium text-gray-700 mb-3">Revenue Trend</div>
                  <div className="h-24 bg-blue-100 rounded"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 h-40">
                  <div className="text-sm font-medium text-gray-700 mb-3">Performance</div>
                  <div className="h-24 bg-green-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive features designed to streamline your sales process and boost productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why choose SalesPro?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of sales teams who trust our platform to drive their success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started</h3>
              <p className="text-blue-100 mb-6">
                Ready to transform your sales process? Our dashboard is designed to get you up and running in minutes.
              </p>
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Launch Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">SalesPro</span>
            </div>
            <p className="text-gray-400">
              Built with React 18, Vite, and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;