import { useState } from 'react'
import { Orders } from './components/Orders'
import { OrderForm } from './components/OrderForm'
import './App.css'

function App() {
  const [state, setState] = useState({1: {id: 1, name: "Alex", address: "123", items:"pizza", isComplete: true},
     2: {id: 2, name: "Kern", address: "456", items:"burgor", isComplete: false}}
  )
  
  // const [filtered, setFiltered] = filterComplete(state)

  const toggleComplete = (id) => {
    setState()
  };

  const filterComplete = (state) => {
    let complete = [];
    let inComplete = [];
    for (let ord of Object.values(state)) {
      console.log("ORD", ord);
      if (ord.isComplete) {
        complete.push(ord);
      } else {
        inComplete.push(ord);
      }
    }
    return [complete, inComplete]
  };

  return (
    <div className="App">
      inComplete orders: 
      <Orders  orders={filterComplete(state)[0]}/>
      Complete Orders:
      <Orders  orders={filterComplete(state)[1]}/>
    </div>
  )
}

export default App
