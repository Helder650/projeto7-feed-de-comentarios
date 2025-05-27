export default function ListaComentarios({ comentarios }) {
  return (
    <ul>
      {comentarios.map((comentario) => (
        <li key={comentario.id}>Comentário: {comentario.texto}</li>
      ))}
    </ul>
  )
}