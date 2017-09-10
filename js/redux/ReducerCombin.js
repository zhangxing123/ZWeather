/**
 * Created by zhangxing on 2017/9/4.
 */
'use strict';

import {combineReducers} from 'redux';
import baseReducer ,{getWeather}from '../baseAction/BaseReducer';

const rootReducer = combineReducers({
    baseReducer,
    getWeather
});

export default rootReducer;

