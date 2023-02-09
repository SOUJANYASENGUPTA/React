import React from "react";
import './book.css';
 class Book extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
    <div className="cards">
    <div class="card">
      <div class="header">
          <p>{this.props.title}</p>
      </div>
      <div class="container">
      <p align="center">{this.props.author}</p>
      <img src={this.props.img}/>
    </div>
  </div>
  </div>)
    }
 }

 export default Book;