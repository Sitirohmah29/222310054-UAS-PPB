// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import Task from './src/components/pagetask/Task';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       {/* <SplashScreen /> */}
//       {/* <SignUpScreen/> */}
//       {/* <SignIn/>\ */}
//       {/* <Header/> */}
//       {/* <Index/> */}
//       {/* <Index2/> */}
//       {/* <Logout/> */} 
//       <Task/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f4e1',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './src/components/screen/SplashScreen';
import SignUp from './src/components/auth/components/SignUp';
import SignIn from './src/components/auth/components/SignIn';
import Task from './src/components/pagetask/Task';
import ExpCompleted from './src/components/pagetask/components/modules/ExpCompleted';
import TaskDetailScreen from './src/components/pagetask/components/task/TaskDetailScreen';
import MainTabs from './src/components/MainTabs';


const App = () => {
  const Stack = createStackNavigator();

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Splas">
            <Stack.Screen name="Splash" component={MainTabs} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false}} />
            <Stack.Screen name="Home" component={MainTabs} options={{ headerShown: false}} />
            <Stack.Screen name="ExpCompleted" component={ExpCompleted} />
            <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen} options={{ headerTitle: 'Task Detail' }} />
            
           </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
