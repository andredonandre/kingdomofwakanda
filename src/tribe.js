import React from 'react'; 

export default class Tribes extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected: "select tribe",
        };
    }

    selected(event){
        this.setState({selected: event.target.value});
    }
    
    next(){
        this.props.Proceed(this.props.list.confirm);                
        this.props.SetValue(this.state.selected);
    }

    render(){
        return(
            <div id="welcome" class="welcome">
                <h1 class="text-center" id="welcome-title">welcome home</h1>
                <h3 class="text-center">What tribe are you?</h3>
                <div class="row">
                    <div class="col-md-12 wrapper">
                        <div class="dropdown">                            
                            <select class="textbox-default">
                                <option value="Jabari" onClick={this.selected.bind(this)}>Jabari</option>
                                <option value="River Tribe" onClick={this.selected.bind(this)}>River Tribe</option>
                                <option value="Gold Tribe" onClick={this.selected.bind(this)}>Gold Tribe</option>
                                <option value="Katanga tribe" onClick={this.selected.bind(this)}>Katanga tribe</option>
                            </select>
                        </div>
                        <button class="btn btn-default btn-strong" type="button" id="startbutton" onClick={this.next.bind(this)} >Proceed </button>
                    </div>
                </div>
            </div>
        );
    }
}
