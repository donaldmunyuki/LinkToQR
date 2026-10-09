import { QrCode } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <QrCode className="w-4 h-4" />
            <span className="text-sm">LinkToQR — Create beautiful QR codes instantly</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} LinkToQR. All rights reserved.</span>
            <span className="hidden md:inline text-border">|</span>
            <span>
              Developed by{' '}
              <a
                href="https://donatech.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-accent transition-colors underline-offset-2 hover:underline"
              >
                Donatech
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
