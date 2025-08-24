import React, { useEffect, useState } from "react";

const ComponenteHijo = ({ nombre }) => {
  useEffect(() => {
    console.log(`Componente montado con nombre: ${nombre}`);
    
    return () => {
      console.log("Componente desmontado - cleanup");
    };
  }, []);

  useEffect(() => {
    console.log(`Nombre actualizado a: ${nombre}`);
  }, [nombre]);

  return (
    <div className="card" style={{margin: '1rem 0', background: '#f0f9ff'}}>
      <h4>Componente Hijo</h4>
      <p>Nombre: <strong>{nombre}</strong></p>
      <p>Abre la consola del navegador para ver los logs del ciclo de vida</p>
    </div>
  );
};

const CicloDeVida = () => {
  const [mostrar, setMostrar] = useState(true);
  const [nombre, setNombre] = useState("React");

  useEffect(() => {
    console.log("Componente padre montado");
  }, []);

  return (
    <div>
      <h2>Ciclo de vida de un componente</h2>
      <p>
        En los <b>componentes de clase</b> de React existen métodos del ciclo de vida que permiten controlar en qué momentos 
        se ejecuta cierto código. Algunos de los más conocidos son: <b>componentDidMount</b>, que se ejecuta cuando el 
        componente ha sido montado en el DOM; <b>componentDidUpdate</b>, que se ejecuta cada vez que el componente se 
        actualiza por un cambio en sus props o en su estado; y <b>componentWillUnmount</b>, que se ejecuta justo antes de 
        que el componente sea eliminado de la interfaz. Estos métodos eran fundamentales para manejar efectos secundarios, 
        como llamadas a APIs, suscripciones a eventos o la limpieza de recursos.
        <br/><br/>
        Con la llegada de los <b>componentes funcionales</b> y la introducción de los <b>hooks</b>, ya no es necesario 
        depender de las clases para manejar este tipo de lógica. En este caso, se utiliza el hook <b>useEffect</b>, el cual 
        permite ejecutar código después de que el componente se renderiza, reaccionar a cambios en ciertas variables, y 
        también limpiar efectos cuando el componente se desmonta. En otras palabras, <b>useEffect</b> combina en un solo 
        lugar la funcionalidad que antes estaba dividida en varios métodos del ciclo de vida de los componentes de clase.
      </p>
      
      <img src="https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Freact%2Fciclo-de-vida-obsoleto.png&w=1200&q=75" alt="Ciclo de vida" style={{width: 1000}} />
      
      <pre>
        <code>{`useEffect(() => {
  // Código a ejecutar al montar el componente
  return () => {
    // Código a ejecutar al desmontar
  };
}, []);`}</code>
      </pre>

      <div className="card">
        <h4>🎯 Ejercicio: Ciclo de Vida</h4>
        <div className="ejercicio-resultado">
          <strong>¿Qué vas a observar?</strong>
          <ul>
            <li><b>Al cambiar el nombre:</b> Se ejecuta el useEffect que detecta cambios en la prop</li>
            <li><b>Al ocultar el componente:</b> Se ejecuta la función de limpieza (cleanup)</li>
            <li><b>Al mostrar el componente:</b> Se ejecuta el useEffect de montaje</li>
            <li><b>En la consola:</b> Verás todos los logs del ciclo de vida en tiempo real</li>
          </ul>
        </div>

        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '1rem 0'}}>
          <div>
            <label htmlFor="nombre-ciclo">Nombre para el componente hijo:</label>
            <input 
              id="nombre-ciclo"
              type="text" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Cambia el nombre"
            />
          </div>
          
          <button onClick={() => setMostrar(!mostrar)}>
            {mostrar ? '👁️ Ocultar' : '👁️ Mostrar'} Componente
          </button>
        </div>

        <div className="ejercicio-resultado">
          <p><strong>Estado actual:</strong> El componente está {mostrar ? 'visible' : 'oculto'}</p>
          {mostrar ? (
            <p>✅ El componente hijo está montado y recibiendo props</p>
          ) : (
            <p>❌ El componente hijo está desmontado (cleanup ejecutado)</p>
          )}
        </div>
        
        {mostrar && <ComponenteHijo nombre={nombre} />}

        <div className="ejercicio-resultado" style={{marginTop: '1rem'}}>
          <p><small>💡 <strong>Tip:</strong> Abre las herramientas de desarrollador (F12) y ve a la pestaña "Console" para ver todos los logs del ciclo de vida en acción.</small></p>
        </div>
      </div>
    </div>
  );
};

export default CicloDeVida;