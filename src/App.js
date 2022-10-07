import './App.css';
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter } from 'react-router-dom';
import ItemListconteiner from "./components/ItemListConteiner/ItemListConteiner";

function App() {
  return (
    
      <BrowserRouter>
        <NavBar/>
        <ItemListconteiner/>
      </BrowserRouter>
    
  );
}

export default App;
