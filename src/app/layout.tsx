import './styles/globals.css'
export const metadata = { title: 'Sanduni Hansika — Portfolio', description: 'Portfolio' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
