import React from 'react'
import Card  from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  let user="sujal"
  const age=21
  return (
    <>
      <div >
        <Navbar/>
        <Card/>
        <h2>Hello I am {user} and age : {age}</h2>
        <Navbar/>
      </div>
      {Card()}
    </>
    
  )
}

export default App
