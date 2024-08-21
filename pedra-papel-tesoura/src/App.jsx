import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ptsJog, setPtsJog] = useState(0); 
  const [ptsComp, setPtsComp] = useState(0); 
  const [emp, setEmp] = useState(0); 
  const [jogador, setJogador] = useState(''); 
  const [computador, setComputador] = useState(''); 
  const [mensagem, setMensagem] = useState(''); 

  const opcoes = ['Pedra', 'Papel', 'Tesoura'];

  const jogar = (esc) => {
    setJogador(esc); 
    const aleatorio = opcoes[Math.floor(Math.random() * 3)];
    setComputador(aleatorio); 

    let resultado = ''; 

    if (esc === aleatorio) {
      setEmp(emp + 1); 
      resultado = 'Empate!';
    } else if (
      (esc === 'Pedra' && aleatorio === 'Tesoura') ||
      (esc === 'Papel' && aleatorio === 'Pedra') ||
      (esc === 'Tesoura' && aleatorio === 'Papel')
    ) {
      setPtsJog(ptsJog + 1); 
      resultado = 'Você Ganhou!';
    } else {
      setPtsComp(ptsComp + 1); 
      resultado = 'Você Perdeu!';
    }

    setMensagem(`Você escolheu ${esc}. O computador escolheu ${aleatorio}. ${resultado}`);
  };

  const reiniciar = () => {
    setPtsJog(0);
    setPtsComp(0);
    setEmp(0);
    setJogador('');
    setComputador('');
    setMensagem('');
  };

  return (
    <div className="container">
      <h1 className="titulo">Pedra, Papel, Tesoura</h1>
      <div className="placar">
        <p>Jogador: {ptsJog}</p>
        <p>Computador: {ptsComp}</p>
        <p>Empates: {emp}</p>
      </div>
      
      <div className="escolhas">
        <p>{mensagem}</p>
      </div>

      <div className="opcoes">
        {opcoes.map((op) => (
          <button key={op} onClick={() => jogar(op)} className="botao">
            {op}
          </button>
        ))}
      </div>

      <div className="acoes">
        <button onClick={reiniciar} className="botao-acoes">Jogar Novamente</button>
      </div>
    </div>
  );
};

export default App;
