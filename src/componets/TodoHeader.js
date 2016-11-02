const React = require('react');

export default class TodoHeader extends React.Component {
    render() {
        return (
                <thead>
                    <th>Task</th>
                    <th>Actions</th>
                </thead>
        )
    }
}
