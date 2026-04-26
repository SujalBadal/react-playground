import React from 'react'
import Card from './components/Card'
import './App.css'
const App = () => {
  return (
    <div className="parent">
      <Card user="Aman" age={18} img="https://images.unsplash.com/photo-1751097006268-ae4601fcb117" />
      <Card user="Sarthak" age={28} img="https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3" />
      <Card user="Aditya" age={24} img="https://images.unsplash.com/photo-1751554933476-d029737d58b2" />
    </div>
  )
}

export default App