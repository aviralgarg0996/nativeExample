//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Image,TextInput,Button} from 'react-native';
import { connect } from "react-redux";
import MapView from 'react-native-maps';
import axios from "axios";
import {basepath} from "../Utils/Constant"
// create a component
class DestinationMapScreen extends Component {
  state={
    latitude:"",
    longitude:"",
    error:"",
    selectedlatitude:"",
    selectedlongitude:"",
    _id:"",
    name:"",
    age:"",
    gender:"",
    mobile:"",
    token:""
  }
  componentDidMount() {
    this.setState({
        _id:this.props._id,
        token:this.props.token,
        name:this.props.name,
        age:this.props.age,
        gender:this.props.gender,
        mobile:this.props.mobile
      })
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log("wokeeey");
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

    render() {
        return (
            <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude:28.638774,
            longitude:77.366464,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
        >
          {!!this.state.latitude && !!this.state.longitude && 
          <MapView.Marker
          onDrag={() => console.log('onDrag', arguments)}
          onDragStart={() => console.log('onDragStart', arguments)}
          onDragEnd={(position)=>{
            console.log('onDragEnd',position.nativeEvent.coordinate,this.state.latitude)
this.setState({
  selectedlatitude:position.nativeEvent.coordinate.latitude,
  selectedlongitude:position.nativeEvent.coordinate.longitude
})
          }
          }
          draggable
         coordinate={{"latitude":this.state.latitude,
         "longitude":this.state.longitude}}
         title={"Your Location"}
       />}
        </MapView>
        <Button
         title="Set Destination"
         onPress={()=>{
             console.log("indestinationmap",this.state._id,this.state.selectedlatitude,this.state.selectedlongitude)
             axios({
                method: "put",
                url: basepath+"user/updateDes",
                data: {
                  _id:this.state._id,
                  destination: {
                    latitude1: this.state.selectedlatitude,
                    longitude1: this.state.selectedlongitude               
    }
                },
              })
                .then(response => {
                    console.log("responsinseccccccccce",response,this.props.token)
                    this.props.navigator.push({
                        screen: 'HomeScreen',
                        title: 'Survey',
                        passProps:{
                          selecteddestinationlatitude:this.state.selectedlatitude,
                          selecteddestinationlongitude:this.state.selectedlongitude,
                          _id:this.state._id,
                          name:this.state.name,
                          age:this.state.age,
                          gender:this.state.gender,
                          mobile:this.state.phoneNo,
                          token:this.state.token,
                        }
                      });
                })
                .catch(error => {
                  console.log("Error");
                  alert(error)
                })
           
         }}
        />
      </View>
          
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      top: 0,
      left:0,
      right:0,
      bottom:0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});
//make this component available to the app
function mapStateToProps(state) {
  return {

  };
}
mapDispatchToProps=(dispatch)=> {
  return {
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(DestinationMapScreen);
