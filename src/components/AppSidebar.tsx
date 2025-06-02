import { NavLink } from "react-router-dom";
import { 
  Home, 
  Users, 
  Calendar, 
  Book, 
  GraduationCap,
  Settings,
  BarChart
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Students", url: "/students", icon: Users },
  { title: "Attendance", url: "/attendance", icon: Calendar },
  { title: "Grades", url: "/grades", icon: Book },
  { title: "Analytics", url: "/analytics", icon: BarChart },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible>
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent>
        <div className="p-4">
          <h2 className={`font-bold text-lg ${collapsed ? 'hidden' : 'block'}`}>
            Student MS
          </h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
