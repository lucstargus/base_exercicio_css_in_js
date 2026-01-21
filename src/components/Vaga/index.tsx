import { Card, Titulo, Descricao } from './styles'

type Props = {
  titulo: string
  descricao: string
}

const Vaga = ({ titulo, descricao }: Props) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Descricao>{descricao}</Descricao>
  </Card>
)

export default Vaga
