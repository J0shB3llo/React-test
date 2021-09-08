import React, { Component } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './components/login';
import { LogoutButton } from './components/logout';
import { Profile } from './components/profile';
import logo from './logo.svg';
import './App.css';

import { tasks } from './tasks.json';

import FormTask from './components/FormTask';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  handleRemove(index) {
    if (window.confirm('Are you sure?')) {
      this.setState({
        tasks: this.state.tasks.filter((e, i) => {
          return i !== index;
        })
      })
    } 
  }

  render() {
    const task = this.state.tasks.map((tasks, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
                <input type="checkbox" />
                <h3>{tasks.title}</h3>
                <span className="badge-pill badge-danger">
                   { tasks.priority }
                </span>
            </div>
            <div className="card-body">
                <p>{tasks.description}</p>
                <p><strong>{tasks.user}</strong></p>
            </div>
            <div className="card-footer">
                <button 
                  className="btn btn-danger"
                  onClick={this.handleRemove.bind(this, i)} >
                  Delete
                </button>

            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">  
        <nav className="navbar navbar-dark bg-dark">
            <a href="#" className="text-white">
                Tasks 
                <span className="badge badge-pill badge-light ml-2">
                  { this.state.tasks.length }
                </span>
            </a>
        </nav>
        <div className="container">
            <div className="row mt-4">
              <div className="col-md-3">
                  <img src={logo} className="App-logo" alt="logo" />
                  <FormTask onAddTask={this.handleAddTask}/>
              </div>
              <div className="mt-4 col-md-3 card">
                  <Profile />
                  <LoginButton />
                  <LogoutButton />
              </div>
              <div className="col-md-9">
                <div className="row">
                    { task }
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;