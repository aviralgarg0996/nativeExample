//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet ,Button,Switch,TextInput,ScrollView,Picker} from "react-native";
import { connect } from "react-redux";
import * as firebase from "firebase"; 
import RadioGroup from 'react-native-radio-buttons-group';
// create a component
class HomeScreen extends Component {
  state={
    routeChecked:false,
    servicesChecked:false,
    travelTimechecked:false,
    faresChecked:false,
    reachingMetroChecked:false,
    transferChecked:false,
    crowdChecked:false,
    seatChecked:false,
    safetyChecked:false,
    otherResons:"",
    origin:"",
    destination:"",
    distance:"",
    startTime:"",
    timeTaken:"",
    travelMode:"",
    travelPurpose:"",
    ownedcars:"",
    ownedbike:"",
    ownedbicycle:"",
    travelTimeData: [
      {
        label: 'Saves lot of time',
        value:'Saves lot of time',
        size: 30,
        color:'green'
      },
      {
        label: 'Saves a little time',
        value: "Saves a little time",
        size: 30,
        color:'green'
      },
      {
        label: 'Doesn’t save much time',
        value: "Doesn’t save much time",
        size: 30,
        color:'green'
      },
      {
        label: 'Doesn’t save time at all',
        value: "Doesn’t save  time at all",
        size: 30,
        color:'green'
      },
      // {
      //   label: 'Color',
      //   color: 'green',
      // },
      // {
      //   disabled: true,
      //   label: 'Disabled',
      // },
      // {
      //   label: 'Size',
      //   size: 32,
      // },
    ],
    costData:[
      {
        label: 'Very much affordable',
        value:'Very much affordable',
        size: 30,
        color:'green'
      },
      {
        label: 'Affordable',
        value:'Affordable',
        size: 30,
        color:'green'
      },
      {
        label: 'Not that affordable',
        value:'Not that affordable',
        size: 30,
        color:'green'
      },
      {
        label: 'Not at all affordable',
        value:'Not at all affordable',
        size: 30,
        color:'green'
      },
    ],
    comfortData:[
      {
        label: 'Very much comfortable',
        value:'Very much comfortable',
        size: 30,
        color:'green'
      },
      {
        label: 'comfortable',
        value:'comfortable',
        size: 30,
        color:'green'
      },
      {
        label: 'Not that comfortable',
        value:'Not that comfortable',
        size: 30,
        color:'green'
      },
      {
        label: 'Not at all comfortable',
        value:'Not at all comfortable',
        size: 30,
        color:'green'
      },
    ],
    safeData:[
      {
        label: 'Very much safe',
        value:'Very much safe',
        size: 30,
        color:'green'
      },
      {
        label: 'safe',
        value:'safe',
        size: 30,
        color:'green'
      },
      {
        label: 'Not that safe',
        value:'Not that safe',
        size: 30,
        color:'green'
      },
      {
        label: 'Not at all safe',
        value:'Not at all safe',
        size: 30,
        color:'green'
      },
    ],
    dailyCommutedata:[
      {
        label: 'Yes',
        value:'Yes',
        size: 30,
        color:'green',
      },
      {
        label: 'No',
        value:'No',
        size: 30,
        color:'green',
      }, 
    ],
    travelCostData:[
      {
        label: '1-25',
        value:'1-25',
        size: 30,
        color:'green',
      },
      {
        label: '25-50',
        value:'25-50',
        size: 30,
        color:'green',
      },
      {
        label: '50-75',
        value:'50-75',
        size: 30,
        color:'green',
      },
      {
        label: '75-100',
        value:'75-100',
        size: 30,
        color:'green',
      },
      {
        label: '100-150',
        value:'100-150',
        size: 30,
        color:'green',
      },
      {
        label: '>150',
        value:'>150',
        size: 30,
        color:'green',
      },
    ],
    tripsPaidData:[
      {
        label: 'Fully Paid',
        value:'Fully Paid',
        size: 30,
        color:'green',
      },
      {
        label: 'Partially paid',
        value:'Partially paid',
        size: 30,
        color:'green',
      },
      {
        label: 'Unpaid',
        value:'Unpaid',
        size: 30,
        color:'green',
      }, 
    ],
    metroUse:[
      {
        label: 'Very Likely',
        value:'Very Likely',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Somewhat Likely',
        value:'Somewhat Likely',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Not Likely',
        value:'Not Likely',
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
    onPress = data => this.setState({ data });


    var services = null;
if (this.state.travelMode!="") {
  services: ['a', 'b', 'c', 'd', 'e']
}
    return (
      <ScrollView>
      <View style={styles.container}>
<Text style={styles.headingStyle}>Reasons for not using metro?</Text>
<View style={styles.rowstyle}>

<Switch
      onValueChange = {()=>this.setState({
              routeChecked:!this.state.routeChecked
            })}
            value = {this.state.routeChecked}/>
    <Text style={styles.textStyle}> My Route doesn't match with Metro Line</Text>
  </View>
  <View style={styles.rowstyle}>
<Switch
      onValueChange = {()=>this.setState({
              servicesChecked:!this.state.servicesChecked
            })}
            value = {this.state.servicesChecked}/>
    <Text style={styles.textStyle}> Lack of any good services to/from metro station</Text>
  </View>
  <View style={styles.rowstyle}>
<Switch
      onValueChange = {()=>this.setState({
              travelTimechecked:!this.state.travelTimechecked
            })}
            value = {this.state.travelTimechecked}/>
    <Text style={styles.textStyle}> Travel time is higher</Text>
  </View>
  <View style={styles.rowstyle}>
<Switch
      onValueChange = {()=>this.setState({
              faresChecked:!this.state.faresChecked
            })}
            value = {this.state.faresChecked}/>
    <Text style={styles.textStyle}> Metro fares are unaffordable for me</Text>
  </View>
  <View style={styles.rowstyle}>
<Switch
      onValueChange = {()=>this.setState({
              reachingMetroChecked:!this.state.reachingMetroChecked
            })}
            value = {this.state.reachingMetroChecked}/>
    <Text style={styles.textStyle}> Cost of reaching metro station is high</Text>
  </View>
  <View style={styles.rowstyle}>
<Switch
      onValueChange = {()=>this.setState({
              transferChecked:!this.state.transferChecked
            })}
            value = {this.state.transferChecked}/>
    <Text style={styles.textStyle}> High number of transfers/ mode changes</Text>
  </View>
  <View style={styles.rowstyle}>
<Switch
      onValueChange = {()=>this.setState({
              crowdChecked:!this.state.crowdChecked
            })}
            value = {this.state.crowdChecked}/>
    <Text style={styles.textStyle}> Metro coaches are crowded</Text>
  </View>
  <View style={styles.rowstyle}>
<Switch
      onValueChange = {()=>this.setState({
              seatChecked:!this.state.seatChecked
            })}
            value = {this.state.seatChecked}/>
    <Text style={styles.textStyle}> Seat availability</Text>
  </View>
  <View style={styles.rowstyle}>
<Switch
      onValueChange = {()=>this.setState({
              safetyChecked:!this.state.safetyChecked
            })}
            value = {this.state.safetyChecked}/>
    <Text style={styles.textStyle}>Safety and security factors</Text>
  </View>
  <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Others:</Text>
<TextInput style={styles.inputTextStyle}
value={this.state.otherResons}
onChangeText={(text) => this.setState({otherResons:text})}
/>
  </View>

 <Text style={styles.headingStyle}> Commuting Information/Regular Trip information</Text>
 <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Home/Origin:</Text>
<TextInput style={styles.inputStyle}
value={this.state.origin}
onChangeText={(text) => this.setState({origin:text})}
/>
  </View>

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>To/Destination:</Text>
<TextInput style={styles.inputStyle}
value={this.state.destination}
onChangeText={(text) => this.setState({destination:text})}
/>
  </View>

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Distance:</Text>
<TextInput style={styles.inputStyle}
value={this.state.distance}
onChangeText={(text) => this.setState({distance:text})}
/>
  </View>

    <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Start Time:</Text>
<TextInput style={styles.inputStyle}
value={this.state.startTime}
onChangeText={(text) => this.setState({startTime:text})}
/>
  </View>

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Time Taken:</Text>
<TextInput style={styles.inputStyle}
value={this.state.timeTaken}
onChangeText={(text) => this.setState({timeTaken:text})}
/>
  </View>
  <View style={styles.rowstyle}>
  <Text style={styles.headingStyle}>Mode of Travel</Text>
  <Picker
   selectedValue={this.state.travelMode}
  style={{  width: 200,marginLeft:20 ,marginTop:10}}
  onValueChange={(itemValue, itemIndex) => this.setState({travelMode: itemValue}
  )}
  >
  <Picker.Item label="Private" value="Private" />
  <Picker.Item label="Auto/Taxi" value="taxi" />
  <Picker.Item label="Shared" value="shared" />
  <Picker.Item label="Public Transport" value="public" />
  
</Picker>

  </View>
  
  <View style={styles.rowstyle}>
  <Text style={styles.headingStyle}>{this.state.travelMode}</Text>
  {/* <Picker
  display={this.state.travelMode==""?'none':'flex'}
  //  selectedValue={this.state.travelMode}
  style={{  width: 200,marginLeft:20 ,marginTop:10}}
  // onValueChange={(itemValue, itemIndex) => this.setState({travelMode: itemValue}
  // )}
  >
  {services} */}
  {/* <Picker.Item label="Private" value="Private" />
  <Picker.Item label="Auto/Taxi" value="taxi" />
  <Picker.Item label="Shared" value="shared" />
  <Picker.Item label="Public Transport" value="public" />
   */}
{/* </Picker> */}
  </View>
  <Text style={styles.headingStyle}>What is the purpose of your commute/ regular trip?</Text>
<View style={styles.rowstyle}>
  <Picker
   selectedValue={this.state.travelPurpose}
  style={{  width: 200,marginLeft:110 ,marginTop:10}}
  onValueChange={(itemValue, itemIndex) => this.setState({travelPurpose: itemValue}
  )}
  >
  <Picker.Item label="Work" value="Work" />
  <Picker.Item label="Educational" value="educational" />
  <Picker.Item label="Others" value="others" />
  
</Picker>

  </View>
  <Text style={styles.headingStyle}> What is your experience with current mode of commute/ regular trip?</Text>
 
  <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Travel Time:</Text>
    <RadioGroup radioButtons={this.state.travelTimeData} onPress={(data)=>this.setState({
     travelTimeData:data
   })} />
  </View>
  
  <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Cost:</Text>
    <RadioGroup radioButtons={this.state.costData} onPress={(data)=>this.setState({
     costData:data
   })} />
  </View>
  
  <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Comfort:</Text>
    <RadioGroup radioButtons={this.state.comfortData} onPress={(data)=>this.setState({
     comfortData:data
   })} />
  </View>
  
  <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Safety:</Text>
    <RadioGroup radioButtons={this.state.safeData} onPress={(data)=>this.setState({
     safeData:data
   })} />
  </View>
  
  <Text style={styles.headingStyle}> Have you used metro for your daily commute earlier?</Text>
  <RadioGroup  
  flexDirection='row'
  radioButtons={this.state.dailyCommutedata} 
  onPress={(data)=>this.setState({
     dailyCommutedata:data
   })} />
  
  <Text style={styles.headingStyle}> Vehicle Ownership (in household)</Text>
   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Cars/SUV:</Text>
<TextInput 
keyboardType={'numeric'}
style={styles.inputStyle}
value={this.state.ownedcars}
onChangeText={(text) => this.setState({ownedcars:text})}
/>
  </View>

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>2 Wheeler:</Text>
<TextInput 
keyboardType={'numeric'}
style={styles.inputStyle}
value={this.state.ownedbike}
onChangeText={(text) => this.setState({ownedbike:text})}
/>
  </View>

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Bicycle:</Text>
<TextInput 
keyboardType={'numeric'}
style={styles.inputStyle}
value={this.state.ownedbicycle}
onChangeText={(text) => this.setState({ownedbicycle:text})}
/>


  </View>


<Text style={styles.headingStyle}>Cost of Travel (In Rs.):</Text>
  <RadioGroup  
  
  radioButtons={this.state.travelCostData} 
  onPress={(data)=>this.setState({
     travelCostData:data
   })} />



<Text style={styles.headingStyle}>Is your cost of commute/ regular trips paid by office?</Text>
  <RadioGroup  
  flexDirection='row'
  radioButtons={this.state.tripsPaidData} 
  onPress={(data)=>this.setState({
     tripsPaidData:data
   })} />


<Text style={styles.headingStyle}>Willingness</Text>
<Text style={{fontSize:19,marginLeft:15,marginTop:15}}>If a reliable first/last mile connectivity service with fixed route, timing, fare and information
system is provided to you, to connect metro station to/from to your location.</Text>


<Text style={styles.headingStyle}>How likely are you to use metro for your commute/ regular trips?</Text>
  <RadioGroup  
  flexDirection='row'
  radioButtons={this.state.metroUse} 
  onPress={(data)=>this.setState({
     metroUse:data
   })} />


 <Button 
            style={{marginTop:30,marginBottom:30}}
                    onPress={()=>{
                         this.props.navigator.push({
                                            screen: 'ThanksScreen',
                                            title: 'Survey Complete'
                                          });
                      
                        }
                     
                    }
                    title="Submit Survey"
                /> 
      </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  alignItems: "center"
  },
  rowstyle:{
    flexDirection: 'row' ,
    marginTop:15,
    marginLeft:20,
    // borderBottomWidth:0.5
    
  },
  textStyle:{
    fontSize:20,
    color:'black',
  },
  headingStyle:{
    fontSize:25,
    fontFamily:'bold',
    color:'black',
    marginTop:15,
    marginLeft:8
  },
  inputStyle1:{
    marginLeft:10,
    borderColor:'black',
    // borderWidth: 1,
    width:250,
    marginBottom:15
  },
  inputStyle:{
    borderColor: 'gray',
     borderWidth: 1,
     width:250,
     borderRadius:5,
     marginTop:5,
     marginBottom:20,
     paddingLeft:10,
     marginLeft:10
},
  inputtextStyle:{
    fontSize:20,
    color:'black',
    width:150,
    textAlign: 'right'
  }
});

//make this component available to the app
//make this component available to the app
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(HomeScreen);
