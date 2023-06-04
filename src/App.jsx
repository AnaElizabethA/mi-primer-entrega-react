//ORDEN de importacion:
// se importan las funciones de react primero
//la importacion de los componentes
//la importacion de los estilos

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import './App.css';


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenido a nuestra Tienda"} />
    </div>
  )
}

export default App

//Repaso de componentes:

//1) Renderizar un unico elemento.
// Pueden pasar pros de un componente padre a un hijo.