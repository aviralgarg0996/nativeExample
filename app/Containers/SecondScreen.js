//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,TextInput,Button,Image } from "react-native";
import { connect } from "react-redux";
import * as firebase from "firebase";

// create a component
class SecondScreen extends Component {
  state={
    email:"",
    pass:"",
    confirmPass:"",
    name:"",
    mobile:""
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
        source={require('../images/slide1.png') }
      />
      <View style={styles.container}>
      <Text style={styles.textColor}>Enter Your Name</Text>
      <TextInput 
      style={styles.inputStyle}
      placeholder='Name' 
      underlineColorAndroid="transparent"
      value={this.state.name}
      onChangeText={(text)=>{
          this.setState({
              name:text
          })
      }}/>
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
       <Text style={styles.textColor}>Confirm Password</Text>
      <TextInput 
      style={styles.inputStyle}
      placeholder='Confirm Password' 
      underlineColorAndroid="transparent"
      secureTextEntry={true}
      value={this.state.confirmPass}
      onChangeText={(text)=>{
          this.setState({
              confirmPass:text
          })
      }}/>
      <Text style={styles.textColor}>Phone No</Text>
      <TextInput 
      style={styles.inputStyle}
      placeholder='Phone No' 
      underlineColorAndroid="transparent"
      password={true}
      value={this.state.mobile}
      onChangeText={(text)=>{
          this.setState({
              mobile:text
          })
      }}/>
      <Button 
      style={{width:200}}
              onPress={()=>{
                if(this.state.name=="")
                alert("Enter Name");
                else if(this.state.email=="")
                alert("Enter Email")
                else if(this.state.pass=="")
                alert("Password Field Empty")
                else if(this.state.confirmPass=="")
                alert("Confirm Password Field Empty")
                else if(this.state.mobile=="")
                alert("Mobile No Field Empty")
                else if(this.state.pass!=this.state.confirmPass)
                {
                  alert("Password not Match");
                  this.setState({
                    pass:"",
                    confirmPass:""
                  })
                }
                else{

                
                  try {
                       firebase.auth()
                          .createUserWithEmailAndPassword(this.state.email, this.state.confirmPass).then(()=>{
                            //  user signed in
                              this.props.navigator.push({
                                  screen: 'HomeScreen',
                                  title: 'Home Page'
                                });
                             alert("User Created")
                           }).catch(function(error) {
                              // Handle Errors here.
                              var errorCode = error.code;
                              var errorMessage = error.message;
                              // ...
                               alert(errorMessage);         
                              
                            });
                      // Navigate to the Home page, the user is auto logged in
                  
                  } catch (error) {
                      alert(error.toString())
                  }
                }
              }}
              title="Sign Up"
          /> 
           <Text
           style={{marginTop:10,color:'white'}}
           onPress={() => this.props.navigator.push({
            screen: 'example.FirstScreen',
            title: 'Login Screen'
          })}
           >Already an Account?Click here</Text>
           </View>
          </View>
    );
  }
}

// define your styles

const styles = StyleSheet.create({

  container:{
    marginTop:60,
  
  },
    logo:{
        padding:20,
        width:100,
        height:100,
  
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
//make this component available to the app
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SecondScreen);
