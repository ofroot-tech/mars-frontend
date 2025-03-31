import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import '@/css/index.css'; // also global (non-default file)

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// You can remove this metadata block if you're not using TypeScript + metadata API
// Or keep it in a separate `metadata.js` file if needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
