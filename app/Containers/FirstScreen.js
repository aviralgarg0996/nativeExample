//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Image,TextInput,Button} from 'react-native';
import { connect } from "react-redux";
import * as firebase from "firebase";

// create a component
class FirstScreen extends Component {
    state = {
        email:'',
        pass:'',
      }
      static navigatorStyle = {
        navBarBackgroundColor: "#63b342",
         navBarTitleTextCentered: true,
      };
    render() {
        return (
            <View style={styles.mainView}>
            <Image
              style={styles.logo}
              source={require('../images/logo.png') }
            />
            <View style={styles.container}>
            <Text style={styles.textColor}>Enter Your Email</Text>
            <TextInput 
            style={styles.inputStyle}
            placeholder='Email' 
            keyboardType={'email-address'}
            underlineColorAndroid="transparent"
            value={this.state.email}
            onChangeText={(text)=>{
                this.setState({
                    email:text
                })
            }}/>
              <Text style={styles.textColor}>Enter Your Password</Text>
            <TextInput 
            style={styles.inputStyle}
            placeholder='Password' 
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            value={this.state.pass}
            onChangeText={(text)=>{
                this.setState({
                    pass:text
                })
            }}/>
            
            <Button 
            style={{width:200,marginBottom:30}}
                    onPress={()=>{
                        if(this.state.email=="")
                        {alert("Enter email")}
                        else if(this.state.pass=="")
                        alert("Enter Pass")
                        else
                        {
                            this.props.navigator.push({
                                            screen: 'example.SecondScreen',
                                            title: 'User Details'
                                          });
                            // try {
                            
                            //     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).then(()=>{
                            //       //  user signed in
                            //         this.props.navigator.push({
                            //             screen: 'HomeScreen',
                            //             title: 'Home Page'
                            //           });
                            //        alert("signed In")
                            //      }).catch((error)=> {
                            //         // Handle Errors here.
                            //         var errorCode = error.code;
                            //         var errorMessage = error.message;
                            //         // ...
                            //         if (errorCode === 'auth/wrong-password') {
                            //             alert('Wrong password.');
                            //         } else {
                            //             alert(errorMessage);         
                            //         }
                            //       });
                                    
                            
                            //     // Navigate to the Home page, the user is auto logged in
                            
                            // } catch (error) {
                            //     alert(error.toString())
                            // }
                        }
                     
                    }}
                    title="Login"
                /> 
                 {/* <Text
                 style={{color:'white',marginTop:20}}
                 onPress={() => this.props.navigator.push({
                    screen: 'example.SecondScreen',
                    title: 'SignUp Page'
                  })}
                 >Not an Account?Click here</Text> */}
                 </View>
                </View>
          
        );
    }
}

// define your styles
const styles = StyleSheet.create({

    container:{
        marginTop:0,
    
    },
        logo:{
            
            width:120,
            height:120,
            marginBottom:30
     
        },
        mainView:{
            justifyContent: 'center',
            alignItems: 'center',
            padding:20,
    backgroundColor:'#424242',
    width:'100%',
    height:'100%'
        },
        textColor:{
            color:'white'
        },
        inputStyle:{
            borderColor: 'gray',
             borderWidth: 1,
             width:300,
             borderRadius:5,
             marginTop:5,
             marginBottom:20,
             paddingLeft:10,
             color:'white'
        }
    })
//make this component available to the app
function mapStateToProps(state) {
  return {

  };
}
mapDispatchToProps=(dispatch)=> {
  return {
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(FirstScreen);
