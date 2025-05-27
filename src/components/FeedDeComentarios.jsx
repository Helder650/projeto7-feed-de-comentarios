import { useState } from 'react'
import FormularioComentario from './FormularioComentario'
import ListaComentarios from './ListaComentarios'

export default function FeedDeComentarios() {
  const [comentarios, setComentarios] = useState([])

  function adicionarComentario(nome, texto) {
    const novoComentario = {
      id: Date.now(),
      texto: `${nome} disse: ${texto}`
    }
    setComentarios([...comentarios, novoComentario])
  }

  return (
    <div>
      <FormularioComentario aoEnviar={adicionarComentario} />
      <ListaComentarios comentarios={comentarios} />
    </div>
  )
}