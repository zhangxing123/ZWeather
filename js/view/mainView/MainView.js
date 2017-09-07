/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

// 导入JSON数据
//var productData = require('./productData.json');
var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;
// 定义一些全局的变量
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ion from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from 'react-native-tab-navigator';
import WeatherView from '../weather/WeatherView'
export default class MainView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Weather'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        //设置选中的位置
                        selected={this.state.selectedTab === 'Weather'}
                        //标题
                        title="天气"
                        //标题样式
                        titleStyle={styles.tabText}
                        //选中时标题文字样式
                        selectedTitleStyle={styles.selectedTabText}
                        //图标
                        renderIcon={() =>  <Ionicons name={'weather-partlycloudy'} size={20} color ={'#acacac'}></Ionicons>}
                        //选中时图标
                        renderSelectedIcon={() => <Ionicons name={'weather-partlycloudy'} size={20} color ={'#ffffff'}></Ionicons>}
                        //点击Event
                        onPress={() => this.setState({selectedTab: 'Weather'})}>
                        <WeatherView/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Log'}
                        title="新闻"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Ionicons name={'newspaper'} size={20} color ={'#acacac'}></Ionicons>}
                        renderSelectedIcon={() => <Ionicons name={'newspaper'} size={20} color ={'#ffffff'}></Ionicons>}
                        onPress={() => this.setState({selectedTab: 'Log'})}>
                        <View style={styles.page0}>
                            <Text style={{fontSize: 18, padding: 15, color: 'blue'}}>This is Log Page</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Device'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Ion name={'person'} size={20} color ={'#acacac'}></Ion>}
                        renderSelectedIcon={() => <Ion name={'person'} size={20} color ={'#ffffff'}></Ion>}
                        onPress={() => this.setState({selectedTab: 'Device'})}>
                        <View style={styles.page1}>
                            <Text style={{fontSize: 18, padding: 15, color: '#fff'}}>This is Device Page</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tab: {
        backgroundColor: '#010f17',
        paddingBottom:2,
        height:50
    },
    tabText: {
        fontSize: 12,
        color: '#acacac',

    },
    selectedTabText: {
        fontSize: 12,
        color: '#ffffff'
    },
    icon: {
        width: 22,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});


