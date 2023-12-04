import { useSnack } from '../../../hooks/useSnack'

import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snack from '../../../components/Snack'

export default function Drinks() {
  const { drinks } = useSnack()

  return (
    <>
      <Head title='Drinks' description='Nossas melhores drinks' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snack snacks={drinks} />
    </>
  )
}
