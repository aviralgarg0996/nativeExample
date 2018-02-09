import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  AsyncStorage,
  NetInfo,
  PermissionsAndroid,
  Alert
} from "react-native";
import OpenSettings from 'react-native-open-settings';
export async function checkLocationPermisson() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    console.log('granted----------------------',granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
      console.log("You can use the gps")
    } else if(granted=='denied') {
        Alert.alert(
  'Location Permission',
  'We need your location for better services.',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'retry', onPress: () => checkLocationPermisson()},
  ],
  { cancelable: false }
)
     return false
    }
    else{
          Alert.alert(
  'Location Permission Denied',
  'You have denied the location permissions.please enable it from the `Settings` section of your phone.',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'Go To Settings', onPress: () => OpenSettings.openSettings()},
  ],
  { cancelable: false }
)
    }
     return false   
    } catch (err) {
    console.warn(err);
  }
}
