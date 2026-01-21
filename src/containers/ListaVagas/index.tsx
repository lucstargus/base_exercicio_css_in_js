import Vaga from '../../components/Vaga'
import { Lista } from './styles'

const ListaVagas = () => (
  <Lista>
    <Vaga titulo="Desenvolvedor Front-end" descricao="React, TypeScript" />
    <Vaga titulo="Desenvolvedor Back-end" descricao="Node.js, APIs" />
  </Lista>
)

export default ListaVagas
