import './App.css';
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter } from 'react-router-dom';
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    
      <BrowserRouter>
        <NavBar/>
        <ItemList/>
      </BrowserRouter>
    
  );
}

export default App;
