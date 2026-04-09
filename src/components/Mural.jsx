import { useState } from "react";

export default function Mural() {
  const [tweets, setTweets] = useState(["Estudando muito!"]);
  const [novoTweet, setNovoTweet] = useState("React é show");

  const enviarTweet = () => {
    // ✅ ESCREVA ABAIXO A SOLUÇÃO CORRETA EM UMA ÚNICA LINHA
    // Usando o Spread Operator (...) para o Estado "tweets":
    setTweets([...tweets, novoTweet]);
    setNovoTweet("Digite um novo tweet antes de enviar novamente");
  };

return (
    <div>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>{tweet}</li>
        ))}
      </ul>
        <button onClick={enviarTweet}>Postar</button>
      </div>
);
};