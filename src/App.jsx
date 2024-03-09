import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
{/* Todo lo que esté relacionado con la navegación, debe ir dentro de BrowserRouter 
    Los que estén relacionados con la URL van dentro de Routes 
    Dentro de Routes no puede haber otro componente que no sea Route*/}


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='¡Bienvenidos a Happets!' />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados por categoría' />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer greeting='Item Detail Container' itemId='3'/>}/>
          {/*         Luego de : es lo que se define como dinámico */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
