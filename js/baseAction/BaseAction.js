/**
 * Created by zhangxing on 2017/9/4.
 */
'use starict';
import * as types from './BaseActionType';


export  function getPosition() {

    return dispatch=>{
            dispatch({type:types.POSITION_DOING});
        navigator.geolocation.getCurrentPosition(
            (initialPosition) => {
                dispatch({
                    type: types.POSITION_DONE,
                    latitude:initialPosition.coords.latitude,
                    longitude:initialPosition.coords.longitude,
                });
            },
                    (error) => {dispatch({type:types.POSITION_FAILURE})},
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
            }

    //     dispatch(isLogining());
    //     let result=fetch('http://119.23.50.215:9089/iexe-pub/a/login',{
    //         credentials:'omit',
    //         method: 'POST',
    //         headers: {
    //             'app': true,
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: 'type='+user.type+'&id='+user.id+'&password='+user.password
    //
    //     }).then((res)=>{
    //         if (!res.iserror) {
    //             dispatch(loginSuccess(true, user));
    //         }else {
    //             dispatch(loginSuccess(false, null));
    //         }
    //     }).
    //         catch((e) =>{
    //             dispatch(loginSuccess(false, null));
    //      });
    // }

}


