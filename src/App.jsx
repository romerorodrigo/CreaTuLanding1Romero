import {NavBar} from './components/NavBar/NavBar.jsx'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx'
import './baseStyle.css'

const App = () => {
  return (
    <>
        <header>
          <NavBar/>
        </header>
        <main>
          <ItemListContainer greeting={'Bienvenidos a la tienda'}/>
        </main>
    </>
  )
}

export default App
