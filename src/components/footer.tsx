import React from 'react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto flex items-center justify-center px-4 py-6 md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sarvesh Ahuja. Designed & Built with a futuristic touch.
        </p>
      </div>
    </footer>
  );
}
