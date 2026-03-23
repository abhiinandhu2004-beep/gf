import { Route, Routes } from "react-router-dom"
import Home from "./comp/Home"
import Yes from "./comp/Yes"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Yes" element = {<Yes/>} />
      </Routes>
    </div>
  )
}

export default App
