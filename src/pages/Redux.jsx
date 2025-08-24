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
          <div className="ejercicio-resultado">
            <strong>¿Qué vas a observar?</strong>
            <ul>
              <li><b>Store centralizado:</b> Todos los componentes acceden al mismo estado global</li>
              <li><b>Acciones (Actions):</b> Cada cambio se hace a través de acciones descriptivas</li>
              <li><b>Reducer puro:</b> La lógica de cambios está concentrada en una función predecible</li>
              <li><b>Comunicación entre componentes:</b> Los datos se comparten sin pasar props</li>
              <li><b>Inmutabilidad:</b> El estado nunca se modifica directamente, siempre se crea uno nuevo</li>
            </ul>
          </div>

          <ComponenteUsuario />
          <ComponenteTareas />
          <ComponenteResumen />

          <div className="ejercicio-resultado" style={{marginTop: '1rem'}}>
            <p><small>💡 <strong>Observa:</strong> Todos los componentes se actualizan automáticamente cuando el estado global cambia, sin necesidad de props o callbacks complejos.</small></p>
            <p><small>🔍 <strong>Patrón Redux:</strong> Usuario → Acción → Reducer → Nuevo Estado → Re-render automático</small></p>
          </div>
        </div>
      </div>
    </StoreContext.Provider>
  );
};

const ComponenteUsuario = () => {
  const { state, dispatch } = useContext(StoreContext);
  
  return (
    <div style={{margin: '1rem 0'}}>
      <h4>👤 Configurar Usuario:</h4>
      <input 
        type="text" 
        value={state.usuario} 
        onChange={(e) => dispatch({ type: 'SET_USUARIO', payload: e.target.value })}
        placeholder="Escribe tu nombre"
      />
      <p><small>Este componente envía la acción al reducer</small></p>
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
    <div style={{margin: '1rem 0'}}>
      <h4>📝 Gestionar Tareas:</h4>
      <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center', margin: '0.5rem 0'}}>
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
          style={{flex: 1}}
        />
        <button onClick={agregarTarea}>➕ Agregar</button>
      </div>
      
      <div style={{maxHeight: '200px', overflowY: 'auto'}}>
        {state.tareas.length === 0 ? (
          <p style={{fontStyle: 'italic', color: '#666'}}>No hay tareas aún. ¡Agrega una!</p>
        ) : (
          state.tareas.map(tarea => (
            <div key={tarea.id} style={{ 
              padding: '0.5rem', 
              margin: '0.5rem 0',
              background: tarea.completada ? '#f0f9ff' : '#fef3c7',
              borderRadius: '8px',
              border: `1px solid ${tarea.completada ? '#e0e7ff' : '#fbbf24'}`,
              cursor: 'pointer'
            }}>
              <span 
                onClick={() => dispatch({ type: 'TOGGLE_TAREA', payload: tarea.id })}
                style={{ 
                  textDecoration: tarea.completada ? 'line-through' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{fontSize: '1.2rem'}}>
                  {tarea.completada ? '✅' : '⏳'}
                </span>
                {tarea.texto}
              </span>
            </div>
          ))
        )}
      </div>
      <p><small>Haz clic en cualquier tarea para marcarla como completada/pendiente</small></p>
    </div>
  );
};

const ComponenteResumen = () => {
  const { state } = useContext(StoreContext);
  
  const tareasCompletas = state.tareas.filter(t => t.completada).length;
  const tareasPendientes = state.tareas.length - tareasCompletas;
  
  return (
    <div className="ejercicio-resultado" style={{marginTop: '1rem'}}>
      <h4>📊 Estado Global (Store):</h4>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
        <div style={{padding: '0.5rem', background: '#f0f9ff', borderRadius: '8px'}}>
          <strong>Usuario:</strong><br/>
          {state.usuario || '(sin nombre)'}
        </div>
        <div style={{padding: '0.5rem', background: '#f0f9ff', borderRadius: '8px'}}>
          <strong>Total tareas:</strong><br/>
          {state.tareas.length}
        </div>
        <div style={{padding: '0.5rem', background: '#f0f9ff', borderRadius: '8px'}}>
          <strong>Completadas:</strong><br/>
          ✅ {tareasCompletas}
        </div>
        <div style={{padding: '0.5rem', background: '#f0f9ff', borderRadius: '8px'}}>
          <strong>Pendientes:</strong><br/>
          ⏳ {tareasPendientes}
        </div>
      </div>
      <p><small>Este componente solo lee el estado, no envía acciones</small></p>
    </div>
  );
};

export default Redux;