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
        case types.POSITION_DONE:
        return Object.assign({}, state, {
            status: types.POSITION_DONE,
            latitude: action.latitude,
            longitude: action.longitude,
        });
        case types.POSITION_FAILURE:
            return Object.assign({}, state, {
                status: types.POSITION_FAILURE,
            })
        default:
            return state;
    }
}

