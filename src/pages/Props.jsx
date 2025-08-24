import React, { useState } from "react";

const EjemploProps = ({ nombre }) => <p>Hola, {nombre}!</p>;

const Props = () => {
  const [nombre, setNombre] = useState("React");

  return (
    <div>
      <h2>Props (Propiedades)</h2>
      <p>
        En React, las <b>props</b> (abreviatura de propiedades) permiten establecer un mecanismo de comunicación 
        entre componentes. En pocas palabras, sirven para pasar <b>información de un componente padre a un componente hijo</b>, 
        de manera que el hijo pueda utilizar esos datos sin necesidad de que los defina directamente en su interior. 
        <br/><br/>
        Las <b>props</b> son de solo lectura, lo que significa que un componente hijo no puede modificarlas, sino 
        únicamente recibirlas y usarlas. Este comportamiento ayuda a mantener la lógica de la aplicación más clara, ya que 
        el control de los datos se mantiene en el padre y los componentes hijos se encargan únicamente de mostrarlos o 
        utilizarlos. 
        <br/><br/>
        Gracias a este sistema, React fomenta la construcción de interfaces más organizadas y reutilizables, en las que los 
        componentes son piezas independientes que se comunican mediante <b>props</b>, creando así una estructura más 
        fácil de mantener y escalar.
      </p>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpUr1AJu9g41zwmtnrIqimhoIIwcfsrUX0PQ&s" alt="Diagrama de Props" style={{width: 500}} />
      
      <pre>
        <code>{`function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

<Saludo nombre="Juan" />`}</code>
      </pre>

      <div className="card">
        <h4>🎯 Ejercicio: Modifica la Prop</h4>
        <div className="ejercicio-resultado">
          <strong>¿Qué vas a observar?</strong>
          <ul>
            <li>Al escribir en el input, el componente hijo se actualiza automáticamente</li>
            <li>El componente padre controla el dato, pero el hijo lo recibe y muestra</li>
            <li>Esto demuestra el flujo unidireccional de datos en React</li>
            <li>Las props son inmutables: el hijo no puede cambiar directamente el valor</li>
          </ul>
        </div>
        
        <label htmlFor="nombre-input">Escribe un nombre para ver cómo las props se pasan al componente hijo:</label>
        <input 
          id="nombre-input"
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe un nombre"
        />
        
        <div className="ejercicio-resultado">
          <h4>Resultado del componente hijo:</h4>
          <EjemploProps nombre={nombre} />
          <p><small>💡 <strong>Observa:</strong> El componente hijo recibe "{nombre}" como prop y lo muestra sin poder modificarlo directamente.</small></p>
        </div>
      </div>
    </div>
  );
};

export default Props;