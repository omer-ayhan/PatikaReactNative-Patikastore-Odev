/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { GlobalContext } from "./src/context/GlobalState";

AppRegistry.registerComponent(appName, () => App);
