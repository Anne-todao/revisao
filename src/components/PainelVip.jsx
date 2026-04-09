export default function PainelVip({ isVip }) {
  return (
    <div>
      <h1>Bem Vindo</h1>

      {/* ❌ ERRO: Troque essa condição bizarra inteira pelo formato com Operador
de Reatividade (&&) */}
      {isVip && <p>Você tem acesso ao lounge secreto!</p>}
    </div>
  );
}
