import {NavBar} from './components/NavBar/NavBar.jsx'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx'
//import './App.css'

const App = () => {
  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos a la tienda'}/>
      </div>
    </>
  )
}

export default App
