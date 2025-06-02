import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Search } from 'lucide-react';
const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-flter]:bgbackground/60">
      <div className="fex h-14 items-center gap-4 px-6">
        <div className="fex-1">
          <div className="relative max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8" />
          </div>
        </div>
        
        <div className="fex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          
          <div className="fex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary" />
            <span className="text-sm font-medium">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
