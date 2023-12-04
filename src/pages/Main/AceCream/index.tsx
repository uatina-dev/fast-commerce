import { useSnack } from '../../../hooks/useSnack'

import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snack from '../../../components/Snack'

export default function AceCream() {
  const { iceCreams } = useSnack()

  return (
    <>
      <Head title='Ice creams' description='Nossos melhores sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snack snacks={iceCreams} />
    </>
  )
}
