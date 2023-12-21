import React from 'react'
import { useState } from 'react'
import MeuComponente from './MeuComponente';
import MensagemCondicional from './MensagemCondicional';
import Formulario from './Formulario';
import Home from './Home';

/*
function MyButton(){
  const chavedelocho = () => {
    alert("coe");
    const ex = prompt("digita algo ai parceito: ");
    alert(`\n=> ${ex}\nmassa!!`)
  }
  return(
    <>
    <button onClick={chavedelocho}>Aperte</button>
    </>
  )
}   

function Teste(){
  const [num, setNum] = useState(0);
  const clicou = () => {
    setNum(num + 1);
  }
  if(num > 10){
    alert("tá sem oq fazer?")
  }
  return(
    <div> 
      <h1>Você clicou: {num} vezes </h1>
      <button onClick={clicou}>+1</button>
    </div>
  )
}

function Teste2(){
  const [nome, setNome] = useState("");

  const enviar = () => {
    return(
      alert(`Coe menor ${nome}`)
    )
  }

  return(
    <>
    <input type='text' placeholder='Nome' onChange={e => setNome(e.target.value)}></input>
    <button onClick={enviar}>Enviar</button>
    </>
  )
}
*/
function App() {
  const [dados, setDados] = useState(["Estudar", "Fazer compras no mercado"]);
  const [novoItem, setNovoItem] = useState("");

  const adicionarItem = () => {
    if(novoItem.trim() != ""){
      setDados([...dados, novoItem]);
      setNovoItem('');
      alert('Adicionado!');
    }
  }

  return (
    <>
      <ul>
        {dados.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
      <input 
        type='text' 
        value={novoItem} 
        onChange={(e) => setNovoItem(e.target.value)}
        placeholder='Insira um novo item'
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <MeuComponente mensagem="Caraca. Uau." />
      <MensagemCondicional></MensagemCondicional>
    </>
  )
}

function MyApp(){
      return(
        <div style={{backgroundColor: "#d9ccbd"}}>
          
          {/*
          <hr/><h1>Clique ai</h1>
         <MyButton />
          <br/><br/><hr/>
          <Teste/>
          <br/><hr/>
          <Teste2/>
          */}
          {/*<hr/>
          <App/>*/}
          <body style= {{backgroundColor: "#929287"}}></body>
          {/*<Formulario/>*/}
          <Home/>
        </div>
      )
}
export default MyApp;