import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <ItemListContainer greeting='Bienvenidos' /> */}
      <ItemDetailContainer greeting='Item Detail Container' itemId='3'/>
    </>
  )
}

export default App
