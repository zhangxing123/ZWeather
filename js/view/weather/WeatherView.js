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
    Image,
    ScrollView,
    ListView,
} from 'react-native';
import MaterialIonicons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSet from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import {connect} from 'react-redux';
import Util from '../../util/utils';
var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;
var ScreenH = Dimensions.get('window').height;
var Wine = require('./wine.json'); // 数组
class WeatherView extends Component {
    constructor(props){
        super(props);
        this.durationTime=1000;
    }



    render() {
        let img=this._backgroundImg();
        return (
            <ImageBackground style={{width:ScreenW,height:ScreenH}} source={img}>
                <View style={styles.title}>
                    <IconSet name={'location-on'} size={25} color ={'#ffffff'}></IconSet>
                    <Text style={styles.titleText}>{this.props.showapi_res_body.cityInfo.c5+this.props.showapi_res_body.cityInfo.c3}</Text>
                </View>
                <View style={styles.lunchTime}>
                    <Text style={styles.lunchText}>发布时间:</Text>
                    <Text style={styles.lunchText}>{this._lunchTime()}</Text>
                </View>
                <View style={styles.weather}>
                    {this._weatherImg(this.props.showapi_res_body.now.weather)}
                <Text style={styles.weatherText}>{this.props.showapi_res_body.now.weather}</Text>
                </View>
                <View style={{width:ScreenW,justifyContent:'space-between',flexDirection:"row"}}>
                    <View style={styles.temperature}>
                       <Text style={styles.temperatureT1}>{this.props.showapi_res_body.now.temperature}</Text>
                       <Text style={styles.temperatureT2}>°c</Text>
                    </View>
                    <View style={{marginRight:20,alignItems:'center',marginTop:20}}>
                        <Text style={{color :'#ffffff'}}>{'pm2.5: '+this.props.showapi_res_body.now.aqiDetail.pm2_5}</Text>
                        <Text style={{color :'#ffff4d',fontSize:30,marginTop:10}}>{this.props.showapi_res_body.now.aqiDetail.quality}</Text>
                    </View>
                    </View>
                <View style={styles.withinDayHoursContainer}>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.withinDayHours}>
                        {this._hourView()}
                    </View>
                </ScrollView>
                    </View>
                <ListView
                    dataSource={this._renderData()} // 数据源
                    renderRow={this._renderRow.bind(this)}
                />
            </ImageBackground>

        );
    }
    _hourView(){
        return this.props.showapi_res_body.hourDataList.map((hourElem, hourIndex) => {
            if (hourIndex%2==0)
            return (
                <View key={hourIndex} style={styles.withinDayHoursBox}>
                    <Text style={hourIndex==0? styles.withinDayHoursTimeBold:styles.withinDayHoursTime}>{hourElem.temperature_time}</Text>
                    {this._weatherImg(hourElem.weather)}
                    <Text style={hourIndex==0? styles.withinDayHoursDegreeBold:styles.withinDayHoursDegree}>{hourElem.temperature}</Text>
                </View>
            );
        });
    }
    _backgroundImg(){
        let weatherimg=this.props.showapi_res_body.now.weather;
        if (weatherimg=='多云'){
            return require('../../../drawable/cloudy.jpg')
        }else if(weatherimg=='阴'){
            return require('../../../drawable/overcast.jpg')
        }else if(weatherimg=='晴'){
            return require('../../../drawable/sunshine.jpg')
        }else {
            return require('../../../drawable/rain.jpg')
        }
    }
    _lunchTime(){
        if (this.props.showapi_res_body.time){
            let time=this.props.showapi_res_body.time.toString();
            return time.substring(8,10)+'时'+time.substring(10,12)+'分';
        }else {
            return '未获取到时间';
        }

    }
    _weatherImg(weather){
        if (weather){
            if (weather=="多云"){
              return  <Image style={{width:20,height:20}} source={require('../../../drawable/cloudyImg.png')}></Image>;
            }else{
                if (weather=="晴"){
                    return  <Ionicons name={'ios-sunny'} size={20} color ={'#ffcd4d'}></Ionicons>;
                }else {
                    if (weather=="阴"){
                        return  <Ionicons name={'ios-cloudy'} size={20} color ={'#cacaca'}></Ionicons>;
                    }else {
                        return <Ionicons name={'md-rainy'} size={20} color={'#cacaca'}></Ionicons>;
                    }
                }
            }
        }
    }
    _renderData(){
        var ds=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let weatherArr=[];
        weatherArr.push(this.props.showapi_res_body.f1);
        weatherArr.push(this.props.showapi_res_body.f2);
        weatherArr.push(this.props.showapi_res_body.f3);
        weatherArr.push(this.props.showapi_res_body.f4);
        weatherArr.push(this.props.showapi_res_body.f5);
        weatherArr.push(this.props.showapi_res_body.f6);
        weatherArr.push(this.props.showapi_res_body.f7);
        return ds.cloneWithRows(weatherArr);
    }
    _renderRow(rowData,sectionID,rowID,highlightRow){
        var daytext;
        if(rowID==0){
            daytext='今天';
        }else{
            daytext=rowData.day.substring(4,6)+'/'+rowData.day.substring(6,8);
        }
        return(
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{Alert.alert('点击了'+rowID+'行')}}>
                <View  style={styles.withinWeekLine}>
                    <View style={styles.withinWeekDay}>
                        <Text style={styles.withinWeekDayText}>{daytext}</Text>
                    </View>
                    <View style={styles.withinWeekIcon}>
                        {this._weatherImg(rowData.day_weather)}
                    </View>
                    <View style={styles.withinWeekDegree}>
                        <Text style={styles.withinWeekHigh}>{rowData.night_air_temperature+'°c'+'~'+rowData.day_air_temperature+'°c'}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}

