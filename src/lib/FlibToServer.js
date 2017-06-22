import axios from 'axios';

const kUrl = "http://localhost:8000";
/*

    RESULT_OK => ## PARAMS(Start_date, End_date, Status_Point)
    RESULT_FAIL => 이벤트를 한번도 안했기 떄문에 getUserEventFirst 함수를 호출해야 한다

*/

export function getUserFlipEventInfo(user_code){

    return axios.get(kUrl + "/api/event/flip/" + user_code);
}
