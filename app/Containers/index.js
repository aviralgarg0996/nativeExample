import { Navigation } from "react-native-navigation";

import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";;
import HomeScreen from "./HomeScreen";
import ThanksScreen from "./ThanksScreen"
import MapScreen from "./MapScreen"
// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent("example.FirstScreen", () => FirstScreen, store, Provider);
  Navigation.registerComponent("example.SecondScreen", () => SecondScreen, store, Provider);
  Navigation.registerComponent("HomeScreen",() => HomeScreen, store, Provider)
  Navigation.registerComponent("ThanksScreen",() => ThanksScreen,store,Provider)
  Navigation.registerComponent("MapScreen",()=>MapScreen,store,Provider)
}
