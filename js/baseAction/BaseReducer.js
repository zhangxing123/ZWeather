/**
 * Created by zhangxing on 2017/9/4.
 */
'use strict';

import * as types from './BaseActionType';

// 初始状态
const initialPositionState = {
    positionStatus: types.POSITION_INIT, // init,doing,done,failure
    latitude: 39.915039,
    longitude: 116.403361,
}

const initialWeatherState = {
    WeatherStatus: types.GER_WEATHER_INIT, // init,doing,done,failure
    time: 39.915039,
    c3: '',
}
export default function getPoition(state = initialPositionState, action) {
    switch (action.type) {
        case types.POSITION_INIT: // 初始状态
            return Object.assign({}, state, {
                status: types.POSITION_INIT,
                latitude: 39.915039,
                longitude: 116.403361,
            });
        case types.POSITION_DOING:
            return Object.assign({}, state, {
                status: types.POSITION_DOING,
            });
        case types.POSITION_DONE: {

            return Object.assign({}, state, {
                status: types.POSITION_DONE,
                latitude: action.latitude,
                longitude: action.longitude,
            });
        }
        case types.POSITION_FAILURE:
            return Object.assign({}, state, {
                status: types.POSITION_FAILURE,
            })
        default:
            return state;
    }
    export function getWeather(latitude,longitude) {

        return dispatch=>{
            dispatch(isLogining());
            let result=fetch('http://119.23.50.215:9089/iexe-pub/a/login',{
                credentials:'omit',
                method: 'POST',
                headers: {
                    'app': true,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'type='+user.type+'&id='+user.id+'&password='+user.password

            }).then((res)=>{
                if (!res.iserror) {
                    dispatch(loginSuccess(true, user));
                }else {
                    dispatch(loginSuccess(false, null));
                }
            }).
            catch((e) =>{
                dispatch(loginSuccess(false, null));
            });
        }

    }
}

