import React, { useState, useEffect, useContext, createContext } from "react";

const MiContexto = createContext();

const Hooks = () => {
  const [mensaje, setMensaje] = useState("Hola desde useState");
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTiempo(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <MiContexto.Provider value="Valor de contexto">
      <div>
        <h2>Hooks</h2>
        <p>
          Los <b>hooks</b> en React son una característica que permite a los 
          <b> componentes funcionales</b> utilizar <b>estado</b> y otras capacidades avanzadas de la librería 
          sin necesidad de escribir componentes de clase. Antes de su aparición, solo los componentes de clase 
          podían manejar <b>state</b> o acceder a métodos del ciclo de vida, lo que hacía que muchos 
          desarrolladores dependieran de clases para tareas relativamente sencillas.
          <br/><br/>
          Con los <b>hooks</b>, React introduce una forma más simple y organizada de reutilizar lógica entre 
          diferentes componentes. Por ejemplo, el <b>useState</b> permite manejar valores que cambian con la 
          interacción del usuario, el <b>useEffect</b> sirve para ejecutar efectos secundarios como peticiones 
          a una API o la suscripción a eventos, y el <b>useContext</b> facilita el uso de información compartida 
          entre varios componentes sin necesidad de pasar props manualmente.
          <br/><br/>
          En definitiva, los <b>hooks</b> hacen que el código sea más claro, reutilizable y fácil de mantener, 
          al mismo tiempo que reducen la necesidad de escribir componentes de clase para manejar funcionalidades 
          avanzadas en una aplicación de React.
        </p>
        
        <img 
          src="https://www.freecodecamp.org/news/content/images/2021/02/clip-3-usestate-min.gif" 
          alt="Gif ilustrativo de React" 
          style={{ width: "500px", borderRadius: "10px" }} 
        />

        <pre>
          <code>{`const [valor, setValor] = useState(0);
useEffect(() => {
  // Código a ejecutar
}, [valor]);
const contexto = useContext(MiContexto);`}</code>
        </pre>

        <div className="card">
          <h4>🎯 Ejercicio: Hooks en Acción</h4>
          <p>useState: {mensaje}</p>
          <p>useEffect (timer): {tiempo} segundos</p>
          <button onClick={() => setMensaje("¡Estado actualizado!")}>
            Cambiar Mensaje
          </button>
          <ContextoEjemplo />
        </div>
      </div>
    </MiContexto.Provider>
  );
};

const ContextoEjemplo = () => {
  const valor = useContext(MiContexto);
  return <p>useContext: {valor}</p>;
};

export default Hooks;