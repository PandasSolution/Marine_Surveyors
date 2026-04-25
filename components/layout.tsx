import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Pandas Solution LTD',
  description: 'Black glass-effect static site for Pandas Solution LTD',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
