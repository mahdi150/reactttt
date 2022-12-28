import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import Router from './Router';
import Management from './component/management/Management';
import {BrowserRouter ,Routes,Route,Link} from "react-router-dom";
//import Container from "@material-ui/core/Container";
import { Container } from 'reactstrap';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Router />
      </Container>
    </BrowserRouter>
    // <div>
    //     <Router>
    //           <Header />
    //             <div className="container">
    //                 <Routes> 
    //                       <Route index element = {<Login />}></Route>
    //                       <Route path="home" element={<Home />} />
    //                       <Route path = "/add-employee/:id" ></Route>
    //                       <Route path = "/view-employee/:id"></Route>
    //                 </Routes>
    //             </div>
    //     </Router>
    // </div>
  );
}

export default App;
