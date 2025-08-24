import React from "react";

const Inicio = () => (
  <div>
    <h1>Proyecto Three React</h1>
    <p>Bienvenido al proyecto de ejemplo para aprender los conceptos fundamentales de React.</p>
    
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
      alt="React Logo" 
      style={{width: 250}} 
    />

    <div className="card">
      <h2>¿Qué es React?</h2>
      <p>
        React es una biblioteca de JavaScript creada por Facebook para construir interfaces de usuario modernas. 
        Su filosofía se basa en dividir la interfaz en <b>componentes reutilizables</b>, como piezas de LEGO 
        que puedes combinar para crear aplicaciones complejas.
        <br/><br/>
        Lo que hace especial a React es su <b>Virtual DOM</b> - una representación virtual del DOM real 
        que permite actualizaciones súper eficientes. Esto significa aplicaciones más rápidas y una mejor 
        experiencia de usuario.
      </p>
    </div>

    <div className="card">
      <h2>¿Por qué React es tan popular?</h2>
      <p>
        React no es solo una moda pasajera - es la tecnología que impulsa aplicaciones que usas todos los días 
        como Facebook, Netflix, Instagram y WhatsApp. Su popularidad viene de:
      </p>
      <ul>
        <li><b>Facilidad de aprendizaje:</b> Una vez que entiendes los conceptos básicos, todo fluye naturalmente</li>
        <li><b>Comunidad gigante:</b> Millones de desarrolladores comparten código, tutoriales y herramientas</li>
        <li><b>Versatilidad:</b> Mismo conocimiento para web, móviles (React Native) y aplicaciones de escritorio</li>
        <li><b>Oportunidades laborales:</b> Una de las habilidades más demandadas en el mercado tech</li>
      </ul>
    </div>

    <div className="card">
      <h2>Conceptos que aprenderás</h2>
      <p>
        Este proyecto cubre los conceptos esenciales que todo desarrollador React debe dominar:
      </p>
      <ul>
        <li><b>Props:</b> La forma de comunicar datos entre componentes</li>
        <li><b>Estado (State):</b> Cómo manejar información que cambia en tu aplicación</li>
        <li><b>Hooks:</b> Superpoderes para tus componentes funcionales</li>
        <li><b>Ciclo de vida:</b> Control total sobre cuándo y cómo se ejecuta tu código</li>
        <li><b>Virtual DOM:</b> El secreto detrás del rendimiento de React</li>
        <li><b>Redux:</b> Gestión de estado para aplicaciones grandes y complejas</li>
      </ul>
      <p>
        Cada tema incluye explicaciones claras, ejemplos prácticos y ejercicios interactivos.
      </p>
    </div>

    <div className="card">
      <h2>Cómo aprovechar este proyecto</h2>
      <p>
        Navega por las diferentes secciones usando el menú superior. Cada página está diseñada para 
        construir sobre los conocimientos anteriores, así que te recomiendo seguir el orden.
        
      </p>
    </div>
  </div>
);

export default Inicio;