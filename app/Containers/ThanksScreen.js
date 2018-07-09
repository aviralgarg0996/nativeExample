//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Image,TextInput,Button} from 'react-native';
import { connect } from "react-redux";

// create a component
class ThanksScreen extends Component {
   
    render() {
        return (
            <View style={styles.mainView}>
             <Image
              style={styles.logo}
              source={require('../images/logo.png') }
            />
           <Text style={{fontSize:30}}>Thanks for Completing Survey</Text>
            <Button 
            style={{width:300,marginBottom:30}}
                    onPress={()=>{
                       
                            this.props.navigator.push({
                                            screen: 'example.SecondScreen',
                                            title: 'User Details',
                                            passProps:{
                                                token:this.props.token
                                            }
                                          });
                    
                        
                     
                    }}
                    title="Start Survey Again"
                /> 
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
    // backgroundColor:'#424242',
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

export default connect(mapStateToProps,mapDispatchToProps)(ThanksScreen);
