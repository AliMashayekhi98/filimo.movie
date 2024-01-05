// import React from "react";
 import { NavigationContainer } from '@react-navigation/native';

// import {Tabs} from './navigation/tabs';
import ChatScreen from '../Ali/screens/ChatScreen'
import SettingsScreen from '../Ali/screens/SettingsScreen'
import PostScreen from '../Ali/screens/PostScreen'

import { TouchableOpacity, StyleSheet, Text, View, Platform, StatusBar, Button, Image , ScrollView, Alert } from 'react-native';

// const App = () => {
//   return(
//     <NavigationContainer>
//       <Tabs/> 
//     </NavigationContainer>
//   );
// }
// export default App;


// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import  React, {Component}  from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// (...)
const Tab = createBottomTabNavigator();

export default class App extends Component  {  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 2000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <Image source={require('../Ali/assets/icon.png')}  
                    style={{width:'100%', height: '100%', resizeMode: 'contain' }} />  
                     
                </View>  
               
             </View> )  


  return (
   
    <NavigationContainer>
        {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                }  
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'List') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Sport') {              
              iconName = focused ? 'ios-football' : 'ios-football-outline';
           
            }
            else if (route.name === 'Filimo') {              
              iconName = focused ? 'ios-home' : 'ios-home-outline';
           
            }
           
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
          tabBarActiveTintColor: '#29025C',
          tabBarInactiveTintColor: 'white',
          tabBarInactiveBackgroundColor:'orange',
          tabBarActiveBackgroundColor:'orange',
          setStatusBarBackgroundColor:'#29025C',
        })}
      >
        <Tab.Screen name="Filimo"  component={ChatScreen} />
        <Tab.Screen name="Sport"  component={ChatScreen} />
        <Tab.Screen name="List" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={PostScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create(  
  {  
     
     
      SplashScreen_RootView:  
      {  
        backgroundColor:'#29025C',
          justifyContent: 'center',  
          flex:1,  
          margin: 10,  
          position: 'absolute',  
          width: '100%',  
          height: '100%',  
        },  
     
      SplashScreen_ChildView:  
      {  
          justifyContent: 'center',  
          alignItems: 'center',  
          backgroundColor:'#29025C',
          flex:1,  
      },  
  });  