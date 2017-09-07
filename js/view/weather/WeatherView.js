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
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import {connect} from 'react-redux';
var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;
var ScreenH = Dimensions.get('window').height;
class WeatherView extends Component {
    constructor(props){
        super(props);
        var timer=null;
        this.durationTime=3000;
    }



    render() {

        return (
            <ImageBackground style={{width:ScreenW,height:ScreenH,alignItems:'center',justifyContent:'center'}} source={require('../../../drawable/splash.jpg')}>
                    <Ionicons name={'weather-partlycloudy'} size={80} color ={'#ffffff'}></Ionicons>
                    <Text style={{fontSize: 30,fontWeight: 'bold',color:'#ffffff'}}>ZWeather</Text>
            </ImageBackground>

        );
    }

}

function select(store)
{
    return {
        status: store.baseReducer.status,
        isSuccess: store.baseReducer.latitude,
        user: store.baseReducer.longitude
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(select)(WeatherView);

