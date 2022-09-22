import './App.css';
import NavBar from "./components/navBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
