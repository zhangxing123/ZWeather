/**
 * Created by zhangxing on 2017/9/4.
 */
'use starict';
import * as types from './BaseActionType';


export  function getPosition() {

    return dispatch=> {
        dispatch({type: types.POSITION_DOING});
        navigator.geolocation.getCurrentPosition(
            (initialPosition) => {
                dispatch({
                    type: types.POSITION_DONE,
                    latitude: initialPosition.coords.latitude,
                    longitude: initialPosition.coords.longitude,
                });
               dispatch( getWeather(initialPosition.coords.latitude, initialPosition.coords.longitude));

            },
            (error) => {
                dispatch({type: types.POSITION_FAILURE})
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
    }
}
    export function getWeather(latitude,longitude) {

            return dispatch=>{
            dispatch({type:types.GER_WEATHER_DOING});
            let result=fetch('http://route.showapi.com/9-5',{
                credentials:'omit',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'showapi_appid='+'45625'+'&showapi_sign='+'332e4d437f7b45f1962955a04ba0cb7e'+'&from='+'1'+'&needMoreDay='+'1'+
                //'&lng='+longitude+'&lat='+latitude+'&needMoreDay'+1+'&needIndex='+1+'&needHourData='+1
                '&lng='+106.931+'&lat='+27.754+'&needMoreDay'+1+'&needIndex='+1+'&needHourData='+1

            }).then((response) => response.json())
                .then((res)=>{
                if (res.showapi_res_code==0) {
                    //console.log('showapi_res_body:'+res.showapi_res_body.cityInfo.c3);
                    dispatch({
                        type: types.GER_WEATHER_DONE,
                        showapi_res_body:res.showapi_res_body,
                    });
                }else {
                    dispatch({type:types.GER_WEATHER_FAILURE});
                }
            }).
            catch((e) =>{
                dispatch({type:types.GER_WEATHER_FAILURE});
            });
        }


}



