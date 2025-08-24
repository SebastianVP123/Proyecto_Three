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
        <div className="ejercicio-resultado">
          <strong>¿Qué vas a observar?</strong>
          <ul>
            <li><b>Al agregar un item:</b> Solo se añade el nuevo elemento, los demás no se re-renderizan</li>
            <li><b>Al eliminar un item:</b> Solo se remueve ese elemento específico</li>
            <li><b>Eficiencia:</b> React no recrea toda la lista, solo modifica lo necesario</li>
            <li><b>Performance:</b> Las operaciones son rápidas incluso con muchos elementos</li>
          </ul>
        </div>

        <div style={{margin: '1rem 0'}}>
          <button onClick={agregarItem}>
            ➕ Agregar Item
          </button>
          <p><small>Total de items: <strong>{items.length}</strong></small></p>
        </div>

        <div className="ejercicio-resultado">
          <h5>Lista dinámica (Virtual DOM en acción):</h5>
          {items.length === 0 ? (
            <p style={{fontStyle: 'italic', color: '#666'}}>No hay items en la lista</p>
          ) : (
            <ul style={{listStyle: 'none', padding: 0}}>
              {items.map((item, index) => (
                <li key={index} style={{
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '0.5rem',
                  margin: '0.5rem 0',
                  background: '#f0f9ff',
                  borderRadius: '8px',
                  border: '1px solid #e0e7ff'
                }}>
                  <span style={{fontSize: '1.1rem'}}>
                    📄 {item}
                  </span>
                  <button 
                    onClick={() => eliminarItem(index)} 
                    style={{
                      background: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '0.3rem 0.8rem',
                      fontSize: '0.9rem',
                      cursor: 'pointer'
                    }}
                  >
                    🗑️ Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="ejercicio-resultado" style={{marginTop: '1rem'}}>
          <p><small>💡 <strong>Experimenta:</strong> Agrega varios items y luego elimina algunos del medio. Observa cómo React solo actualiza los elementos que cambian, manteniendo el resto intacto.</small></p>
          <p><small>🔍 <strong>Inspecciona:</strong> Usa las herramientas de desarrollador del navegador para ver cómo solo se modifican los elementos específicos en el DOM real.</small></p>
        </div>
      </div>
    </div>
  );
};

export default VirtualDOM;