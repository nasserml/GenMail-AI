import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Provider from './provider';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Gen Email AI',
  description: 'Generate email templates with AI.',
  icons:{
    icon:'/logo.svg',
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
        <Toaster />

      </body>
    </html>
  );
}
