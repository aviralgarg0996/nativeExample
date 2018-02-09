//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
// create a component
class FirstScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FirstScreen</Text>
                <TouchableOpacity onPress={()=>this.props.navigator.push({
			screen: 'example.SecondScreen',
            title:'Second',

		})}>
                    <Text>Go To Second</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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

export default connect(mapStateToProps,mapDispatchToProps)(FirstScreen);
