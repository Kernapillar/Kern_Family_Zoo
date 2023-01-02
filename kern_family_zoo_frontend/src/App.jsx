import { useState } from 'react'
import { Pictures } from './components/Pictures'
import './App.css'

function App() {

  const pics = [{id: 1, picture: "abc"}, 
                {id: 2, picture: "def"},
                {id: 3, picture: "ghi"},
                {id: 4, picture: "jkl"}, 
                {id: 5, picture: "mnop"},
                {id: 6, picture: "qrs"},
  ]

  return (
    <>
      <div className='nav'>
        navbar here
      </div>
      <div className='content'>
        <Pictures pictures={pics}/>
      </div>
    </>
  )
}

export default App
