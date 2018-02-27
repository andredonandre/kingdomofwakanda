import React from 'react'; 

export default class Preview extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div id="welcome" class="welcome">
                <h1 class="text-center" id="welcome-title">Welcome Home</h1>
                <h3 class="text-center">What tribe are you?</h3>
                <div class="row">
                    <div class="col-md-12 wrapper">
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle dropdown-default" data-toggle="dropdown" aria-expanded="false" type="button">Select Tribe <span class="caret"></span></button>
                            <ul class="dropdown-menu" role="menu">
                                <li role="presentation"><a href="#">First Item</a></li>
                                <li role="presentation"><a href="#">Second Item</a></li>
                                <li role="presentation"><a href="#">Third Item</a></li>
                            </ul>
                        </div>
                        <button class="btn btn-default btn-strong" type="button" id="startbutton">Proceed </button>
                    </div>
                </div>
            </div>
        );
    }
}
