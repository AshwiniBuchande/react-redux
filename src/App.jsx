import './App.css'
import React from "react"
// import User from "./User"
import HomeContainer from './container/HomeContainer'

function App() {
  return(
    // <div className="app">
    //   {/* <h1>App Component</h1> */}
    //   <User data={{name:'Ashwini Buchande', age:30}}></User>
    // </div>

    <div className="App">
      <HomeContainer></HomeContainer>
    </div>

    
  )
}

export default App
