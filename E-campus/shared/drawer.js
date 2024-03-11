import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Drawer = () => {
const navigation = useNavigation();
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const toggleDrawer = () => {
  setIsDrawerOpen(!isDrawerOpen);
};

const handleLogOut = () => {
  navigation.navigate('E-campus');
};

return (
   
      <View style={styles.navBar}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
          <Ionicons name={isDrawerOpen ? 'close' : 'menu'} size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>E-Campus</Text>
     

       
    {/*  Drawer Content Goes Here */}
    {isDrawerOpen && (
        <View style={styles.drawer}>
          <Text style={styles.drawerContent}>Profile</Text>
          <Text style={styles.drawerContent}>Requests</Text>
          <Text style={styles.drawerContent}>Courses</Text>
          <Text style={styles.drawerContent}>Senior Project Groups</Text>
          <Text style={styles.drawerContent}>Department</Text>
        
          <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
        </View>
      )}
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

})