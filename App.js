import React from 'react';
import { Provider } from "react-redux";
import { SafeAreaView } from 'react-native';
import configureStore from './src/store/ConfigureStore';
import Calculator from './src/module/Calculator';


const store = configureStore();

export default function App() {


  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1}}>
        <Calculator />
      </SafeAreaView>
    </Provider>
  );
}