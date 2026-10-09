import { QrCode } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl logo-background flex items-center justify-center shadow-paper">
            <QrCode className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-serif font-semibold text-foreground tracking-tight">
              LinkToQR
            </h1>
            <p className="text-xs text-muted-foreground -mt-0.5">Turn links into QR codes</p>
          </div>
        </div>
      </div>
    </header>
  );
}

