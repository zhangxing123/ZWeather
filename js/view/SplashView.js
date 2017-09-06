/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import {connect} from 'react-redux';
import {getDate} from './GetDataAction'
var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;
import MainPage from '../listviewDemo/ListViewDemo1';
class SplashView extends Component {
    componentDidMount(){
        getDate();
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        // 登录完成，且成功登录
        if (nextProps.status === 'done' && nextProps.isSuccess) {
            this.props.navigator.replace({
                id: 'MainPage',
                component: MainPage,
                passProps: {
                    user: nextProps.user
                },
            });
            return false;
        }
        return true;
    }

    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Text>{tips}</Text>
                <TouchableOpacity style={{backgroundColor: '#FF0000'}} onPress={this.handleLogin.bind(this)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
                        <Text style={{color: '#FFFFFF', fontSize: 20}}>登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }


}
// 执行登录
function getDate()
{

    this.props.dispatch(getDate());
}
function select(store)
{
    return {
        status: store.loginIn.status,
        isSuccess: store.loginIn.isSuccess,
        user: store.loginIn.user
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(select)(LoginPage);

