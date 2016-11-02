const { createStore }             = require('redux');
const todos                       = require('./src/reducers/todos_reducer');


let store = createStore(todos);
