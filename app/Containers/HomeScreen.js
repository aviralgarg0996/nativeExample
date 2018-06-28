//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet ,Button} from "react-native";
import { connect } from "react-redux";
import * as firebase from "firebase";

// create a component
class HomeScreen extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: "#63b342",
     navBarTitleTextCentered: true,
  };
  render() {
    return (
      <View style={styles.container}>
        <Button 
            style={{width:200,marginBottom:30}}
                    onPress={()=>{
                        
                            try {
                                firebase.auth().signOut().then(()=>
                                    {

                                    
                                    // Sign-out successful.
                                    this.props.navigator.push({
                                        screen: 'example.FirstScreen',
                                        title: 'Login Page'
                                      });
                                   alert("signed Out")
                                    }
                                  ).catch((error)=> {
                                    // An error happened.
                                    alert(error)
                                  });
                                
                            } catch (error) {
                                alert(error.toString())
                            }
                        
                     
                    }}
                    title="LogOut"
                />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

//make this component available to the app
//make this component available to the app
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(HomeScreen);
