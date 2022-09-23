import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Register from './components/register';
//import Registermaid from './components/registermaid';
//import Front from './components/front';
//import Navbar from './Components/Navbar/Navbar';
//import Footer from './components/footer';
import { BrowserRouter , Route, Link, Routes, Redirect, Switch, Router} from 'react-router-dom';
//import Login from './components/login';
//import Contact from './components/contact';
//import Aboutus from './components/aboutus';
//import Termsandconditions from './components/termsandconditions';
//import AdminHome from './components/AdminHome';
//import CustomerDashboard from './components/customerdashboard';
import MainMenu from './components/MainMenu';

function App() {
  return (
  
    <div className="App">
     
        
      
      {/*}

      <div className="container-fluid">
          <BrowserRouter>
            <ul className="nav nav-tabs">
             
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/register">Customer Registration</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/registermaid">Maid Registration</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link> </li>
              
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/aboutus">About Us</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/termsandconditions">T&C</Link> </li>
           </BrowserRouter>     
  </ul>
            <Routes>
              
              <Route path="/" element={<Front/> } />
              <Route path="/register" element={<Register /> } />
              <Route path="/registermaid" element={<Registermaid /> } />
              <Route path="/login" element={<Login /> } />
              <Route path="/contact" element={<Contact /> } />
              <Route path="/aboutus" element={<Aboutus /> } />
              <Route path="/termsandconditions" element={<Termsandconditions /> } />
              <Route path="/AdminHome" element={<AdminHome /> } />
              
            </Routes>
 */}
      
  <MainMenu />
    </div>
  );
}

export default App;
