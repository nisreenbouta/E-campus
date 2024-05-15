import React, { useState, Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const BottomNavbar = () => {
  const navigation = useNavigation();

  const handleBottomNavBar = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styless.container}>  
      <View style={styless.bottomNavBar}>
          <TouchableOpacity onPress={() => handleBottomNavBar('Notifications')}>
          <MaterialIcons name="notifications" size={24} color="white" style={styless.bottomNavBarContent}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleBottomNavBar('Home')}>
              <MaterialCommunityIcons name="home-variant" size={24} color="white" style={styless.bottomNavBarContent}/>
          </TouchableOpacity> 
            <TouchableOpacity onPress={() => handleBottomNavBar('Messages')}>
              <Ionicons name="mail-sharp" size={24} color="white" style={styless.bottomNavBarContent}/>
            </TouchableOpacity> 
        </View>
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  bottomNavBar:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 180,
    backgroundColor: '#223F76',
    paddingHorizontal: 20,
    paddingBottom: 20,
   },
   
   bottomNavBarContent:{
   
    textAlign: 'center',
    color: '#FFFFFF',
    marginHorizontal:'16%'
   },
  
  
});

export default BottomNavbar;
