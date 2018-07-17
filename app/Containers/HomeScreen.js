//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet ,Button,Switch,TextInput,ScrollView,Picker,TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import axios from "axios";
import {basepath} from "../Utils/Constant"
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { ConfirmDialog } from 'react-native-simple-dialogs';
// create a component
class HomeScreen extends Component {
  componentDidMount() {
    console.log("data1111111",this.props.token,"origin",this.props.selectedoriginlatitude,this.props.selectedoriginlongitude)
    console.log("destination",this.props.selecteddestinationlatitude,this.props.selecteddestinationlongitude)
      this.setState({
      _id:this.props._id,
      token:this.props.token,
      name:this.props.name,
      age:this.props.age,
      gender:this.props.gender,
      mobile:this.props.mobile,
     
     
    })
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (time) => {
    var res=time.toString().split("2018 ");
    var exacttime=res[1].split("GMT");
    this.setState({
      startTime:exacttime[0]
    })
    console.log('A date has been picked: ', time,exacttime[0]);
    this._hideDateTimePicker();
  };
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
    isDateTimePickerVisible: false,
    nonpublicvisible:'flex',
    publictransportvisible:'none',
    otherResons:"",
    origin:"",
    destination:"",
    distance:"",
    startTime:"",
    timeTaken:"",
    travelMode:"",
    travelPurpose:"",
    ownedcars:"0",
    ownedbike:"0",
    ownedbicycle:"0",
    accessModeUsed:"",
    accessDistance:"",
    accessCost:"",
    mainTripMode:"",
    mainTripDistance:"",
    mainTripCost:"",
    egressTripMode:"",
    egressTripDistance:"",
    egressTripCost:"",
    _id:"",
    name:"",
    age:"",
    gender:"",
    mobile:"",
    submitBtnVisible:false,
    privateVisible:'flex',
    autoVisible:'none',
    sharedvisible:'none',
    publicVisible:'none',
    dialogVisible:false,
    parkingFees:"0",
    token:'',
    selectedoriginlat:"",
    selectedoriginlong:"",
    selecteddestinationlat:"",
    selecteddestinationlong:"",
    travelTransport:"",
    reasonsDataVisible:true,
    reasonToLeaveVisible:false,
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
    privateData:[
      {
        label: '2W(Own)',
        value:'2W(Own)',
        size: 30,
        color:'green',
      }, 
      {
        label: '2W(Pool)',
        value:'2W(Pool)',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Car(Own)',
        value:'Car(Own)',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Car(Pool)',
        value:'Car(Pool)',
        size: 30,
        color:'green',
      }, 
    ],
    autoData:[
      {
        label: 'Auto/Taxi',
        value:'Auto/Taxi',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Office Cab',
        value:'Office Cab',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Aggregators(Ola/Uber)',
        value:'Aggregators(Ola/Uber)',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Ola Bike/Uber Moto',
        value:'Ola Bike/Uber Moto',
        size: 30,
        color:'green',
      }, 
    ],
    sharedData:[
      {
        label: 'Auto/Taxi',
        value:'Auto/Taxi',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Car Pool',
        value:'Car Pool',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Bike Share/Rent',
        value:'Bike Share/Rent',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Ola/Uber Share',
        value:'Ola/Uber Share',
        size: 30,
        color:'green',
      }, 
    ],
    publicData:[
      {
        label: 'AC Bus',
        value:'AC Bus',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Non AC Bus',
        value:'Non AC Bus',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Whichever Comes First',
        value:'Whichever Comes First',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Bus Aggregator/Shuttle',
        value:'Bus Aggregator/Shuttle',
        size: 30,
        color:'green',
      }, 
    ],
    purposeTripData:[
      {
        label: 'Work',
        value:'Work',
        size: 30,
        color:'green',
      },
       {
        label: 'Educational',
        value:'Educational',
        size: 30,
        color:'green',
      }, 
      {
        label: 'Others',
        value:'Others',
        size: 30,
        color:'green',
      }, 
    ],
    leaveMetroSystemData:[
      {
        label: 'Before second fare hike? ( Oct 2017)',
        value:'Before second fare hike? ( Oct 2017)',
        size: 30,
        color:'green',
      },
      {
        label: 'After second fare hike? ( Oct 2017)',
        value:'After second fare hike? ( Oct 2017)',
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

    let travelTimeDataButton = this.state.travelTimeData.find(e => e.selected == true);
        travelTimeDataButton = travelTimeDataButton ? travelTimeDataButton.value : this.state.travelTimeData[0].label;
    let costDataButton = this.state.costData.find(e => e.selected == true);
        costDataButton = costDataButton ? costDataButton.value : this.state.costData[0].label;
    let comfortDataButton = this.state.comfortData.find(e => e.selected == true);
        comfortDataButton = comfortDataButton ? comfortDataButton.value : this.state.comfortData[0].label;
    let safeDataButton = this.state.safeData.find(e => e.selected == true);
        safeDataButton = safeDataButton ? safeDataButton.value : this.state.safeData[0].label;
    let dailyCommuteDataButton = this.state.dailyCommutedata.find(e => e.selected == true);
        dailyCommuteDataButton = dailyCommuteDataButton ? dailyCommuteDataButton.value : this.state.dailyCommutedata[0].label;
    let travelCostDataButton = this.state.travelCostData.find(e => e.selected == true);
        travelCostDataButton = travelCostDataButton ? travelCostDataButton.value : this.state.travelCostData[0].label;
    let tripsPaidDataButton = this.state.tripsPaidData.find(e => e.selected == true);
        tripsPaidDataButton = tripsPaidDataButton ? tripsPaidDataButton.value : this.state.tripsPaidData[0].label;
    let metroUseButton = this.state.metroUse.find(e => e.selected == true);
        metroUseButton = metroUseButton ? metroUseButton.value : this.state.metroUse[0].label;
    let privateDataButton = this.state.privateData.find(e => e.selected == true);
        privateDataButton = privateDataButton ? privateDataButton.value : this.state.privateData[0].label;
    let sharedDataButton = this.state.sharedData.find(e => e.selected == true);
        sharedDataButton = sharedDataButton ? sharedDataButton.value : this.state.sharedData[0].label;
    let autoDataButton = this.state.autoData.find(e => e.selected == true);
        autoDataButton = autoDataButton ? autoDataButton.value : this.state.autoData[0].label;
    let publicDataButton = this.state.publicData.find(e => e.selected == true);
        publicDataButton = publicDataButton ? publicDataButton.value : this.state.publicData[0].label;
    let purposeTripDataButton = this.state.purposeTripData.find(e => e.selected == true);
        purposeTripDataButton = purposeTripDataButton ? purposeTripDataButton.value : this.state.purposeTripData[0].label;
    let leaveMetroSystemDataButton = this.state.leaveMetroSystemData.find(e => e.selected == true);
        leaveMetroSystemDataButton = leaveMetroSystemDataButton ? leaveMetroSystemDataButton.value : this.state.leaveMetroSystemData[0].label;
   
          
      
        console.log("valueinconsole",this.state.token);
   
        console.log("datainprops",this.props._id)
    onPress = data => this.setState({ data });


    var services = null;
if (this.state.travelMode!="") {
  services: ['a', 'b', 'c', 'd', 'e']
}
    return (
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.headingStyle}> Commuting Information/Regular Trip information</Text>
 <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Home/Origin:</Text>
    <TouchableOpacity style={StyleSheet.inputStyle}
    onPress={()=>
      this.props.navigator.push({
        screen: 'MapScreen',
        title: 'Home/Origin',
        passProps:{
          _id:this.state._id,
         name:this.state.name,
         age:this.state.age,
         gender:this.state.gender,
         mobile:this.state.phoneNo,
         token:this.state.token,
          }
      })
      }>
      <Text style={{marginLeft:15,fontSize:20}}>Select Origin</Text>
            {/* <Text style={{marginLeft:15,fontSize:20}}>{this.props.selectedoriginlatitude==""? <Text>Select Origin</Text>:<Text>{this.props.selectedoriginlatitude+" , "+this.props.selectedoriginlongitude}</Text>}</Text> */}

   </TouchableOpacity>
{/* <TextInput style={styles.inputStyle}
value={this.state.origin}
onChangeText={(text) => this.setState({origin:text})}
/> */}
  </View>

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>To/Destination:</Text>
    <TouchableOpacity style={StyleSheet.inputStyle}
    onPress={()=>
      this.props.navigator.push({
        screen: 'DestinationMapScreen',
        title: 'Destination',
        passProps:{
          _id:this.state._id,
         name:this.state.name,
         age:this.state.age,
         gender:this.state.gender,
         mobile:this.state.phoneNo,
         token:this.state.token,
          }
      })
      }>
      <Text style={{marginLeft:15,fontSize:20}}>Select Destination</Text>
            {/* <Text style={{marginLeft:15,fontSize:20}}>{this.props.selectedoriginlatitude==""? <Text>Select Destination</Text>:<Text>{this.props.selecteddestinationlatitude+" , "+this.props.selecteddestinationlongitude}</Text>}</Text> */}
   </TouchableOpacity>
{/* <TextInput style={styles.inputStyle}
value={this.state.destination}
onChangeText={(text) => this.setState({destination:text})}
/> */}
  </View>

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Distance(KM):</Text>
<TextInput style={styles.inputStyle}
value={this.state.distance}
keyboardType='numeric'
onChangeText={(text) => this.setState({distance:text})}
/>
  </View>

    <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Start Time:</Text>
        <TouchableOpacity style={StyleSheet.inputStyle}onPress={this._showDateTimePicker}>
          <Text style={{marginLeft:15,fontSize:20}}>{this.state.startTime==""? <Text>Enter Start Time</Text>:<Text>{this.state.startTime}</Text>}</Text>
        </TouchableOpacity>
        <DateTimePicker
        mode='time'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
  </View>

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Time Taken(Min.):</Text>
    <TextInput style={styles.inputStyle}
value={this.state.timeTaken}
keyboardType='numeric'
onChangeText={(text) => this.setState({timeTaken:text})}/>
  </View>


      <Text style={styles.headingStyle}>  Have you ever used metro for your regular trips to office/work/education purposes?</Text>
  <RadioGroup  
  flexDirection='row'
  radioButtons={this.state.dailyCommutedata} 
  onPress={(data)=>this.setState({
     dailyCommutedata:data,
     reasonsDataVisible:!this.state.reasonsDataVisible,
     reasonToLeaveVisible:!this.state.reasonToLeaveVisible

   })} />
   <View style={{display:this.state.reasonToLeaveVisible?"flex":"none"}}>
   <Text style={styles.headingStyle}>When did you leave the metro system for your regular trips?</Text>

  <RadioGroup  
  radioButtons={this.state.leaveMetroSystemData} 
  onPress={(data)=>this.setState({
     leaveMetroSystemData:data
   })} />
</View>
   <View style={{display:this.state.reasonsDataVisible?"flex":"none"}}>
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
<TextInput style={{width:200}}
value={this.state.otherResons}
onChangeText={(text) => this.setState({otherResons:text})}
/>
  </View>
</View>
<View style={styles.rowstyle}>
  <Text style={styles.headingStyle}>Mode of Travel</Text>
  <Picker
   selectedValue={this.state.travelMode}
  style={{  width: 200,marginLeft:20 ,marginTop:10}}
  onValueChange={
    (itemValue, itemIndex) => {
      if(itemValue=='public')
      this.setState({
        travelMode: itemValue,
        nonpublicvisible:'none',
        publictransportvisible:'flex',
        publicVisible:'flex',
        privateVisible:'none',
        sharedvisible:'none',
        autoVisible:'none'
      })
      else if(itemValue=="Private")
      {
        this.setState({
          travelMode:itemValue,
          privateVisible:'flex',
          sharedvisible:'none',
        autoVisible:'none',
        publicVisible:'none',
        publictransportvisible:'none',
        nonpublicvisible:'flex'
        })
      }
      else if(itemValue=="taxi")
      {
        this.setState({
          travelMode:itemValue,
          privateVisible:'none',
          sharedvisible:'none',
        autoVisible:'flex',
        publicVisible:'none',
        publictransportvisible:'none',
        nonpublicvisible:'flex'
        })
      }
      else
      {
        this.setState({
          travelMode:itemValue,
          privateVisible:'none',
          sharedvisible:'flex',
        autoVisible:'none',
        publicVisible:'none',
        publictransportvisible:'none',
        nonpublicvisible:'flex'
        })
      }
    }
    
}
  >
  <Picker.Item label="Private" value="Private" />
  <Picker.Item label="Auto/Taxi" value="taxi" />
  <Picker.Item label="Shared" value="shared" />
  <Picker.Item label="Public Transport" value="public" />
  
</Picker>

  </View>
  <View style={{display:this.state.privateVisible}}>
<Text style={styles.headingStyle}>Private:</Text>
  <RadioGroup  
  
  radioButtons={this.state.privateData} 
  onPress={(data)=>this.setState({
     privateData:data
     

   })} />
</View>


<View style={{display:this.state.autoVisible}}>
<Text style={styles.headingStyle}>Auto/Taxi:</Text>
  <RadioGroup  
  
  radioButtons={this.state.autoData} 
  onPress={(data)=>this.setState({
     autoData:data
   })} />
</View>
<View style={{display:this.state.sharedvisible}}>
<Text style={styles.headingStyle}>Shared:</Text>
  <RadioGroup  
  
  radioButtons={this.state.sharedData} 
  onPress={(data)=>this.setState({
     sharedData:data
   })} />
</View>
<View style={{display:this.state.publicVisible}}>
<Text style={styles.headingStyle}>Public:</Text>
  <RadioGroup  
  radioButtons={this.state.publicData} 
  onPress={(data)=>this.setState({
     publicData:data
   })} />
</View>   

  <Text style={styles.headingStyle}>What is the purpose of your commute/ regular trip?</Text>
<View style={styles.rowstyle}>
<RadioGroup 
 flexDirection='row'
radioButtons={this.state.purposeTripData} onPress={(data)=>this.setState({
     purposeTripData:data
   })} />

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
  
 
  
  <Text style={styles.headingStyle}> Vehicle Ownership (in household)</Text>
   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Cars/SUV:</Text>
    <Picker
   selectedValue={this.state.ownedcars}
  style={{  width: 100,marginLeft:20 }}
  onValueChange={(itemValue, itemIndex) => this.setState({ownedcars: itemValue}
  )}
  >
  <Picker.Item label="0" value="0" />
  <Picker.Item label="1" value="1" />
  <Picker.Item label="2" value="2" />
  <Picker.Item label="3" value="3" />
  <Picker.Item label="4" value="4" />
  <Picker.Item label="more" value="more" />
  
  
</Picker>
  </View>

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>2 Wheeler:</Text>
    <Picker
   selectedValue={this.state.ownedbike}
  style={{  width: 100,marginLeft:20 }}
  onValueChange={(itemValue, itemIndex) => this.setState({ownedbike: itemValue}
  )}
  >
  <Picker.Item label="0" value="0" />
  <Picker.Item label="1" value="1" />
  <Picker.Item label="2" value="2" />
  <Picker.Item label="3" value="3" />
  <Picker.Item label="4" value="4" />
  <Picker.Item label="more" value="more" />
  
</Picker>

  </View>

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Bicycle:</Text>
    <Picker
   selectedValue={this.state.ownedbicycle}
  style={{  width: 100,marginLeft:20 }}
  onValueChange={(itemValue, itemIndex) => this.setState({ownedbicycle: itemValue}
  )}
  >
  <Picker.Item label="0" value="0" />
  
  <Picker.Item label="1" value="1" />
  <Picker.Item label="2" value="2" />
  <Picker.Item label="3" value="3" />
  <Picker.Item label="4" value="4" />
  <Picker.Item label="more" value="more" />
  
  
</Picker>


  </View>

<View style={{display:this.state.nonpublicvisible}}>
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

   <View style={styles.rowstyle}>
    <Text style={styles.inputtextStyle}>Parking Fees:</Text>
<TextInput style={styles.inputStyle}
value={this.state.parkingFees}
keyboardType='numeric'
onChangeText={(text) => this.setState({parkingFees:text})}
/>
  </View>
</View>

{/* For Public Transport */}
<View style={{display:this.state.publictransportvisible}}>
<Text style={styles.headingStyle}>Cost of Travel (In Rs.):</Text>
<Text style={styles.headingStyle}>Is your cost of commute/ regular trips paid by office?</Text>
  <RadioGroup  
  flexDirection='row'
  radioButtons={this.state.tripsPaidData} 
  onPress={(data)=>this.setState({
     tripsPaidData:data
   })} />


<View style={styles.rowStyle1}>
<Text style={styles.inputtextStyle}>Access:</Text>
<Text style={styles.inputtextStyle}>Main Trip:</Text>
<Text style={styles.inputtextStyle}>Eggress Trip:</Text>
</View>
<Text style={styles.subheadingstyle}>Mode Used:</Text>
<View style={styles.rowStyle1}>
    <Picker
   selectedValue={this.state.accessModeUsed}
  style={{  width: 100,marginLeft:70 }}
  onValueChange={(itemValue, itemIndex) => this.setState({accessModeUsed: itemValue}
  )}
  >
  <Picker.Item label="2W(Own)" value="2W(Own)" />
  <Picker.Item label="2W(Pool)" value="2W(Pool)" />
  <Picker.Item label="Car(Own)" value="Car(Own)" />
  <Picker.Item label="Car(Pool)" value="Car(Pool)" />
  <Picker.Item label="Auto/Taxi" value="Auto/Taxi" />
  <Picker.Item label="Office Cab" value="Office Cab" />
  <Picker.Item label="Aggregators/Ola/Uber" value="Aggregators/Ola/Uber" />
  <Picker.Item label="Ola Bike/Uber Moto" value="Ola Bike/Uber Moto" />
  <Picker.Item label="Shared Auto" value="Shared Auto" />
  
  <Picker.Item label="Bike Rent" value="Bike Rent" />
  <Picker.Item label="Ola/Uber Share" value="Ola/Uber Share" />
  <Picker.Item label="Cycle Rikshaw" value="Cycle Rikshaw" />
  <Picker.Item label="E-rikshaw" value="E-rikshaw" />
  
  <Picker.Item label="Walk" value="Walk" />
  <Picker.Item label="Cycle" value="Cycle" />
  
</Picker>
<Text style={{fontSize:20,
    color:'black',
    width:140,
    textAlign: 'center',
    marginTop:10}}>{this.state.travelMode}</Text>
    <Picker
   selectedValue={this.state.egressTripMode}
  style={{  width: 100,marginLeft:20 }}
  onValueChange={(itemValue, itemIndex) => this.setState({egressTripMode: itemValue}
  )}
  >
  <Picker.Item label="2W(Own)" value="2W(Own)" />
  <Picker.Item label="2W(Pool)" value="2W(Pool)" />
  <Picker.Item label="Car(Own)" value="Car(Own)" />
  <Picker.Item label="Car(Pool)" value="Car(Pool)" />
  <Picker.Item label="Auto/Taxi" value="Auto/Taxi" />
  <Picker.Item label="Office Cab" value="Office Cab" />
  <Picker.Item label="Ola/Uber" value="Ola/Uber" />
  <Picker.Item label="Ola Bike/Uber Moto" value="Ola Bike/Uber Moto" />
  <Picker.Item label="Bike Share" value="Bike Share" />
  <Picker.Item label="Ola/Uber Share" value="Ola/Uber Share" />
  <Picker.Item label="Walk" value="Walk" />
  <Picker.Item label="Cycle" value="Cycle" />
  
</Picker>
  </View>

  <Text style={styles.subheadingstyle}>Distance:</Text>
  <View style={styles.rowStyle1}>
    <TextInput
    keyboardType={'numeric'}
   value={this.state.accessDistance}
   placeholder="distance"
   onChangeText={(text) => this.setState({accessDistance:text})}
     style={{  width: 100,marginLeft:57 }}
   >
  
</TextInput>
<Text style={{fontSize:20,
    color:'black',
    width:140,
   
    textAlign: 'center',
    marginTop:10,
    marginLeft:20}}>{this.state.travelMode}</Text>
    <TextInput 
     keyboardType={'numeric'}
     placeholder="distance"
    value={this.state.egressTripDistance}
onChangeText={(text) => this.setState({egressTripDistance:text})}
  style={{  width: 100,marginLeft:10 }}
  >

</TextInput>


  </View>
  <Text style={styles.subheadingstyle}>Cost:</Text>
<View style={styles.rowStyle1}>
    <TextInput
     keyboardType={'numeric'}
   value={this.state.accessCost}
   placeholder="Access Cost"
   onChangeText={(text) => this.setState({accessCost:text})}
     style={{  width: 100,marginLeft:57 }}
   >
  
</TextInput>
<Text style={{fontSize:20,
    color:'black',
    width:140,
  
    
    textAlign: 'center',
    marginTop:10,
    marginLeft:20}}>{this.state.travelMode}</Text>
    <TextInput 
     keyboardType={'numeric'}
     placeholder="Egress Cost"
    value={this.state.egressTripCost}
onChangeText={(text) => this.setState({egressTripCost:text})}
  style={{  width: 100,marginLeft:10 }}
  >

</TextInput>


  </View>


</View>

<Text style={styles.headingStyle}>Willingness</Text>
<Text style={{fontSize:19,marginLeft:15,marginTop:15}}>If a reliable first/last mile connectivity service to connect metro station to/from to your location
which is accessible, affordable, safe and comfortable is provided,</Text>


<Text style={styles.headingStyle}>How likely are you to use metro for your commute/ regular trips?</Text>
  <RadioGroup  
  flexDirection='row'
  radioButtons={this.state.metroUse} 
  onPress={(data)=>this.setState({
     metroUse:data
   })} />
<ConfirmDialog
    title="Submit Survey"
    visible={this.state.dialogVisible}
    onTouchOutside={() => this.setState({dialogVisible: false})}
    positiveButton={{
        title: "OK",
        disabled:this.state.submitBtnVisible,
        onPress:()=>{
       
          let travelTransportToSend=""
          console.log("selectedorigin",this.state.selectedoriginlat,this.state.selectedoriginlong)
          console.log("selecteddestination",this.state.selecteddestinationlat,this.state.selecteddestinationlong)
          if(this.state.travelMode=="Private")
          travelTransportToSend=privateDataButton
          else if(this.state.travelMode=="public")
          travelTransportToSend=publicDataButton
          else if(this.state.travelMode=="shared")
          travelTransportToSend=sharedDataButton
          else 
          travelTransportToSend=autoDataButton
          if(this.props._id=="")
          {
            alert("Start Survey Again");
            this.props.navigator.push({
              screen: 'FirstScreen',
              title: 'Login',
            });
           
          }
          else if(this.state.startTime=="Enter Start Time")
          alert("Enter Start time");
           else{
              this.setState({
                submitBtnVisible:true
              })
            let  leaveMetroSystemDataButtonData="";
            if(this.state.reasonToLeaveVisible)
            leaveMetroSystemDataButtonData=leaveMetroSystemDataButton
            let headers={
              'Authorization':'Bearer '+this.state.token,
              'Accept': 'application/json',
            }
            console.log("datainprops111111",this.state.ownedcars,this.state.ownedbike,this.state.ownedbicycle)
             axios({
               method: "post",
               url: basepath+"survey/addSurvey",
               data: {
                 _id:this.state._id,
                 useMetro6:dailyCommuteDataButton,
                 personalInformation1:{
                  name:this.state.name,
                  age:this.state.age,
                  mobile:this.state.mobile,
                  gender:this.state.gender
                 },
                 reasonNoMetro2:{
                   notRoute:this.state.routeChecked,
                   lackOfService:this.state.servicesChecked,
                   travelTimeHigh:this.state.travelTimechecked,
                   unaffordableFare:this.state.faresChecked,
                   highReachingCost:this.state.reachingMetroChecked,
                   modeChanges:this.state.modeChanges,
                   crowded:this.state.crowdChecked,
                   seatAvailable:this.state.seatChecked,
                   security:this.state.safetyChecked,
                   other:this.state.otherResons
                 },
                regularTrip3:{
                  origin:this.state.origin,
                  destination:this.state.destination,
                  distance:this.state.distance,
                  startTime:this.state.startTime,
                  timeTaken:this.state.timeTaken
                },
                modeOfTravel:{
                  travelType:this.state.travelMode,
                  travelTrasport:travelTransportToSend
                },
                purposeTrip4:purposeTripDataButton,
                commuteTrip:{
                  travelTime:"Travel Time",
                  opinionTrasport:travelTimeDataButton
                },
                commuteTrip1:{
                  cost:"Cost",
                  opinionCost:costDataButton
                },
                commuteTrip2:{
                  comfort:"Comfort",
                  opinionComfort:comfortDataButton
                },
                commuteTrip3:{
                  travelSafety:"Safety",
                  opinionSafety:safeDataButton
                },
                vehicleOwnerShip7:{
                  cars:this.state.ownedcars,
                  twoWheeler:this.state.ownedbike,
                  bicycle:this.state.ownedbicycle
                },
               costOfTravel8:travelCostDataButton,
               paidByOffice9:this.state.tripsPaidData,
               para:{
                modeUsed:"Mode Used",
                access:this.state.accessModeUsed,
                mainTrip:this.state.mainTripMode,
                egressTrip:this.state.egressTripMode 
               },
               parameter1:{
                 distance:"Distance",
                 access1:this.state.accessDistance,
                 mainTrip1:this.state.mainTripDistance,
                 egressTrip1:this.state.egressTripDistance 
                },
                parameter2:{
                 cost:"Cost",
                 access2:this.state.accessCost,
                 mainTrip2:this.state.mainTripCost,
                 egressTrip2:this.state.egressTripCost 
                },
               willingness10:metroUseButton,
               parkingFees:this.state.parkingFees,
               stations:leaveMetroSystemDataButtonData
               },
              headers:headers
              }
            )
               .then(response => {
                   console.log("response",response)
                   this.setState({
                     dialogVisible:false
                   })
                   this.props.navigator.push({
                     screen: 'ThanksScreen',
                     title: 'Thanks',
                     passProps:{
                      token:this.state.token
                  }
                   });
                  
               })
               .catch(error => {
                 alert(error);
               }
              )
            
           }
         }
    }} 
    negativeButton={{
      title: "Cancel",
      onPress: () => this.setState({
        dialogVisible:false
      }) 
  }}
    >
     <View>
      <Text>  Are you sure you want to submit?</Text>
    </View>
    </ConfirmDialog>
 <Button 
            style={{marginTop:30,marginBottom:30}}
            // onPress={()=>{
            //   if(this.props._id=="")
            //    alert("Enter Address")
            //    else{
            //     let headers={
            //       'Authorization':'Bearer '+this.props.token,
            //       'Accept': 'application/json',
            //     }
            //     console.log("datainprops111111",this.state.ownedcars,this.state.ownedbike,this.state.ownedbicycle)
            //      axios({
            //        method: "post",
            //        url: basepath+"survey/addSurvey",
            //        data: {
            //          _id:this.props._id,
            //          useMetro6:dailyCommuteDataButton,
            //          personalInformation1:{
            //           name:this.props.name,
            //           age:this.props.age,
            //           mobile:this.props.mobile,
            //           gender:this.props.gender
            //          },
            //          reasonNoMetro2:{
            //            notRoute:this.state.routeChecked,
            //            lackOfService:this.state.servicesChecked,
            //            travelTimeHigh:this.state.travelTimechecked,
            //            unaffordableFare:this.state.faresChecked,
            //            highReachingCost:this.state.reachingMetroChecked,
            //            modeChanges:this.state.modeChanges,
            //            crowded:this.state.crowdChecked,
            //            seatAvailable:this.state.seatChecked,
            //            security:this.state.safetyChecked,
            //            other:this.state.otherResons
            //          },
            //         regularTrip3:{
            //           origin:this.state.origin,
            //           destination:this.state.destination,
            //           distance:this.state.distance,
            //           startTime:this.state.startTime,
            //           timeTaken:this.state.timeTaken
            //         },
            //         modeOfTravel:{
            //           travelType:this.state.travelMode,
            //           travelTrasport:""
            //         },
            //         purposeTrip4:this.state.travelPurpose,
            //         commuteTrip:{
            //           travelTime:"Travel Time",
            //           opinionTrasport:travelTimeDataButton
            //         },
            //         commuteTrip1:{
            //           cost:"Cost",
            //           opinionCost:costDataButton
            //         },
            //         commuteTrip2:{
            //           comfort:"Comfort",
            //           opinionComfort:comfortDataButton
            //         },
            //         commuteTrip3:{
            //           travelSafety:"Safety",
            //           opinionSafety:safeDataButton
            //         },
            //         vehicleOwnerShip7:{
            //           cars:this.state.ownedcars,
            //           twoWheeler:this.state.ownedbike,
            //           bicycle:this.state.ownedbicycle
            //         },
            //        costOfTravel8:travelCostDataButton,
            //        paidByOffice9:this.state.tripsPaidData,
            //        para:{
            //         modeUsed:"Mode Used",
            //         access:this.state.accessModeUsed,
            //         mainTrip:this.state.mainTripMode,
            //         egressTrip:this.state.egressTripMode 
            //        },
            //        parameter1:{
            //          distance:"Distance",
            //          access1:this.state.accessDistance,
            //          mainTrip1:this.state.mainTripDistance,
            //          egressTrip1:this.state.egressTripDistance 
            //         },
            //         parameter2:{
            //          cost:"Cost",
            //          access2:this.state.accessCost,
            //          mainTrip2:this.state.mainTripCost,
            //          egressTrip2:this.state.egressTripCost 
            //         },
            //        willingness10:metroUseButton
            //        },
            //       headers:headers
            //       }
            //     )
            //        .then(response => {
            //            console.log("response",response)
            //            this.props.navigator.push({
            //              screen: 'ThanksScreen',
            //              title: 'Thanks',
            //            });
                      
            //        })
            //        .catch(error => {
            //          console.log("Error",error);
            //          alert(error)
            //        }
            //       )
                
            //    }
            //  }}
                    onPress={()=>{
                        this.setState({
                          dialogVisible:true
                        })
                      
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
  rowStyle1:{
flexDirection:'row',
marginTop:15,
marginLeft:5
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
  subheadingstyle:{
    fontSize:18,
    fontFamily:'bold',
    color:'black',
    marginTop:5,
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
    width:140,
    textAlign: 'right'
  },
  inputTextStyle1:{
    fontSize:20,
    width:140,
    color:'black',
    textAlign: 'right'
  }
});

//make this component available to the app
//make this component available to the app
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(HomeScreen);
