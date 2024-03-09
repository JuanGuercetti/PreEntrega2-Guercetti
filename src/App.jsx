import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='¡Bienvenidos a Happets!' />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Resultados de la búsqueda' />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer greeting='Detalle del producto' />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
