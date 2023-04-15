import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Onboarding from './Additional/onBoarding';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unregister = auth.onAuthStateChanged(exist => {
      if (exist) setUser(exist);
      else setUser(null);
    });

    return () => {
      unregister();
    };
  }, [user]);
  return (
    <NavigationContainer>
      <Stack.Navigator options={{
        headerShown: false,
      }}>{user ?
        (
          <>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}

            /><Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Login"
              component={LoginScreen}
            />

          </>) : (<>
            <Stack.Screen
              name="Home"
              component={HomeScreen}

            />
          </>)}

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
