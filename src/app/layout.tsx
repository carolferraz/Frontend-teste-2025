import StyledComponentsRegistry from './registry'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
