import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AccountScreen from '../screens/SettingsScreen/AccountScreen';
import SensorDetailScreen from '../screens/SensorDetailScreen/SensorDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="SensorDetails" component={SensorDetailScreen} />

    </Stack.Navigator>
  );
}