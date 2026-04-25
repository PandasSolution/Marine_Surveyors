
import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AI Marine Surveyors Inc.',
  description: 'AI Marine Surveyors provides a prompt, reliable and cost effective surveying and consultancy service to the marine industry.',
  icons: {
    icon: '/public/favicon.ico', // <-- use your actual filename here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
