import React from 'react'; 
import DatePicker from 'react-date-picker';

export default class DOB extends React.Component {

    constructor(props){
        super(props);

        this.state={
            date: new Date(),
        };
    }

    onChange(val) {
        this.setState({date: val});
    }
    next(){
        this.props.SetValue(this.state.date);
        this.props.Proceed(this.props.list.tribe);
    }

    render(){
        return(
            <div id="welcome" class="welcome">
                <h1 class="text-center" id="welcome-title">welcome home</h1>
                <h3 class="text-center">When were you born?</h3>
                <div class="row">                    
                    <div class="col-md-12 wrapper">
                        <DatePicker
                            className="date-default"
                            onChange={this.onChange.bind(this)}
                            value={this.state.date}
                        />
                        <button class="btn btn-default btn-strong" type="button" id="startbutton" onClick={this.next.bind(this)}>Proceed </button>
                    </div>
                </div>
            </div>
        );
    }
}

