const {
    CREATE_TODO, 
    EDIT_TODO,     
    SAVE_TODO_EDIT,
    CANCEL_TODO_EDIT,
    DELETE_TODO
}                           = require('../actions/ACTION_TYPES');

const todos_seeds = [
    {
        task: 'complete app',
        isDone: false
    },
    {
        task: 'get money',
        isDone: true
    },
];

const todos = (state=todos_seeds, action) => {
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
