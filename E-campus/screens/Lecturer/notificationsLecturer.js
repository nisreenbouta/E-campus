import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../../shared/styles';

const NotificationsLecturer = () => {
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
      <Text style={styles.heading}>Notifications</Text>
        <View style={styles.tableHeaderNotification}>
                <View style={styles.whiteFilterButtonNotification}>
                    <Text style={styles.whiteFilterButtonTextNotification}>Filter</Text>
                    <MaterialCommunityIcons name="filter-menu" size={15} color="#C8272E" />
                </View>
                <View style={styles.whiteFilterButtonNotification}>
                    <Text style={styles.whiteFilterButtonTextNotification}>Show All</Text>
                </View>
                <View style={styles.whiteFilterButtonNotification}>
                    <Text style={styles.whiteFilterButtonTextNotification}>Unread</Text>
                </View>
        </View>

        <ScrollView>
              <View style={styles.smallcard}>
                    <Image
                        source={require('../../assets/profile-user.png')}
                        style={styles.ProfilePicIcon}  
                      />
                      <View style={styles.textContainerTable}>
                          <Text style={styles.tableCardHeading}>Sender Name</Text>
                          <Text style={styles.tableCardMsgPreview}>Message Text preview...</Text>
                      </View>
                      
                      <View style={styles.textContainerTable}>
                          <View style={styles.cardIconTable}>
                              <Text style={styles.notificationTime}>10h</Text>
                          </View>
                      </View>
                </View>
                <View style={styles.smallcard}>
                    <Image
                        source={require('../../assets/profile-user.png')}
                        style={styles.ProfilePicIcon}  
                      />
                      <View style={styles.textContainerTable}>
                          <Text style={styles.tableCardHeading}>Sender Name</Text>
                          <Text style={styles.tableCardMsgPreview}>Message Text preview...</Text>
                      </View>
                      
                      <View style={styles.textContainerTable}>
                          <View style={styles.cardIconTable}>
                          <Text style={styles.notificationTime}>10h</Text>
                              </View>
                      </View>
                </View>
                <View style={styles.smallcard}>
                    <Image
                        source={require('../../assets/profile-user.png')}
                        style={styles.ProfilePicIcon}  
                      />
                     <View style={styles.textContainerTable}>
                          <Text style={styles.tableCardHeading}>Sender Name</Text>
                          <Text style={styles.tableCardMsgPreview}>Message Text preview...</Text>
                      </View>
                      
                      <View style={styles.textContainerTable}>
                          <View style={styles.cardIconTable}>
                          <Text style={styles.notificationTime}>10h</Text>
                              </View>
                      </View>
                </View>
                <View style={styles.smallcard}>
                    <Image
                        source={require('../../assets/profile-user.png')}
                        style={styles.ProfilePicIcon}  
                      />
                      <View style={styles.textContainerTable}>
                          <Text style={styles.tableCardHeading}>Sender Name</Text>
                          <Text style={styles.tableCardMsgPreview}>Message Text preview...</Text>
                      </View>
                      
                      <View style={styles.textContainerTable}>
                          <View style={styles.cardIconTable}>
                          <Text style={styles.notificationTime}>10h</Text>
                              </View>
                      </View>
                </View>
          </ScrollView>

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



export default NotificationsLecturer; 


