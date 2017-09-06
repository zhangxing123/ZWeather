/**
 * Created by zhangxing on 2017/9/4.
 */
'use starict';
import * as types from './BaseActionType';


export function doLogin(user) {
    navigator.geolocation.getCurrentPosition(
        (initialPosition) => this.setState({initialPosition}),
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
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
function getPosition() {
    return {
        type: types.GET_POSITION
    }
}
// 正在登录doLogin
function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

// 登录完成
function loginSuccess(isSuccess, user) {
    return {
        type: types.LOGIN_IN_DONE,
        isSuccess: isSuccess,
        user: user
    }
}

