import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'AI Marine Surveyors Inc.',
  description: 'AI Marine Surveyors provides a prompt, reliable and cost effective surveying and consultancy service to the marine industry.',
  // ✅ icons আর লিখতে হবে না! favicon.ico app/ এ থাকলে Next.js নিজেই ধরে নেয়
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
     
      </body>
    </html>
  );
}