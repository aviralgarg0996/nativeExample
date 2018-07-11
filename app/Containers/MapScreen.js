//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Image,TextInput,Button} from 'react-native';
import { connect } from "react-redux";
import MapView from 'react-native-maps';
import axios from "axios";
import {basepath} from "../Utils/Constant"
// create a component
class MapScreen extends Component {
  state={
    latitude:"",
    longitude:"",
    error:"",
    _id:"",
    name:"",
    age:"",
    gender:"",
    mobile:"",
    token:"",
    address:"",
    key:"AIzaSyDH6goBEWYbdmSimk2wdNV8o7nYTxoItMU",
    latituderegion:"28.638774",
    longituderegion:"77.366464",
    region: {
      latitude:28.638774,
      longitude:77.366464,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
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
   onRegionChange(region) {
   ()=> this.setState({ region });
  }
    render() {
        return (
            <View style={styles.container}>
            <TextInput style={{width:300}}
value={this.state.address}
onChangeText={(text) => this.setState({address:text})}
placeholder={"Enter your Address here"}
/>
<Button
title="Search Address Location"
onPress={()=>{
  axios({
    method: "get",
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=${this.state.key}`
  }).then(response => {
    console.log("response",response)
    let region= {
      latitude:response.data.results[0].geometry.location.lat,
      longitude:response.data.results[0].geometry.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    this.setState({
      latitude:response.data.results[0].geometry.location.lat,
      longitude:response.data.results[0].geometry.location.lng,
      region:region
    })
}).catch(error => {
  console.log("Error");
  alert(error)
})

}}
/>

        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          {!!this.state.latitude && !!this.state.longitude && 
          <MapView.Marker
          onDrag={() => console.log('onDrag', arguments)}
          onDragStart={() => console.log('onDragStart', arguments)}
          onDragEnd={(position)=>{
            console.log('onDragEnd',position.nativeEvent.coordinate,this.state.latitude)
          
            this.setState({
  latitude:position.nativeEvent.coordinate.latitude,
  longitude:position.nativeEvent.coordinate.longitude,
 
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
         title="Set Origin"
         onPress={()=>{
          console.log("inoriginmap",this.state._id,this.state.latitude,this.state.longitude)
          axios({
            method: "put",
            url: basepath+"user/updateOrigin",
            data: {
              _id:this.state._id,
              origin: {
                latitude: this.state.latitude,
                longitude: this.state.longitude               
}
            }
          })
            .then(response => {
                console.log("responsinseccccccccce",response,this.props.token)
                this.props.navigator.push({
                  screen: 'HomeScreen',
                  title: 'Survey',
                  passProps:{
                    selectedoriginlatitude:this.state.latitude,
                    selectedoriginlongitude:this.state.longitude,
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
    
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      top: 80,
      left:0,
      right:0,
      bottom:0,
      justifyContent: 'flex-end',
      alignItems: 'center',
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

export default connect(mapStateToProps,mapDispatchToProps)(MapScreen);
