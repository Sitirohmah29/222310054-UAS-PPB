import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './src/components/screen/SplashScreen';
import MainTabs from './src/components/MainTabs';
import EditTask from './src/components/task/EditTask';
import EditList from './src/components/home/EditList';
import SignIn from './src/components/auth/SignIn';
import SignUp from './src/components/auth/SignUp';
import TaskDetailScreen from './src/components/task/TaskDetailScreen';
import ExpTask from './src/components/task/ExpTask';


const App = () => {
  const Stack = createStackNavigator();

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Splas">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false}} />
            <Stack.Screen name="Home" component={MainTabs} options={{ headerShown: false}} />
            <Stack.Screen name="ExpCompleted" component={ExpTask} />
            <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen} options={{ headerTitle: 'Task Detail' }} />
            <Stack.Screen name="EditTask" component={EditTask} options={{ headerTitle: 'Edit Task' }} />
            <Stack.Screen name="EditList" component={EditList} options={{headerTitle: 'Edit List'}} />
           </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
