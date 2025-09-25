import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import UserList from './screens/UserList';
import UserDetail from './screens/UserDetail';
import ThemeToggleProvider, { useThemeToggle } from './theme/ThemeToggleProvider';


const Stack = createNativeStackNavigator();


function AppNavigator() {
const { isDark } = useThemeToggle();


return (
<NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
<StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
<Stack.Navigator>
<Stack.Screen name="Users" component={UserList} />
<Stack.Screen name="UserDetail" component={UserDetail} options={{ title: 'Profile' }} />
</Stack.Navigator>
</NavigationContainer>
);
}


export default function App() {
return (
<SafeAreaProvider>
<ThemeToggleProvider>
<AppNavigator />
</ThemeToggleProvider>
</SafeAreaProvider>
);
}