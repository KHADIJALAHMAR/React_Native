import * as React from "react";
import { Text, View } from 'react-native';
import Navigation from "./src/navigation/main/index";
import { Provider } from "react-redux";
import Routes from "./src/navigation/main/index";
import store from "./src/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation>
        <Routes />
      </Navigation>
    </Provider>
  );
}
