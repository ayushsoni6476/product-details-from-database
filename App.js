import React, { Component } from "react";

export default class App extends Component {
  render() {
    const {data} = this.props;
    const nameslist = data.map(name=>{
    return(<li>{name.name}</li>)
    })
    return(
      <ul>
        {nameslist}
      </ul>
    );
  }
}