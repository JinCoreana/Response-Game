# Response-Game
A response-game coded via React.
A simple game component using HTML,CSS and React.


## Image
  
<img src="https://github.com/JinCoreana/Response-Game/blob/main/img/example%201.JPG?raw=true" wdith="500px" height=auto >

## Main React method codes

```javascript
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
       
         };```



