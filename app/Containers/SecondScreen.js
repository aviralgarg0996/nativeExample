//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,TextInput,Button,Image ,ScrollView} from "react-native";
import { connect } from "react-redux";
import RadioGroup from 'react-native-radio-buttons-group';
import axios from "axios";
import {basepath} from "../Utils/Constant"
import MapView from 'react-native-maps';
// create a component
class SecondScreen extends Component {
  state={
    email:"",
    age:"",
    name:"",
    mobile:"",
    address:"",
    token:"",
    sexData:[
      {
        label: 'Male',
        value:'Male',
        size: 30,
        color:'green',
      },
      {
        label: 'Female',
        value:'Female',
        size: 30,
        color:'green',
      }, 
    ],
  }
  static navigatorStyle = {
    navBarBackgroundColor: "#63b342",
     navBarTitleTextCentered: true,
  };
  render() {
    let sexDataButton = this.state.sexData.find(e => e.selected == true);
    sexDataButton = sexDataButton ? sexDataButton.value : this.state.sexData[0].label;
    ()=>this.setState({
    token:this.props.token
    })
console.log("token in second screen",this.props.token,this.state.token);
    
    return (
      <ScrollView>
      <View style={styles.mainView}>
      <Image
        style={styles.logo}
        source={require('../images/logo.png') }
      />
      <View style={styles.container}>
      <Text style={styles.textColor}>Enter Name</Text>
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
      <Text style={styles.textColor}>Enter Email</Text>
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
      <Text style={styles.textColor}>Phone No</Text>
      <TextInput 
      style={styles.inputStyle}
      placeholder='Phone No' 
      underlineColorAndroid="transparent"
      password={true}
      keyboardType='numeric'
      maxLength={10}
      value={this.state.mobile}
      onChangeText={(text)=>{
          this.setState({
              mobile:text
          })
      }}/>
       <Text style={styles.textColor}>Address</Text>
      <TextInput 
      style={styles.inputStyle}
      placeholder='Address' 
      underlineColorAndroid="transparent"
      password={true}
      value={this.state.address}
      onChangeText={(text)=>{
          this.setState({
              address:text
          })
      }}/>
      {/* <MapView style={{
position:'absolute',
height:"200px",
width:"200px",
flex:1
      }}
      region={{
        latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }}
      >

      </MapView> */}
      {/* <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  /> */}
      
  <Text style={styles.textColor}>Age</Text>
      <TextInput 
      keyboardType={'numeric'}
      style={styles.inputStyle}
      placeholder='Age' 
      underlineColorAndroid="transparent"
      value={this.state.age}
      onChangeText={(text)=>{
          this.setState({
              age:text
          })
      }}/>

       <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Sex:</Text>
    <RadioGroup 
    flexDirection='row'
    radioButtons={this.state.sexData} onPress={(data)=>this.setState({
     sexData:data
   })} />
  </View>
 
      <Button 
      style={{width:200}}
              onPress={()=>{
               if(this.state.address=="")
                alert("Enter Address")
                else if(this.state.sexData=="")
                alert("Select Sex")
                else if(this.state.age=="")
                alert("Enter age")
              
                else{
                  let headers={
                    'Authorization':'Bearer '+this.props.token,
                    'Accept': 'application/json',
                  }
                  axios({
                    method: "post",
                    url: basepath+"user/adduser",
                    data: {
                      userName:this.state.name,
                      email:this.state.email,
                      phoneNo:this.state.mobile,
                      age:this.state.address,
                      address:this.state.address,
                      age:this.state.age,
                      sex:sexDataButton

                    },
                    headers:headers
                  })
                    .then(response => {
                        console.log("response",response)
                        this.props.navigator.push({
                          screen: 'HomeScreen',
                          title: 'Survey',
                          passProps:{_id:response.data._id,
                         name:response.data.name,
                         age:response.data.age,
                         gender:response.data.gender,
                         mobile:response.data.phoneNo,
                         token:this.props.token,
                          }
                        });
                       
                    })
                    .catch(error => {
                      console.log("Error");
                      alert(error)
                    })
                  
                }
              }}
              title="Start Survey"
          /> 
         
           </View>
          </View>
          </ScrollView>
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
  // backgroundColor:'#424242',
  width:'100%',
  height:'100%'
    },
    textColor:{
      // color:'white'
  },
  inputStyle:{
    borderColor: 'gray',
     borderWidth: 1,
     width:300,
     borderRadius:5,
     marginTop:5,
     marginBottom:20,
     paddingLeft:10,
    //  color:'white'
},
rowstyle:{
  flexDirection: 'row' ,
  marginTop:5,
  marginLeft:20,
  marginBottom:20
  // borderBottomWidth:0.5
  
},
inputtextStyle:{
  marginTop:10
}
  })
//make this component available to the app
//make this component available to the app
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SecondScreen);
