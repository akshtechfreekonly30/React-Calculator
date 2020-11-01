import React from 'react';
import CalculatorTitle from './calculatortitle.js'
import Button from './button.js'
import OutputScreen from './outputscreen.js'
 
class Calculator extends React.Component{
constructor()
{
    super();
    this.state={
        question:'',
        answer:''
    }
    this.handleClick=this.handleClick.bind(this);
}
handleClick(event)
{
    const value=event.target.value;
    switch(value)
    {
        case '=':{
            if(this.state.question!=='')
            {
                var ans='';
                try{
                    ans=eval(this.state.question);
                }
                catch(err)
                {
                    this.setState({answer:"Math Error"});
                }
                if(ans==undefined)
                {
                    this.setState({answer:"Math Error"});
                }
                else
                {
                    this.setState({answer:ans,question:''});    
                }
                break;
            }
        }
    case 'Clear':{
        this.setState({question:'',answer:''});
        break;
    }
    case 'Delete':{
        var str=this.state.question;
        str=str.substr(0,str.length-1);
        this.setState({question:str});
        break;
    }
    default:
        {
            this.setState({question:this.state.question+=value})
            break;
        }
    }
}
    render(){
        return (
        <div className="frame">
        <CalculatorTitle value="Akshay Bhandare Calculator"/> 
        <div class="mainCalc"> 
        <OutputScreen/> 
        <div className="button-row">      
          <Button handleClick = {this.handleClick} label={'Clear'} /> 
          <Button handleClick = {this.handleClick} label={'Delete'} />
          <Button handleClick = {this.handleClick} label={'.'} /> 
          <Button handleClick = {this.handleClick} label={'/'} /> 
        </div> 
        <div className="button-row"> 
          <Button handleClick = {this.handleClick} label={'7'} /> 
          <Button handleClick = {this.handleClick} label={'8'} /> 
          <Button label={'9'} /> 
          <Button label={'*'} /> 
        </div> 
        <div className="button-row"> 
          <Button label={'4'} /> 
          <Button label={'5'} /> 
          <Button label={'6'} /> 
          <Button label={'-'} /> 
        </div> 
        <div className="button-row"> 
          <Button label={'1'} /> 
          <Button label={'2'} /> 
          <Button label={'3'} /> 
        <Button label={'+'} /> 
        </div> 
        <div className="button-row"> 
          <Button label={'0'} /> 
          <Button label={'='} /> 
        </div> 
        </div> 
        </div> 
        ); 
      } 
    } 

    export default Calculator; 
