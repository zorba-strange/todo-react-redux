const {
    CREATE_TODO, 
    EDIT_TODO,     
    SAVE_TODO_EDIT,
    CANCEL_TODO_EDIT,
    DELETE_TODO
}                           = require('./ACTION_TYPES');

const todos = (state=[], action) => {
    switch( action.type ) {
        case CREATE_TODO:
            return [
                ...state,
                {
                    task: action.task,
                    isDone: false
                }
            ]

        default:
            return state;
    }
}


export default todos;
