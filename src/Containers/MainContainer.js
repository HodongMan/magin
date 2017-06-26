import React, {Component} from 'react';

import {Main} from '../Components';
import {getUserFlipEventInfo, getKSTDate} from '../lib/FlibToServer';
import {createUserFlipEvent, createUserFlipEventInfo} from '../lib/FlibToServer';

class MainContainer extends Component{

    constructor(props){

        super(props);
        this.state = {
            start_date : "",
            end_date : "",
        }
    }

    componentDidMount(){

        getUserFlipEventInfo('123')
        .then(result => {

            if(result.data){
                this.setState({
                    start_date : result.data.cc_event_flips[0].start_date.split("T")[0],
                    end_date : result.data.cc_event_flips[0].end_date.split("T")[0],
                });
            }else{
                createUserFlipEvent('123')
                .then((result) => {
                    if(result.data){
                        createUserFlipEventInfo(result.data.id)
                        .then((result) => {
                            this.setState({
                                start_date : result.data.start_date.split("T")[0],
                                end_date : result.data.end_date.split("T")[0],
                            });
                        })
                        .catch(error => console.log(error))
                    }
                })
                .catch(error => console.log(error));
            }

        })
        .catch(error => console.log(error));
    }


    render(){
        return(
            <Main />
        )
    }
}

export default MainContainer;
