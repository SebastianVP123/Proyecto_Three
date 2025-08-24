import React, { useState } from "react";

const VirtualDOM = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const agregarItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const eliminarItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Virtual DOM</h2>
      <p>
        El <b>Virtual DOM</b> es una representación ligera del <b>DOM real</b> que utiliza React para optimizar el proceso 
        de renderizado. En lugar de trabajar directamente con el árbol completo del navegador cada vez que ocurre un cambio, 
        React crea en memoria una copia simplificada del DOM conocida como <b>Virtual DOM</b>. 
        <br/><br/>
        Cuando el estado o las <b>props</b> de un componente cambian, React actualiza primero esta versión virtual y luego 
        compara las diferencias con el <b>DOM real</b> mediante un proceso llamado <b>diffing</b>. Una vez identificadas las 
        partes que realmente necesitan actualizarse, React modifica únicamente esos elementos en el DOM real, en lugar de 
        volver a renderizar toda la interfaz. 
        <br/><br/>
        Gracias a este enfoque, las aplicaciones construidas con React logran un <b>rendimiento más eficiente</b>, ya que 
        se minimiza el costo de manipular directamente el DOM del navegador, que suele ser una operación lenta. En resumen, 
        el <b>Virtual DOM</b> permite que los cambios en la interfaz sean más rápidos, fluidos y con un mejor uso de los 
        recursos.
      </p>
      
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230725135348/Browser-DOM-Virtual-DOM-copy.webp" alt="Virtual DOM" style={{width: 1000}} />

      <pre>
        <code>{`// React compara el Virtual DOM con el DOM real y actualiza solo lo necesario
ReactDOM.render(<App />, document.getElementById('root'));
`}</code>
      </pre>

      <div className="card">
        <h4>🎯 Ejercicio: Ver Virtual DOM en acción</h4>
        <p>React solo actualiza los elementos que cambian, no toda la lista:</p>
        <button onClick={agregarItem}>Agregar Item</button>
        
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => eliminarItem(index)} style={{marginLeft: '10px'}}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VirtualDOM;