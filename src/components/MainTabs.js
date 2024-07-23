import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Task from './home/Home';
import Logout from './Logout/Logout';
import Create from './create/Create';
import TaskDetailScreen from './task/TaskDetailScreen';
import Calender from './calendar/IndexCalender';



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
          } else if (route.name === 'Create') {
            iconName = focused ? 'add-circle' : 'add-circle-outline'; 
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
          height: 80,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Task} options={{headerTitleAlign: 'center'}}/>
      <Tab.Screen name="Task" component={TaskDetailScreen} options={{headerTitleAlign: 'center'}} />
      <Tab.Screen name="Create" component={Create} options={{headerTitleAlign: 'center', headerTitle: 'Create Task'}}/>
      <Tab.Screen name="Calendar" component={Calender} options={{headerTitleAlign: 'center'}}/>
      <Tab.Screen name="Profile" component={Logout} options={{headerTitleAlign: 'center'}}/>
    </Tab.Navigator>
  );
};

export default MainTabs;
