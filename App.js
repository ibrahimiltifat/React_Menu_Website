import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from "./components/MenuComponent";
import Categories from "./components/Categories";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar >
                    <img src='assets/images/saltbae.jpg' className="image" />
                    <Categories/>
                </Navbar>
                <Menu/>
            </div>
        );
    }
}

export default App;