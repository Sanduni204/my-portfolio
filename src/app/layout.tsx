import '../styles/globals.css'
import NavBar from '../components/NavBar'
export const metadata = {
  title: 'Sanduni Hansika',
  description: 'Portfolio',
  icons: {
    icon: '/my-portfolio/images/profile-logo.png',
      },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