function select(store)
{
    return {
        WeatherStatus: store.getWeather.WeatherStatus,
        showapi_res_body: store.getWeather.showapi_res_body,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
    marginTop:30,
     alignItems:'center',
    flexDirection:"row",
        width:ScreenW,
        justifyContent:'center',
    },
    titleText:{
        fontSize:25,
        color :'#ffffff',
    },
    lunchTime:{
        marginTop:20,
        alignItems:'center',
        flexDirection:"row",
        width:ScreenW,
        justifyContent:'flex-end',
        paddingRight:10,
    },
    lunchText:{
        color :'#ffffff',
    },
    weather:{
        marginTop:10,
        alignItems:'center',
        flexDirection:"row",
        width:ScreenW,
        justifyContent:'flex-start',
        paddingLeft:50,
    },
    weatherText:{
        fontSize:15,
        color :'#ffffff',
        marginLeft:10,
    },
    temperature:{
        alignItems:'flex-start',
        flexDirection:"row",
        justifyContent:'flex-start',
        paddingLeft:30,
    },
    temperatureT1:{
        fontSize:80,
        color :'#ffffff',
    },
    temperatureT2:{
        marginTop:10,
        marginLeft:5,
        fontSize:25,
        color :'#ffffff',
    },
    withinDayHours:{
        paddingLeft:7,paddingTop:10,paddingBottom:10,paddingRight:10,
        flexDirection:"row",
        flexWrap:"nowrap"
    },
    withinDayHoursContainer:{
        alignItems:'center',
        flexDirection:"row",
        height:80,
        marginTop:30,
        borderTopColor:"rgba(255,255,255,0.7)",borderTopWidth:Util.pixel,
        borderBottomColor:"rgba(255,255,255,0.7)",borderBottomWidth:Util.pixel
    },
    withinDayHoursBox:{
        width:55,
        alignItems:'center'
    },

    withinDayHoursTime:{
        color:"#fff",
        fontSize:12,
        textAlign:"center"
    },
    withinDayHoursDegree:{
        color:"#fff",
        fontSize:14,
        paddingTop:5,
        textAlign:"center"
    },
    withinDayHoursDegreeBold:{
        color:"#fff",
        fontSize:15,
        textAlign:"center",
        paddingTop:5,
        fontWeight:"500"
    },
    withinDayHoursTimeBold:{
        color:"#fff",
        fontSize:13,
        textAlign:"center",
        fontWeight:"500",
    },
    withinWeekLine:{
        paddingVertical:15,
        flexDirection:"row",
        height: 28
    },
    withinWeekDay:{
        justifyContent:"center",
        alignItems:"flex-start",
        flex:1,
    },
    withinWeekDayText:{
        color:"#fff",
        paddingLeft:20,
        fontSize:15,
    },
    withinWeekIcon:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    withinWeekDegree:{
        justifyContent:"flex-end",
        alignItems:"center",
        flex:1,
        flexDirection:"row",
        paddingRight:25,
    },
    withinWeekHigh:{
        color:"#fff",
        fontSize:16,
        textAlign:"right"
    },
});

export default connect(select)(WeatherView);

