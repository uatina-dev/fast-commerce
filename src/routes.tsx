import { Routes, Route } from 'react-router-dom'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import IceCreamPage from './pages/Main/AceCream'
import DrinksPage from './pages/Main/Drinks'

import MainPage from './pages/Main'
import MyCartPage from './pages/MyCart'
import Payment from './pages/Payment'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='ace-cream' element={<IceCreamPage />} />
        <Route path='drinks' element={<DrinksPage />} />
      </Route>
      <Route path='cart' element={<MyCartPage />} />
      <Route path='payment' element={<Payment />} />
    </Routes>
  )
}
