import  Drawer from '../shared/drawer';
import  BottomNavbar from '../shared/bottomNavbar';

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeLecturer from '../screens/Lecturer/homeLecturer'; 

const MyLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <View style={styles.container}>
            
            <Drawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}/>
      {/* Main Layout */}
      {!isDrawerOpen && (
      <View style={styles.mainContent}>

    <HomeLecturer/>
    <BottomNavbar />


        {/* <View style={styles.header}>
          <Text style={styles.headerText}></Text>
        </View>
        <View style={styles.content}>
          <Text></Text>
        </View>
        // <View style={styles.footer}>
        //   <Text style={styles.footerText}></Text>
        // </View> */}
      </View>
       )}  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",

  },
  mainContent: {
    zIndex: 0,
    top: 50
  },
  header: {
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 50,
    zIndex: 5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 20,
  },
});

export default MyLayout;