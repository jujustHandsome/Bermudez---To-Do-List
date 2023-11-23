import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';


import Home from './Screens/Home';
import Details from './Screens/Details';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShwon: false}}>
        <Stack.Screen
          name='Home'
          component={Home}
          />
          <Stack.Screen
          name='Details'
          component={Details}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}