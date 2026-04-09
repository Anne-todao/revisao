import "./App.module.css";
import Separador from "./components/separador";
import CartaoUsuario from "./components/CartaoUsuario";
import { Contador } from "./components/Contador";
import ListaInvisivel from "./components/ListaInvisivel";
import PainelAlunos from "./components/PainelAlunos";
import ListagemAntiga from "./components/ListagemAntiga";
import AlertaPerigoso from "./components/AlertaPerigoso";
import BuscaSegura from "./components/BuscaSegura";
import Mural from "./components/Mural";
import PuxadorInfinito from "./components/PuxadorInfinito";
import CaixaVermelha from "./components/CaixaVermelha";
import AtualizaOcupacao from "./components/AtualizaOcupacao";
import Catalogo from "./components/Catalogo";
import PainelVip from "./components/PainelVip";
import DepositoDuplo from "./components/DepositoDuplo";

function App() {
  return (
    <>
      <h2>
        <strong>Exercício 1</strong>
      </h2>
      <CartaoUsuario nomePerfil="João" idade={30} />
      <Separador />

      <h2>
        <strong>Exercício 2</strong>
      </h2>
      <Contador />
      <Separador />

      <h2>
        <strong>Exercício 3</strong>
      </h2>
      <ListaInvisivel />
      <Separador />

      <h2>
        <strong>Exercício 4</strong>
      </h2>
      <PainelAlunos />
      <Separador />

      <h2>
        <strong>Exercício 5</strong>
      </h2>
      <ListagemAntiga />
      <Separador />

      <h2>
        <strong>Exercício 6</strong>
      </h2>
      <AlertaPerigoso />
      <Separador />

      <h2>
        <strong>Exercício 7</strong>
      </h2>
      <BuscaSegura />
      <Separador />

      <h2>
        <strong>Exercício 8</strong>
      </h2>
      <Mural 
      novoTweet = {["Estudando muito!"]}
      />
      <Separador />

      <h2>
        <strong>Exercício 9</strong>
      </h2>
      <PuxadorInfinito />
      <Separador />

      <h2>
        <strong>Exercício 10</strong>
      </h2>
      <CaixaVermelha />
      <Separador />

      <h2>
        <strong>Exercício 11</strong>
      </h2>
      <AtualizaOcupacao />
      <Separador />

      <h2>
        <strong>Exercício 12</strong>
      </h2>
      <Catalogo
        produtos={[
          { id: 1, nome: "Colar" },
          { id: 2, nome: "Brinco" },
          { id: 3, nome: "Perfume" },
        ]}
      />
      <Separador />

      <h2>
        <strong>Exercício 13</strong>
      </h2>
      <PainelVip isVip={true} />
      <Separador />

      <h2><strong>Exercício 14</strong></h2>
      <DepositoDuplo />
      <Separador />

    </>
  );
}

export default App;
