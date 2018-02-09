import { Navigation } from "react-native-navigation";

import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";;


// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent("example.FirstScreen", () => FirstScreen, store, Provider);
  Navigation.registerComponent("example.SecondScreen", () => SecondScreen, store, Provider);
}
