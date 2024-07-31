import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Principal from './Pantallas/Principal';
import SplashScreens from './Pantallas/Splash'; // Pantalla de splash
import Logica from './Pantallas/Logica'; // Nueva pantalla lógica

const Stack = createStackNavigator();
function containerRoutes(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Inicio" component={Principal} />
        <Stack.Screen name="Splash" component={SplashScreens} />
        <Stack.Screen name="Logica" component={Logica} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default containerRoutes;