const React                 = require('react');
const {
    CREATE_TODO, 
    EDIT_TODO,     
    SAVE_TODO_EDIT,
    CANCEL_TODO_EDIT,
    DELETE_TODO
}                           = require('./ACTION_TYPES');



const addTodo = (task) => {
    return {
        type: CREATE_TODO,
        isDone: false,
        task
    }
};
