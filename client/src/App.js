import React from 'react'
import Home from './pages/Home.js'
import './App.css'

class App extends React.Component {
  state = { serverMessage: '' }

  componentDidMount(){
    fetch('/api/demo')
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
      })
  }

  render(){
    return (
      <div id="site">
        <Home />
      </div>
    )
  }
}

export default App
