import React, { useState, Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Drawer = ({isDrawerOpen, setIsDrawerOpen}) => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleLogOut = () => {
    navigation.navigate('E-campus');
  };

  const handleDrawerItemPress = (screenName) => {
    navigation.navigate(screenName);
    setIsDrawerOpen(false); // Close the drawer after navigating
  };

  return (
    <View style={styless.container}>
      
      <View style={styless.navBar}>
        <TouchableOpacity onPress={toggleDrawer} style={styless.menuButton}>
          <Ionicons name={isDrawerOpen ? 'close' : 'menu'} size={35} color="white" />
        </TouchableOpacity>
        <Text style={styless.title}>E-Campus</Text>
      </View>

       
    {/*  Drawer Content Goes Here */}
    {isDrawerOpen && (
        <View style={styless.drawer}>
          <TouchableOpacity onPress={() => handleDrawerItemPress('Profile')}>
            <Text style={styless.drawerContent}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrawerItemPress('Requests')} >
            <Text style={styless.drawerContent}>Requests</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrawerItemPress('Courses')} >
            <Text style={styless.drawerContent}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrawerItemPress('SPgroups')} >
            <Text style={styless.drawerContent}>Senior Project Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrawerItemPress('Department')} >
            <Text style={styless.drawerContent}>Department</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styless.button} onPress={handleLogOut}>
            <Text style={styless.buttonText}>Log Out</Text>
          </TouchableOpacity>
          
        </View>
 )}  
 
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#223F76',
    paddingHorizontal: 10,
    zIndex: 600,
  },
  menuButton: {
    marginRight: 102,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  // drawer: {
  //   position:"absolute",
  //   top: 50,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   padding: 50,
  //   backgroundColor: '#223F76',
  //   zIndex: 300,
  //   height: 1000
  // },
  drawer: {
    position:"absolute",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 50,
    backgroundColor: '#223F76',
    zIndex: 100
  },
  drawerContent: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#FFFFFF',
    marginTop:40,
    zIndex: 500,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width:148,
    borderRadius: 5,
    marginLeft:'25%',
    marginTop:74
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Drawer;
