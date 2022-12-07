import { useState } from 'react'
import { Orders } from './components/Orders'
import { OrderForm } from './components/OrderForm'
import './App.css'

function App() {
  const [state, setState] = useState({
    completeOrders: {1: {id: 1, name: "Alex", address: "123", items:"pizza", isComplete: true}},
    incompleteOrders: {1: {id: 2, name: "Kern", address: "456", items:"burgor", isComplete: false}}
  })



  return (
    <div className="App">
      <Orders  orders={Object.values(state.incompleteOrders)}/>
      <Orders  orders={Object.values(state.completeOrders)}/>
    </div>
  )
}

export default App
