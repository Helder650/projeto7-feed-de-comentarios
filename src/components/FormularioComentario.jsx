import { useState } from 'react'

export default function FormularioComentario({ aoEnviar }) {
  const [nome, setNome] = useState('')
  const [comentario, setComentario] = useState('')

  function enviarComentario() {
    if (nome && comentario) {
      aoEnviar(nome, comentario)
      setNome('')
      setComentario('')
    }
  }

  return (
    <div>
      <h2>Feed de Comentários</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Comentário"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      />
      <button onClick={enviarComentario}>Enviar</button>
    </div>
  )
}