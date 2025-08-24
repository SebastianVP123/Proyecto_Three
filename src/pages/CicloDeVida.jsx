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
    <div className="card">
      <h4>Componente Hijo</h4>
      <p>Nombre: {nombre}</p>
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
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Cambia el nombre"
        />
        <button onClick={() => setMostrar(!mostrar)}>
          {mostrar ? 'Ocultar' : 'Mostrar'} Componente
        </button>
        
        {mostrar && <ComponenteHijo nombre={nombre} />}
      </div>
    </div>
  );
};

export default CicloDeVida;