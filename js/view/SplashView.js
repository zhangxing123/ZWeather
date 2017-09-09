/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {getPosition} from '../baseAction/BaseAction'
var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;
var ScreenH = Dimensions.get('window').height;
import MainPage from './mainView/MainView';
class SplashView extends Component {
    constructor(props){
        super(props);
        var timer=null;
        this.durationTime=3000;
    }

    componentDidMount(){
        this.props.dispatch(getPosition());
        this.timer=setTimeout(()=>{startTimeOut(this.props.navigator)},this.durationTime);
    }


    render() {

        return (
            <ImageBackground style={{width:ScreenW,height:ScreenH,alignItems:'center',justifyContent:'center'}} source={require('../../drawable/splash.jpg')}>
                    <Ionicons name={'weather-partlycloudy'} size={80} color ={'#ffffff'}></Ionicons>
                    <Text style={{fontSize: 30,fontWeight: 'bold',color:'#ffffff'}}>ZWeather</Text>
            </ImageBackground>

        );
    }

}

function startTimeOut(nav){
    // 停止定时器
    nav.replace({
        id: 'MainPage',
        component: MainPage,
    });
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect()(SplashView);

