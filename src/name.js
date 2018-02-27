import React from 'react'; 

export default class Name extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            firstname: null,
            lastname: null
        };
        this.handleChangeFname = this.handleChangeFname.bind(this);
        this.handleChangeLname = this.handleChangeLname.bind(this);
        this.next = this.next.bind(this);
    }

    handleChangeFname(event) {
        this.setState({firstname: event.target.value});
    }

    handleChangeLname(event) {
        this.setState({lastname: event.target.value});
    }

    next(){
       this.props.Proceed(this.props.list.dob); 
       this.props.SetValue(this.state.firstname +" "+this.state.lastname);      
    }

    render(){
        return(
            <div id="welcome" class="welcome">
                <h1 class="text-center" id="welcome-title">welcome home</h1>
                <h3 class="text-center">What is your name name nobel one?</h3>
                <div class="row">
                    <div class="col-md-12 wrapper">
                        <input type="text" class="textbox-default" placeholder="first name" value={this.state.firstname} onChange={this.handleChangeFname}/>
                        <input type="text" class="textbox-default" placeholder="last name" value={this.state.lastname} onChange={this.handleChangeLname}/>
                        <button class="btn btn-default btn-strong" type="button" id="startbutton" onClick={this.next} >Proceed </button>
                    </div>
                </div>
            </div>
        );
    }
}

