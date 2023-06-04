// aca vamos a recibir props desde la app
//esta consiga pide greeting un saludo
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <h2 className="text-center">
        {props.greeting}
    </h2>
  )
}

export default ItemListContainer