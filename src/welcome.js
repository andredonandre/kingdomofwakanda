import React from 'react'; 

export default class Welcome extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div id="welcome" class="welcome">
                <h1 class="text-center" id="welcome-title">welcome home</h1>
                <h3 class="text-center">Claim your wakandan birth certificate now</h3>
                <div class="row">
                    <div class="col-md-12 wrapper">
                        <button class="btn btn-default btn-strong" type="button" id="startbutton" onClick={() => this.props.Proceed(this.props.list.name)}>Get started</button>
                    </div>
                </div>
            </div>
        );
    }
}


