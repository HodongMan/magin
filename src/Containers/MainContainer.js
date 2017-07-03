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
            event_id : 0,
            user_code : "123",
        }

        this.setStatus = this.setStatus.bind(this);
        this.setUsersFlipEvent = this.setUsersFlipEvent.bind(this);
        this.setUsersNewFlipEvent = this.setUsersNewFlipEvent.bind(this);
        this.checkUserHasFlipEvent = this.checkUserHasFlipEvent.bind(this);
        this.createUserFirstFlibEvent = this.createUserFirstFlibEvent.bind(this);
        this.canEnjoyEvent = this.canEnjoyEvent.bind(this);
        this.judgeTodayFirstEvent = this.judgeTodayFirstEvent.bind(this);
        this.judgeHasOnlyClick = this.judgeHasOnlyClick.bind(this);
    }

    componentDidMount(){
        this.setState({user_code : '456'});
        this.setStatus();
    }

    async setStatus(){
        await getUserFlipEventInfo(this.state.user_code)
        .then(this.checkUserHasFlipEvent)
        .catch(error => console.log(error));
        this.canEnjoyEvent();
    }

    checkUserHasFlipEvent(result){
        if(result.data){
            this.setUsersFlipEvent(result.data);
        }else{
            this.createUserFirstFlibEvent();
        }
    }

    createUserFirstFlibEvent(){
        createUserFlipEvent(this.state.user_code)
        .then((result) => {
            if(result.data){
                createUserFlipEventInfo(result.data.id)
                .then((result) => {
                    this.setUsersNewFlipEvent(result.data);
                })
            }
        })
    }

    setUsersFlipEvent(data){
        this.setState({
            event_id : data.id,
            start_date : data.cc_event_flips[0].start_date.split("T")[0],
            end_date : data.cc_event_flips[0].end_date.split("T")[0],
        });
    }

    setUsersNewFlipEvent(data){
        this.setState({
            event_id : data.event_id,
            start_date : data.start_date.split("T")[0],
            end_date : data.end_date.split("T")[0],
        });
    }

    canEnjoyEvent(){
        let today = getKSTDate();

        console.log(this.state);
        if(this.judgeTodayFirstEvent(today, this.state.start_date, this.state.end_date)){
            console.log("이벤트 처음함");
        }else if(this.judgeHasOnlyClick(today, this.state.start_date, this.state.end_date)){
            console.log("클릭함 했었음");
        }else{
            console.log("오늘다함");
        }
    }

    judgeTodayFirstEvent(today, start_date, end_date){

        return (today > start_date) && (today > end_date)
    }

    judgeHasOnlyClick(today, start_date, end_date){

        return start_date > end_date
    }

    render(){
        return(
            <Main />
        )
    }
}

export default MainContainer;
