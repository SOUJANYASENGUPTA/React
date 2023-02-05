import React from "react";
import './Quiz.css';

class Quiz extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            show:true
        }
    }




    render() {
        return (
            <div>
            {
              this.state.show?
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1>{this.props.q}</h1>
                            <button className='button togg' onClick={
                            ()=>{this.setState({show:!this.state.show})}
                            }> Answer </button> 
                        </div>
              
                    </div>
             
                </div>
             :<div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-back">
                        <h1>{this.props.a}</h1>
                        <button className='button togg' onClick={
                        ()=>{this.setState({show:!this.state.show})}
                        }> Question</button>
                    </div>
                </div>
            </div>
             
            }
             
         </div>
        )
     };
  }
 export default Quiz