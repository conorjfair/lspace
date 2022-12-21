import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Testing from './pages/Testing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element ={<Home/>}/>
          <Route path={"/dashboard"} element ={<Dashboard/>}/>
          <Route path={"/test"} element ={<Testing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
