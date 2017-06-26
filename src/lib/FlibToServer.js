import axios from 'axios';

const kUrl = "http://localhost:8000";
/*

    RESULT_OK => ## PARAMS(Start_date, End_date, Status_Point)
    RESULT_FAIL => 이벤트를 한번도 안했기 떄문에 getUserEventFirst 함수를 호출해야 한다

*/

export function getUserFlipEventInfo(user_code){

    return axios.get(kUrl + "/api/event/flip/" + user_code);
}

export function createUserFlipEvent(user_code){

    return axios.post(kUrl + "/api/event", {
        type : "Flip",
        user_code,
    });
}

export function createUserFlipEventInfo(event_id){
    //new Date().toISOString().substr(0, 10).replace('T', ' ');
    return axios.post(kUrl + "/api/event/flip/" + event_id);
}


export function getKSTDate(){

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();

    return year + "-" + month + "-" + date;
}
