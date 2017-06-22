import React, {Component} from 'react';

import {Main} from '../Components';
import {getUserFlipEventInfo} from '../lib/FlibToServer';

class MainContainer extends Component{

    constructor(props){

        super(props);
    }

    componentDidMount(){

        getUserFlipEventInfo('123')
        .then(result => console.log(result.data))
        .catch(error => console.log(error));
    }

    render(){
        return(
            <Main />
        )
    }
}

export default MainContainer;
