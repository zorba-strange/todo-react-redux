const React                       = require('react');
const { render }                  = require('react-dom');
const { createStore }             = require('redux');
const { Provider }                = require('react-redux');
const todos                       = require('./reducers/todos_reducer').default;
const App                         = require('./componets/App').default;


let store = createStore(todos);
render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app')
)
