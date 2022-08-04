import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "./component/pages/Home"
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/layout/Navbar";
import Adduser from "./component/users/Adduser";
import PageNotFound from "./component/pages/PageNotFound";
import EditUser from "./component/users/EditUser";
import User from "./component/users/User";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/user/add" element={ <Adduser/>} />
        <Route path="/user/edit/:id" element={ <EditUser/>} />
        <Route path="/user/:id" element={ <User/>} />
        <Route path="*" element={ <PageNotFound/>} />
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
