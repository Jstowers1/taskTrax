import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin' ]});

export const metadata = {
  title: 'taskTrax',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <div className="p-4">
          {children}
        </div>
      </body>
    </html>
  )
}
