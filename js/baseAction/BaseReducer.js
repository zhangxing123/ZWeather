/**
 * Created by zhangxing on 2017/9/4.
 */
'use strict';

import * as types from './BaseActionType';

// 初始状态
const initialPositionState = {
    positionStatus: 'init', // init,doing,done,failure
    latitude: 39.915039,
    longitude: 116.403361,
}

export default function getPoition(state = initialPositionState, action) {
    switch (action.type) {
        case types.LOGIN_IN_INIT: // 初始状态
            return Object.assign({}, state, {
                status: 'init',
                latitude: false,
                longitude: null
            });
        case types.LOGIN_IN_DOING: // 正在登录
            return Object.assign({}, state, {
                status: 'doing',
                isSuccess: false,
                user: null
            });
        case types.LOGIN_IN_DONE: // 登录完成
            return Object.assign({}, state, {
                status: 'done',
                isSuccess: action.isSuccess,
                user: action.user
            })
        default:
            return state;
    }
}

