import React, {Component} from 'react';


class ResponseGame extends Component {
    state = {
        state: 'waiting',
        message: 'Click to start the game',
        result: [],
    }
timeout;
startTime;
endTime;
     onClickScreen = () => {
     const {state, message, result} = this.state;
     if (state === 'waiting') {
         this.setState({
             state:'ready',
             message: 'Get ready and give a click on green'
         })
         this.timeout = setTimeout(()=> {
             this.setState({
                 state:'now',
                 message: 'Right now!'
             })
             this.startTime = new Date();
           
            }, Math.floor(Math.random() * 1000) + 2000);
        
         } else if (state === 'ready') {
            clearTimeout(this.timeout)
            this.setState({
                state:'fail',
               message: 'Boo! Too fast! Wait for Green'
            })
            
         }
         else if (state === 'now') {
         this.endTime = new Date()
         this.setState((prevState) => {
          return{ state:'waiting',
             message: ' Click to Start',
             result: [...prevState.result, this.endTime-this.startTime]
        
            } 
   })    
   console.log(result)
       
         }
     }
     onReset = () => {
        this.setState({
          result: [],
        });
      };
     renderAverage = () => {
        
        const {result} = this.state; 
        return result.length === 0 ? null : <> <div>Average Response Time: {this.state.result.reduce((a, c) => a + c)/
        result.length*0.001} sec </div>
        <button onClick={this.onReset}>Reset</button></>}
       

    render () 
    {
    const {state, message} = this.state;  
   return (
    <>
    <div id="screen" className={state} 
    onClick={this.onClickScreen}>
        {message}
    </div>
    <div id='note'>
    {this.renderAverage()}
    </div>
     </>

        )
    }
}
export default ResponseGame;