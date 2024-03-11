import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const STDProfile = () => {
    const navigation = useNavigation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
     };
  const handleLogOut = () => {
    navigation.navigate('E-campus');
  };

  const handleDrawerItemPress = (screenName) => {
    navigation.navigate(screenName);
    setIsDrawerOpen(false); // Close the drawer after navigating
  };

  const handleBottomNavBar = (screenName) => {
    navigation.navigate(screenName);
  };
  
  return (
   
   
    <View style={styles.container}>
      
      <View style={styles.navBar}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
          <Ionicons name={isDrawerOpen ? 'close' : 'menu'} size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>E-Campus</Text>
      </View>

       
    {/*  Drawer Content Goes Here */}
    {isDrawerOpen && (
        <View style={styles.drawer}>

          <TouchableOpacity onPress={() => handleDrawerItemPress('Profile')}>
            <Text style={styles.drawerContent}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrawerItemPress('Requests')} >
            <Text style={styles.drawerContent}>Requests</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrawerItemPress('Courses')} >
            <Text style={styles.drawerContent}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrawerItemPress('SPgroups')} >
            <Text style={styles.drawerContent}>Senior Project Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrawerItemPress('Department')} >
            <Text style={styles.drawerContent}>Department</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
        </View>
      )}

<TouchableOpacity style={styles.chatpot}>
        <Ionicons name="help-circle-sharp" size={30} color="white" />
      </TouchableOpacity>
     
        <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => handleBottomNavBar('Notifications')}>
         <MaterialIcons name="notifications" size={24} color="white" style={styles.bottomNavBarContent}/>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => handleBottomNavBar('Home')}>
            <MaterialCommunityIcons name="home-variant" size={24} color="white" style={styles.bottomNavBarContent}/>
         </TouchableOpacity> 
          <TouchableOpacity onPress={() => handleBottomNavBar('Messages')}>
            <Ionicons name="mail-sharp" size={24} color="white" style={styles.bottomNavBarContent}/>
          </TouchableOpacity> 
        </View>
    </View>
    
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    
 navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#223F76',
    paddingHorizontal: 10,
    zIndex: 100,
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

  drawer: {
    position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: '#223F76',
  padding: 50,
  zIndex: 99,
  },
  drawerContent: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#FFFFFF',
    marginBottom:10,
    marginTop:30
  },
  button: {
    backgroundColor: '#C8272E',
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
  },
  
  bottomNavBar:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#223F76',
    paddingLeft:10,
    paddingRight:60,
    paddingBottom:20,
    
   },
   
   bottomNavBarContent:{
   
    textAlign: 'center',
    color: '#FFFFFF',
    marginHorizontal:'16%'
   },
   

  chatpot: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    
    backgroundColor: '#223F76', 
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 3,
    marginBottom:80
  },
 

})

export default STDProfile; 


