const initailState = {
    todos : []
}

let nextId = 1;

const todoReducer = (state = initailState,action)=>{
    switch (action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos:[...state.todos,{id:nextId++,text:action.payload,completed:false}]
            };
        case "DELETE_TODO" :
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.payload)
            } 
        case 'TOGGLE_TODO' : 
            return {
                ...state,
                todos : state.todos.map(todo=> todo.id === action.payload ? {...todo,completed:!todo.completed} : todo)
            }       
        default :
            return state    
    }
      

    
}

export default todoReducer;