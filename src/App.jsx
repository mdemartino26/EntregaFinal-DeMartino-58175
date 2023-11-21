import './App.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  return (
    <>
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('Catidad agregada ', quantity)}/>
    </div>
    </>
  )
}

export default App
