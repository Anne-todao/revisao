export default function Catalogo({ produtos }) {
  return (
    <ul>
      {produtos.map((item) => (
        // ❌ Conserte essa Li, ela precisa de uma marcação única! (item.id)
        <li key={item.id}>{item.nome}</li>
      ))}
    </ul>
  );
}
