import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext, AuthProvider } from './authContext.jsx';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


const Stack = createNativeStackNavigator();

function AppNav() {
  const { user, loading } = useContext(AuthContext);
  if (loading) return null; // o un Splash

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user
          ? (
            // Usuario autenticado
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            // No autenticado
            <>
              <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={{ title: 'Iniciar Sesión' }} 
              />
              <Stack.Screen 
                name="Register" 
                component={RegisterScreen} 
                options={{ title: 'Registro' }} 
              />
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
