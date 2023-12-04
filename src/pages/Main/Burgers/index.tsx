import { useSnack } from '../../../hooks/useSnack'
import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle/index'
import Snack from '../../../components/Snack'

export default function Burgers() {
  const { burgers } = useSnack()

  return (
    <>
      <Head title='Hambúrgues' description='Nossos melhores burguers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snack snacks={burgers} />
    </>
  )
}
