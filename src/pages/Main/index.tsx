import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import { Sidebar } from '../../components/Sidebar'

import logoImg from '../../assets/logo-food-optimized.svg'
import { Order } from '../../components/Order'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>
      <Order />
    </Container>
  )
}
