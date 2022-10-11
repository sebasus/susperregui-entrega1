import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailConteiner";


function App() {
  return (
    
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/Detalle/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
