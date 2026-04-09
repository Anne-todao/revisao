import { useState } from 'react';

export default function DepositoDuplo() {
  const [dinheiro, setDinheiro] = useState(0);

  const transferir = () => {
   // ❌ ERRO: Escreva com Arrow Functions internas (valorAntigo => ...)
    setDinheiro(valorAntigo => valorAntigo + 200);
  };

  return (
    <div>
      <h1>Saldo: R$ {dinheiro}</h1>
      <button onClick={transferir}>Depositar R$ 200,00</button>
    </div>
  );
}