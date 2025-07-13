import React from 'react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex items-center justify-center px-4 py-6 md:px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sarvesh Ahuja. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
