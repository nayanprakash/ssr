import React, { Component } from 'react'
import logo from '../../assets/logo.svg';
import '../../App.css';

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                       About Page Loaded
        </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
        </a>
                </header>
            </div>
        )
    }
}