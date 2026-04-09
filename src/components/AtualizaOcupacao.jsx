import { useState } from "react";

export default function AtualizaOcupacao() {
  const [form, setForm] = useState({ nome: "Jonas", empresa: "" });

  const alterarEmpresa = () => {
    // ❌ ERRO: Essa linha apaga o "nome: Jonas". Adicione o Spread para consertar!
    setForm({
      ...form,
      empresa: "SENAI",
    });
  };

  return (
    <div>
      <p>Nome: {form.nome}</p>
      <p>Empresa: {form.empresa}</p>
      <button onClick={alterarEmpresa}>Mudar Empresa</button>
    </div>
  );
}
