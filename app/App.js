import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Navigation } from "react-native-navigation";
import thunk from "redux-thunk";
import {reducer} from "./Reducers/NavigationReducers";
import { registerScreens } from "./Containers/index";
import { Platform } from "react-native";
import logger from 'redux-logger';

// redux related book keeping
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducer);

// screen related book keeping
registerScreens(store, Provider);

// notice that this is just a simple class, it's not a React component
export default class App {
  constructor() {
    this.startApp()
  }
  render(){
    return
      <View><Text>hello</Text></View>
      
  }

startApp() { 
Navigation.startSingleScreenApp({
  screen: {
    screen: "example.FirstScreen",
    title: "Login",
    navigatorStyle: {}
  },
});
}
}