import { useState, useEffect } from 'react'
import './App.css'
import Finsert from './components/FInsert'
import Fupdate from './components/FUpdate'
import Fdelete from './components/FDelete'
import api from './api/api'
  

function App() {

  //Testes
const [instrutor, setInstrutor] = useState([
    {
      id: 1,
      nome: "Jorge",
      cpf: "123.123.123-12",
      telefone: "1234-2345",
      cref: "1234",
      data: "19/10/1111",
      ativo: "False"
    },
    ]);

    
function onAddNewInstrutor(nome,cpf,telefone,cref,data,ativo){
  const newInstrutor = {
    id: instrutor.length + 1,
    nome,
    cpf,
    telefone,
    cref,
    data,
    ativo,
  }
  setInstrutor([...instrutor,newInstrutor])


}

  return (
    <div className='box_principal'>
      <div className='inserts_box'>
        <Finsert onAddNewInstrutor={onAddNewInstrutor} />
      </div>
      <div className='inserts_box'>
        <Fupdate />
      </div>
      <div className='inserts_box'>
        <Fdelete/>
      </div>

    </div>
  )
}

export default App
