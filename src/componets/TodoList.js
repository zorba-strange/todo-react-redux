const React = require('react');
const TodoHeader = require('./TodoHeader').default;
const _   = require('lodash');
const TodoItem = require('./TodoItem').default;
const { connect }       = require('react-redux');

const TodoLists = (todos) => (
    <div>
        <h1>test</h1>
    </div>
)

const TodoList = connect(
    mapStateToProps)(TodoLists)

export default TodoLists;






// export default class TodoList extends React.Component {
//     renderItems(){
//         const props = _.omit(this.props, 'todo');
//        return _.map(this.props.todos, (todo, index) => <TodoItem key={index} {...todo} {...props} />)}; 
//     render() {
//         return (
//             <table>
//                 <TodoHeader />
//                 <tbody>
//                     {this.renderItems()}
//                 </tbody>
//             </table>
//         )
//     }
// }
