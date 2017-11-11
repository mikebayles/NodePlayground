import React, {Component} from 'react';
import TaskList from './TaskList';

export default class PluralTodo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native'
                },
                {
                    task: 'Learn Redux Better'
                }
            ]
        }
    }

    render() {
        return (
            <TaskList todos={this.state.todos}/>
        )
    }
}