import './App.css'
import {Route, Routes} from "react-router-dom"
import Nav from './components/Nav/Nav'
import Page from './components/Page'


function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Page title={"Home"}/>}/>
        <Route path="/plan" element={<Page title={"Plan"}/>}/>
        <Route path="/recipes" element={<Page title={"Recipes"}/>}/>
      </Routes>
    </div>
  )
}

export default App
