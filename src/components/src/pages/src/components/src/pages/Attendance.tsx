import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/
card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/
select';
import { Calendar, Check, X } from 'lucide-react';
interface AttendanceRecord {
  id: string;
  name: string;
  rollNumber: string;
  status: 'present' | 'absent' | 'late';
  timeIn: string;
}
interface ClassOption {
  value: string;
  label: string;
}
const classOptions: ClassOption[] = [
  { value: 'grade-9-a', label: 'Grade 9 - Section A' },
  { value: 'grade-10-a', label: 'Grade 10 - Section A' },
  { value: 'grade-10-b', label: 'Grade 10 - Section B' },
];
const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('grade-10-a');
  
  const [attendanceData] = useState([
    {
      id: 'STU001',
      name: 'Alice Johnson',
      rollNumber: '001',
      status: 'present' as 'present' | 'absent' | 'late',
      timeIn: '08:00 AM'
    },
    {
      id: 'STU002',
      name: 'Bob Smith',
      rollNumber: '002',
      status: 'absent' as 'present' | 'absent' | 'late',
      timeIn: '-'
    },
    {
      id: 'STU003',
      name: 'Carol Williams',
      rollNumber: '003',
      status: 'late' as 'present' | 'absent' | 'late',
      timeIn: '08:15 AM'
    },
    {
      id: 'STU004',
      name: 'David Brown',
      rollNumber: '004',
      status: 'present' as 'present' | 'absent' | 'late',
      timeIn: '07:55 AM'
    }
  ]);
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return <Badge className="bg-green-100 text-green-800">Present</Badge>;
      case 'absent':
        return <Badge className="bg-red-100 text-red-800">Absent</Badge>;
      case 'late':
        return <Badge className="bg-yellow-100 text-yellow-800">Late</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  return (
    <div className="space-y-6">
      <div className="fex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Attendance</h1>
          <p className="text-muted-foreground">Track and manage student attendance</p>
        </div>
        
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Mark Attendance
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {attendanceData.flter(s => s.status === 'present').length}
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((attendanceData.flter(s => s.status === 'present').length /
attendanceData.length) * 100)}% attendance rate
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {attendanceData.flter(s => s.status === 'absent').length}
            </div>
            <p className="text-xs text-muted-foreground">Students not present</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {attendanceData.flter(s => s.status === 'late').length}
            </div>
            <p className="text-xs text-muted-foreground">Students arrived late</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Daily Attendance</CardTitle>
          <CardDescription>Mark attendance for selected class and date</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="fex gap-4 mb-6">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border rounded-md"
            />
            
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grade-9-a">Grade 9 - Section A</SelectItem>
                <SelectItem value="grade-10-a">Grade 10 - Section A</SelectItem>
                <SelectItem value="grade-10-b">Grade 10 - Section B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            {attendanceData.map((student) => (
              <div key={student.id} className="fex items-center justify-between p-4 border roundedlg">
                <div className="fex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 fex items-center justify-center">
                    {student.rollNumber}
                  </div>
                  <div>
                    <h3 className="font-medium">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">Roll No: {student.rollNumber}</p>
                  </div>
                </div>
                
                <div className="fex items-center gap-4">
                  <span className="text-sm">{student.timeIn}</span>
                  {getStatusBadge(student.status)}
                  <div className="fex gap-2">
                    <Button size="sm" variant="outline" className="text-green-600">
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Attendance;
