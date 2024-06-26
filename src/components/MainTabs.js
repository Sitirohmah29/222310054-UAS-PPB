import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import Home from './mainpage/Home';
import Task from './pagetask/Task';



const MainTabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Task') {
            iconName = focused ? 'checkbox' : 'checkbox-outline';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#26282B',
        tabBarInactiveTintColor: '#7077A1',
        tabBarStyle: {
          backgroundColor: '#F5F7F8',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="Task" component={Task} options={{headerShown:false}}/>
      <Tab.Screen name="Calendar" component={() => <Text>Calendar</Text>} />
      <Tab.Screen name="Profile" component={() => <Text>Profile</Text>} />
    </Tab.Navigator>
  );
};

export default MainTabs;
