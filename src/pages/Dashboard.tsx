import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Book, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "1,247",
      description: "Active enrollments",
      icon: Users,
      trend: "+12% from last month",
      bgGradient: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Attendance Rate",
      value: "94.5%",
      description: "This week",
      icon: Calendar,
      trend: "+2.1% from last week",
      bgGradient: "from-green-500 to-green-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Average Grade",
      value: "B+",
      description: "Current semester",
      icon: Book,
      trend: "Improved by 0.3 points",
      bgGradient: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Course Completion",
      value: "87%",
      description: "On track students",
      icon: TrendingUp,
      trend: "+5% from last semester",
      bgGradient: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const recentActivities = [
    { id: 1, action: "New student enrolled", student: "Alice Johnson", time: "2 hours ago", status: "success" },
    { id: 2, action: "Grade updated", student: "Bob Smith", time: "4 hours ago", status: "info" },
    { id: 3, action: "Attendance marked", student: "Class 10A", time: "6 hours ago", status: "warning" },
    { id: 4, action: "Assignment submitted", student: "Carol Williams", time: "1 day ago", status: "success" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-500';
      case 'info': return 'bg-blue-500';
      case 'warning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen -m-6 p-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-2 text-lg">Welcome to the Student Management System</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-5`}></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
              <CardTitle className="text-sm font-medium text-gray-700">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <p className="text-sm text-gray-600 mb-3">{stat.description}</p>
              <Badge className={`bg-gradient-to-r ${stat.bgGradient} text-white border-0 shadow-md`}>
                {stat.trend}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-white">Recent Activities</CardTitle>
            <CardDescription className="text-indigo-100">Latest updates in the system</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(activity.status)} shadow-lg`}></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.student}</p>
                  </div>
                  <Badge variant="outline" className="text-xs border-gray-300">
                    {activity.time}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription className="text-emerald-100">Common tasks</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="group p-6 border-2 border-dashed border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900">Add Student</p>
                <p className="text-sm text-gray-600 mt-1">Register new student</p>
              </button>
              <button className="group p-6 border-2 border-dashed border-green-200 rounded-xl hover:border-green-400 hover:bg-green-50 transition-all duration-300 text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900">Mark Attendance</p>
                <p className="text-sm text-gray-600 mt-1">Daily attendance</p>
              </button>
              <button className="group p-6 border-2 border-dashed border-purple-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900">Grade Entry</p>
                <p className="text-sm text-gray-600 mt-1">Update student grades</p>
              </button>
              <button className="group p-6 border-2 border-dashed border-orange-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900">View Reports</p>
                <p className="text-sm text-gray-600 mt-1">Academic reports</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
