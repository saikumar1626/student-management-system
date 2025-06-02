import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/
card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from
'@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/
select';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Search, Edit, Trash } from 'lucide-react';
interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  grade: string;
  section: string;
  rollNumber: string;
  dateOfBirth: string;
  address: string;
  parentName: string;
  parentPhone: string;
  status: 'active' | 'inactive';
  admissionDate: string;
}
const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  const [students] = useState<Student[]>([
    {
      id: 'STU001',
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      phone: '+1234567890',
      grade: 'Grade 10',
      section: 'A',
      rollNumber: '001',
      dateOfBirth: '2008-05-15',
      address: '123 Main St, City, State',
      parentName: 'John Johnson',
      parentPhone: '+1234567891',
      status: 'active',
      admissionDate: '2023-09-01'
    },
    {
      id: 'STU002',
      name: 'Bob Smith',
      email: 'bob.smith@email.com',
      phone: '+1234567892',
      grade: 'Grade 10',
      section: 'A',
      rollNumber: '002',
      dateOfBirth: '2008-03-22',
      address: '456 Oak Ave, City, State',
      parentName: 'Mary Smith',
      parentPhone: '+1234567893',
      status: 'active',
      admissionDate: '2023-09-01'
    },
    {
      id: 'STU003',
      name: 'Carol Williams',
      email: 'carol.williams@email.com',
      phone: '+1234567894',
      grade: 'Grade 9',
      section: 'B',
      rollNumber: '003',
      dateOfBirth: '2009-01-10',
      address: '789 Pine Rd, City, State',
      parentName: 'David Williams',
      parentPhone: '+1234567895',
      status: 'inactive',
      admissionDate: '2023-09-01'
    }
  ]);
  const flteredStudents = students.flter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNumber.includes(searchTerm) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = selectedGrade === 'all' || student.grade === selectedGrade;
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus;
    
    return matchesSearch && matchesGrade && matchesStatus;
  });
  return (
    <div className="space-y-6">
      <div className="fex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Students</h1>
          <p className="text-muted-foreground">Manage student information and records</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>Enter student information to create a new record</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter full name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div>
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" />
              </div>
              <div>
                <Label htmlFor="grade">Grade</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade-9">Grade 9</SelectItem>
                    <SelectItem value="grade-10">Grade 10</SelectItem>
                    <SelectItem value="grade-11">Grade 11</SelectItem>
                    <SelectItem value="grade-12">Grade 12</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="section">Section</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">Section A</SelectItem>
                    <SelectItem value="b">Section B</SelectItem>
                    <SelectItem value="c">Section C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Enter full address" />
              </div>
              <div>
                <Label htmlFor="parent-name">Parent/Guardian Name</Label>
                <Input id="parent-name" placeholder="Enter parent name" />
              </div>
              <div>
                <Label htmlFor="parent-phone">Parent/Guardian Phone</Label>
                <Input id="parent-phone" placeholder="Enter parent phone" />
              </div>
            </div>
            <div className="fex justify-end gap-2 mt-6">
              <Button variant="outline">Cancel</Button>
              <Button>Add Student</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Student Directory</CardTitle>
          <CardDescription>Search and flter students</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="fex gap-4 mb-6">
            <div className="relative fex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="Grade 9">Grade 9</SelectItem>
                <SelectItem value="Grade 10">Grade 10</SelectItem>
                <SelectItem value="Grade 11">Grade 11</SelectItem>
                <SelectItem value="Grade 12">Grade 12</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            {flteredStudents.map((student) => (
              <div key={student.id} className="fex items-center justify-between p-4 border rounded-
lg">
                <div className="fex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 fex items-center justify-center">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-medium">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {student.grade} - Section {student.section} | Roll No: {student.rollNumber}
                    </p>
                    <p className="text-sm text-muted-foreground">{student.email}</p>
                  </div>
                </div>
                
                <div className="fex items-center gap-4">
                  <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                    {student.status}
                  </Badge>
                  <div className="fex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {flteredStudents.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No students found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
export default Students;
