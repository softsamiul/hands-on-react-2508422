import React, {Component} from "react";

class Welcome extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return <h1>Meet {this.props.name}</h1>
  }
}

export default Welcome;