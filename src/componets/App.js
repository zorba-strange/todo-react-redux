const React = require('react');
const TodoList = require('./TodoList').default;
const CreateTodo = require('./CreateTodo').default;

const App = () => {
        return (
            <div>
                <h1>Todo App</h1>
                <TodoList />
            </div>
        )
};

export default App;

// export default class App extends React.Component {
//     constructor(props){
//         super(props);

//         this.state={
//             todos
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Todo App</h1>
//                 <CreateTodo 
//                     createTask={this.createTask.bind(this)} 
//                     todos={this.state.todos} />
//                 <TodoList 
//                     todos={this.state.todos} 
//                     toggleTask={this.toggleTask.bind(this)} 
//                     deleteTask={this.deleteTask.bind(this)}
//                     saveTask={this.saveTask.bind(this)} />
//             </div>
//         )
//     }

//     toggleTask(task){
//         const foundTodo = _.find(this.state.todos, todo => todo.task === task);
//         foundTodo.isDone = !foundTodo.isDone;
//         this.setState({ todos: this.state.todos });
//     }
    
//     createTask(task){
//         this.state.todos.push({
//             task,
//             isDone: false
//         });
//         this.setState({ todos: this.state.todos });
//     }

//     saveTask(oldTask, newTask){
//        const foundTodo = _.find(this.state.todos, todo => todo.task == oldTask); 
//         foundTodo.task = newTask;
//         this.setState({ todos: this.state.todos });
//     }

//     deleteTask(deleteTask){
//         _.remove(this.state.todos, todo => todo.task === deleteTask);
//         this.setState({ todos: this.state.todos });
//     }


// }
