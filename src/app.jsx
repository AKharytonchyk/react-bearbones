
import React, { Component} from "react";
import { hot } from "react-hot-loader/root";
import "./app.scss";
import Tabs from "./components/tabs";

const menuItems = [
    { id: 1,  name: 'Home'},
    { id: 2, name: 'Content'},
    { id: 3, name: 'About Us'}
]

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Tabs items={menuItems}
        />
      </div>
    );
  }
}

export default hot(App);