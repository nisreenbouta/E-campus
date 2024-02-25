
import React, { useState } from 'react';
import { View, Text,StatusBar, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Login from './screens/login'; 

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="E-campus" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#223F76',
    paddingHorizontal: 10,
    marginTop: StatusBar.currentHeight || 50,
  },
  menuButton: {
    marginRight: 102,
    },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    color:'#FFFFFF'
  },
  maintext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:20,
    color:'#223F76'
  },
  subtext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:20,
    color:'#C8272E'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'left',
    marginTop:10,
    marginLeft: 10,
    padding: 20,
    color:'#223F76'
  },
  drawer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  },
 
});

export default App;
