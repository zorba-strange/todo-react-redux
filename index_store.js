const { createStore }             = require('redux');
const todos                       = require('./src/reducers/todos_reducer');
const App                         = require(./src/'componets/app');


let store = createStore(todos);
