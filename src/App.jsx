
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./css/App.css"
import Header from "./components/Header"
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import SideNav from './components/Nav'
import NotFoundPage from './pages/404Page'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <SideNav/>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/destination" element ={<Destination/>}/>
        <Route path="/crew" element ={<Crew/>}/>
        <Route path="/technology" element ={<Technology/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
