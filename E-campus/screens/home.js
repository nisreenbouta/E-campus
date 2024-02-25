import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
          <Ionicons name={isDrawerOpen ? 'close' : 'menu'} size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>E-Campus</Text>
      </View>

      {/* Your Drawer Content Goes Here */}
      {isDrawerOpen && (
        <View style={styles.drawer}>
          <Text>Drawer Content</Text>
        </View>
      )}
      <Text style={styles.maintext}>Welcome <Text style={styles.subtext}>Nisreen</Text> !</Text>
      <Text style={styles.heading}>Today’s Schedule</Text>
    </View>
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
  maintext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#223F76'
  },
  subtext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#C8272E'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    padding: 20,
    color: '#223F76'
  },
  drawer: {
    flex: 1,
    backgroundColor: '#223F76',
    padding: 50,
    
  },
});

export default Home;
