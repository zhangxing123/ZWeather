/**
 * Created by zhangxing on 2017/9/4.
 */
import React, { Component } from 'react';
import {
    View,
    Text,

} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import LoginPage from './LoginView'

export default class App extends Component {
    render() {
        return (
            <Navigator
                style={{flex: 1}}
                initialRoute= {{id: 'LoginPage', component: LoginPage}}
                configureScene= {this.configureScene}
                renderScene= {this.renderScene}
            />
        );
    }
    configureScene(route, routeStack) {
        if (route.sceneConfig) { // 有设置场景
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.PushFromRight; // 默认，右侧弹出
    }
    renderScene(route, navigator) {
        return <route.component {...route.passProps} navigator= {navigator}/>;
    }
}
