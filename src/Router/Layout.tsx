import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
interface Props {}

const Layout: React.FC<Props> = () => {
  return (
    <Container className="d-flex flex-column min-vh-100">
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Layout
