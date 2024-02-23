import NavBar from './components/navbar/NavBar';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting='Bienvenidos'/>
    </>
  )
}

export default App
