
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import HomePage from "./Pages/HomePage"
import Menu from "./Components/Menu/Index"
import Footer from "./Components/Menu/Footer"
import RegistroPage from "./Pages/RegistroPage"

import NewDetallePage from "./Pages/NewDetallePage"
import LoginPage from "./Pages/LoginPage"

function App() {
  

  return (
    
    <BrowserRouter>
      <Menu />
      
      <Route path="/" component={HomePage} exact />
      <Route path="/alta" component={RegistroPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/producto/:id" component={NewDetallePage} exact />     
      <Footer/>
    
    </BrowserRouter>
  
  );
}

export default App;
