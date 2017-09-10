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
    Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSet from 'react-native-vector-icons/MaterialIcons';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import {connect} from 'react-redux';

var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;
var ScreenH = Dimensions.get('window').height;
class WeatherView extends Component {
    constructor(props){
        super(props);

        this.durationTime=3000;
    }



    render() {
        let img=this.backgroundImg();
        return (
            <ImageBackground style={{width:ScreenW,height:ScreenH,alignItems:'center'}} source={img}>
             <IconSet name={'location-on'} size={25} color ={'#000000'}></IconSet>
            </ImageBackground>

        );
    }
    backgroundImg(){
        if (true){
            return require('../../../drawable/sunshine.jpg')
        }
    }
}

function select(store)
{
    return {
        WeatherStatus: store.getWeather.WeatherStatus,
        showapi_res_body: store.baseReducer.showapi_res_body,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(select)(WeatherView);

