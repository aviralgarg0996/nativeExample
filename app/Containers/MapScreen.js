//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Image,TextInput,Button} from 'react-native';
import { connect } from "react-redux";
import MapView from 'react-native-maps';
// create a component
class MapScreen extends Component {
  state={
    latitude:"",
    longitude:"",
    error:""
  }
  componentDidMount() {
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
            latitude:-6.270565,
            longitude:106.759550,
            latitudeDelta: 1,
            longitudeDelta: 1
          }}
        >
          {!!this.state.latitude && !!this.state.longitude && 
          <MapView.Marker
         coordinate={{"latitude":this.state.latitude,
         "longitude":this.state.longitude}}
         title={"Your Location"}
       />}
        </MapView>
      </View>
          
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
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

export default connect(mapStateToProps,mapDispatchToProps)(MapScreen);
