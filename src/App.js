import './App.css';
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter } from 'react-router-dom';
//import ItemList from "./components/ItemList/ItemList";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Card/>
      </BrowserRouter>
    </div>
  );
}

export default App;
