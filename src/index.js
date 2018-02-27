import React from 'react'; 
import ReactDOM from 'react-dom';
import Welcome from './welcome.js';
import DOB from './DOB.js';
import Tribes from './tribe.js'
import Name from './name.js';
import Preview from './preview.js'
import Confirm from './confirm.js';

class App extends React.Component{
  
    constructor(props){
        super(props);
        this.state ={
            currentStage: "",
            name: "",
            dob: new Date(),
            tribe: "test",
        };
    }

    proceed(level){
        this.setState({currentStage: level});
    }

    setName(value){
        this.setState({name: value});
    }
    setDob(value){
        this.setState({dob: value});
    }

    setTribe(value){
        this.setState({tribe: value});
    }

    render(){ 
        switch(this.state.currentStage) {           
            case levels.name:
                return(<Name Proceed = {x => this.proceed(x)} list = {levels} SetValue = {x => this.setName(x)} />);
                break;
            case levels.dob:
                return(<DOB Proceed = {x => this.proceed(x)} list = {levels} SetValue = {x => this.setDob(x)}/>);
                break;
            case levels.tribe:
                return(<Tribes Proceed = {x => this.proceed(x)} list = {levels} SetValue = {x => this.setTribe(x)}/>);
                break
            case levels.preview:
                return(<Preview Proceed = {x => this.proceed(x)} list = {levels} SetValue = {x => this.setTribe(x)}/>);
                break
            case levels.confirm:
                return(<Confirm Proceed = {x => this.proceed(x)} list = {levels} SetValue = {x => this.setTribe(x)} summary={this.state}/>);
                break
            default:
                return(<Welcome Proceed = {x => this.proceed(x)} list = {levels}/>);
        }    
    }
}
var levels = {
    initial: "initial",
    name: "name",
    dob: "dob",
    tribe: "tribe",
    preview: "preview",
    confirm: "confirm",
}

ReactDOM.render(<App />, document.getElementById('root'));

