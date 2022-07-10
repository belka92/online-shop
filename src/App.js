// import Navbar from './components/Navbar/Navbar';
import  Router  from './router/index';
import './App.css';
import {FooterContainer} from "./containers/footer"

function App() {
  return (
    <div className="App">
     <Router />
     <FooterContainer />
    </div>
  );
}

export default App;
