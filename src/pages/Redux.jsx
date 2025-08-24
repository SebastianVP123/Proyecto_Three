import React, { useReducer, createContext, useContext } from "react";

// Simulando Redux con useReducer y Context
const initialState = { 
  usuario: '', 
  tareas: [],
  filtro: 'todas' 
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USUARIO':
      return { ...state, usuario: action.payload };
    case 'AGREGAR_TAREA':
      return { 
        ...state, 
        tareas: [...state.tareas, { id: Date.now(), texto: action.payload, completada: false }] 
      };
    case 'TOGGLE_TAREA':
      return {
        ...state,
        tareas: state.tareas.map(tarea =>
          tarea.id === action.payload ? { ...tarea, completada: !tarea.completada } : tarea
        )
      };
    case 'CAMBIAR_FILTRO':
      return { ...state, filtro: action.payload };
    default:
      return state;
  }
}

const StoreContext = createContext();

const Redux = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div>
        <h2>Redux</h2>
        <p>
          <b>Redux</b> es una librería muy utilizada en aplicaciones desarrolladas con React para el manejo del 
          <b>estado global</b>. Su principal objetivo es ofrecer una forma predecible de gestionar los datos que 
          se comparten entre múltiples componentes, evitando así problemas de consistencia o la necesidad de 
          pasar información a través de muchos niveles de la aplicación.
          <br/><br/>
          En Redux todo gira en torno a un <b>store</b> centralizado, el cual actúa como una única fuente de la 
          verdad donde se guarda todo el estado de la aplicación. Para realizar cambios en ese estado, se 
          utilizan las <b>actions</b>, que son objetos simples que describen qué tipo de modificación se quiere 
          hacer. Finalmente, dichas acciones son procesadas por los <b>reducers</b>, que son funciones puras 
          encargadas de recibir el estado actual y la acción, y devolver un nuevo estado actualizado.
          <br/><br/>
          Gracias a esta estructura, <b>Redux</b> facilita el seguimiento de los cambios en la aplicación, ya que 
          cada paso está claramente definido: se envía una acción, los reducers la interpretan y el store guarda 
          el nuevo estado. Este patrón ayuda a construir aplicaciones más organizadas, fáciles de depurar y con 
          un control más claro sobre cómo y cuándo cambia la información.
        </p>
        
        <img src="https://lh7-us.googleusercontent.com/gBH2Ox4ahs9p1mgN9W2jHwTe_lGCp7Asfeo-qLkhb03hTpCo7vhy2JAbytn9mPuizT3DreqGK6cl2TdUMo0SVI74rKBkKqRKL4dqxz6RARQU3vufDDscq92Ig72VfltswXCXwcMGDDvJvGJDECLnuf1pSyxCJxSQXf5gnHWjS9Je5VCpgw5ea_7HBXg5hg" alt="Redux Flow" style={{width: 1000}} />

        <pre>
          <code>{`// Ejemplo básico de Redux
const initialState = { valor: 0 };
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return { valor: state.valor + 1 };
    default:
      return state;
  }
}`}</code>
        </pre>

        <div className="card">
          <h4>🎯 Ejercicio: Estado Global con Redux Pattern</h4>
          <ComponenteUsuario />
          <ComponenteTareas />
          <ComponenteResumen />
        </div>
      </div>
    </StoreContext.Provider>
  );
};

const ComponenteUsuario = () => {
  const { state, dispatch } = useContext(StoreContext);
  
  return (
    <div>
      <h4>Usuario:</h4>
      <input 
        type="text" 
        value={state.usuario} 
        onChange={(e) => dispatch({ type: 'SET_USUARIO', payload: e.target.value })}
        placeholder="Tu nombre"
      />
    </div>
  );
};

const ComponenteTareas = () => {
  const { state, dispatch } = useContext(StoreContext);
  const [nuevaTarea, setNuevaTarea] = React.useState('');
  
  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      dispatch({ type: 'AGREGAR_TAREA', payload: nuevaTarea });
      setNuevaTarea('');
    }
  };
  
  return (
    <div>
      <h4>Tareas:</h4>
      <input 
        type="text" 
        value={nuevaTarea} 
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      
      {state.tareas.map(tarea => (
        <div key={tarea.id} style={{ padding: '5px', margin: '5px 0' }}>
          <span 
            onClick={() => dispatch({ type: 'TOGGLE_TAREA', payload: tarea.id })}
            style={{ 
              textDecoration: tarea.completada ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {tarea.completada ? '✅' : '⏳'} {tarea.texto}
          </span>
        </div>
      ))}
    </div>
  );
};

const ComponenteResumen = () => {
  const { state } = useContext(StoreContext);
  
  return (
    <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
      <h4>Estado Global (Store):</h4>
      <p>Usuario: {state.usuario || 'Sin nombre'}</p>
      <p>Total de tareas: {state.tareas.length}</p>
      <p>Completadas: {state.tareas.filter(t => t.completada).length}</p>
    </div>
  );
};

export default Redux;