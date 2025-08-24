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
          <div className="ejercicio-resultado">
            <strong>¿Qué vas a observar?</strong>
            <ul>
              <li><b>useState:</b> El mensaje cambia cuando haces clic en el botón</li>
              <li><b>useEffect:</b> El timer se ejecuta automáticamente cada segundo desde que se montó el componente</li>
              <li><b>useContext:</b> El componente hijo accede a datos sin recibir props directamente</li>
              <li>Todos los hooks trabajan juntos en el mismo componente funcional</li>
            </ul>
          </div>

          <div className="ejercicio-resultado">
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', margin: '1rem 0'}}>
              <div>
                <h5>📝 useState:</h5>
                <p style={{padding: '0.5rem', background: '#f0f9ff', borderRadius: '8px', margin: '0.5rem 0'}}>
                  {mensaje}
                </p>
              </div>
              
              <div>
                <h5>⏰ useEffect (timer):</h5>
                <p style={{padding: '0.5rem', background: '#f0f9ff', borderRadius: '8px', margin: '0.5rem 0', fontSize: '1.2rem', textAlign: 'center'}}>
                  {tiempo} segundos
                </p>
              </div>
            </div>
          </div>

          <button onClick={() => setMensaje("¡Estado actualizado!")}>
            Cambiar Mensaje con useState
          </button>

          <ContextoEjemplo />

          <div className="ejercicio-resultado" style={{marginTop: '1rem'}}>
            <p><small>💡 <strong>Observa:</strong> El timer continúa corriendo independientemente de otros cambios. Esto demuestra cómo useEffect maneja efectos secundarios de forma autónoma.</small></p>
          </div>
        </div>
      </div>
    </MiContexto.Provider>
  );
};

const ContextoEjemplo = () => {
  const valor = useContext(MiContexto);
  return (
    <div className="ejercicio-resultado" style={{marginTop: '1rem'}}>
      <h5>🌐 useContext:</h5>
      <p style={{padding: '0.5rem', background: '#f0f9ff', borderRadius: '8px'}}>
        {valor}
      </p>
      <p><small>Este componente accedió al contexto sin recibir props</small></p>
    </div>
  );
};

export default Hooks;