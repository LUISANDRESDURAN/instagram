// App.js
import React, { useContext } from 'react';
import { NavigationContainer }      from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext, AuthProvider } from './authContext.jsx';
import LoginScreen     from './screens/LoginScreen';
import RegisterScreen  from './screens/RegisterScreen';
import HomeScreen      from './screens/HomeScreen'; // crea esta pantalla

const Stack = createNativeStackNavigator();

function AppNav() {
  const { user, loading } = useContext(AuthContext);
  if (loading) return null; // o un splash screen

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Login"    component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
