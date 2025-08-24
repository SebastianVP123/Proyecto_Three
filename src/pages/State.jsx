import React, { useState } from "react";

const State = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Estados (State)</h2>
      <p>
        El <b>state</b> es una de las características fundamentales en React, ya que permite a los 
        <b>componentes funcionales</b> almacenar y gestionar información local que puede cambiar a lo largo del 
        ciclo de vida del componente. A diferencia de las <b>props</b>, que son valores recibidos desde un 
        componente padre y no pueden modificarse directamente, el <b>state</b> sí puede actualizarse dentro del 
        propio componente, lo que lo convierte en una herramienta clave para crear interfaces dinámicas e 
        interactivas.
        <br/><br/>
        Cada vez que el <b>state</b> cambia mediante una función de actualización, React vuelve a renderizar el 
        componente para reflejar esos cambios en la interfaz. Esto permite, por ejemplo, manejar formularios, 
        contadores, menús desplegables, modales y cualquier tipo de dato que deba variar según la interacción 
        del usuario. 
        <br/><br/>
        En resumen, el <b>state</b> actúa como una memoria interna del componente, garantizando que la 
        aplicación responda de manera adecuada a los eventos y mantenga la coherencia entre la lógica y lo que 
        se muestra en pantalla.
      </p>
      
      <img src="https://miro.medium.com/v2/resize:fit:1154/1*3vTf6dMLOKTC-0geYESWCA.png" alt="State en React" style={{width: 1000}} />

      <pre>
        <code>{`const [contador, setContador] = useState(0);

<button onClick={() => setContador(contador + 1)}>
  Incrementar
</button>`}</code>
      </pre>

      <div className="card">
        <h4>🎯 Ejercicio: Contador Interactivo</h4>
        <p>Contador: <strong>{contador}</strong></p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        <button onClick={() => setContador(0)}>Resetear</button>
      </div>
    </div>
  );
};

export default State;