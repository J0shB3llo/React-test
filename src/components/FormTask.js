import React, { Component } from 'react';


class FormTask extends Component {
    constructor () {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTask(this.state);
        console.log('sending data...');
    }


    render() {
        return (
        <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
                <div className="form-group">
                    <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.handleInput}
                    placeholder="Title"
                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    name="user"
                    className="form-control"
                    value={this.state.user}
                    onChange={this.handleInput}
                    placeholder="User"
                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.handleInput}
                    placeholder="Description"
                    />
                </div>
                <div className="form-group">
                    <select
                        name="priority"
                        className="form-control"
                        value={this.state.priority}
                        onChange={this.handleInput}
                    >
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
        )
    }
}

export default FormTask;