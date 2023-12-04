import { useSnack } from '../../../hooks/useSnack'

import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snack from '../../../components/Snack'

export default function Pizzas() {
  const { pizzas } = useSnack()

  return (
    <>
      <Head title='Pizzas' description='Nossas melhores pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snack snacks={pizzas} />
    </>
  )
}
