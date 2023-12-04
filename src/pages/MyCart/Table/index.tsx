import { useEffect, useState } from "react"
import { useCart } from "../../../hooks/useCart"
import { TableDesktop } from "./TableDesktop"
import { TableMobile } from "./TableMobile"
import { Empty } from "../../../components/Empty"

export function Table() {
  const { cart } = useCart()
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)

  useEffect(() => {
    function updateTableComponentBaseInWidth() {
      const currentWhidth = document.documentElement.clientWidth
      setWindowWidth(currentWhidth)
    }

    window.addEventListener('resize', updateTableComponentBaseInWidth)
    return () => {
      window.removeEventListener('resize', updateTableComponentBaseInWidth)
    }
  },[])

  if (cart.length === 0) {
    return <Empty title="Ops! Parece que você não tem pedidos."/>
  }

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
