/**
 * Created by zhangxing on 2017/9/4.
 */
'use starict';
import * as types from './ActionType';

export function getDate() {

    return dispatch=>{
        navigator.geolocation.getCurrentPosition(
            (initialPosition) => {
                dispatch()
            },
                    (error) => alert(error.message),
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
            }
        );
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
// 正在登录doLogin
function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}
// 获取位置
function getPosition() {
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

