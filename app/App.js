import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Onboarding from './Additional/onBoarding';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import ProfileScreen from './screens/ProfileScreen';
import PlanJourney from './screens/PlanJourney';
import AccidentAreas from './screens/AccidentAreas';
import ReportCrash from './screens/ReportCrash';
import ListAreas from './screens/ListAreas';
import AddFamily from './screens/AddFamily';
import EditProfile from './screens/EditProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      }
    })
    return unsubscribe
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
          name="Onboarding"
          component={Onboarding}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="PlanJourney"
          component={PlanJourney}
        />
        <Stack.Screen
          name="AccidentAreas"
          component={AccidentAreas}
        />
        <Stack.Screen
          name="ReportCrash"
          component={ReportCrash}
        />
        <Stack.Screen
          name="ListAreas"
          component={ListAreas}
        />
        <Stack.Screen
          name="AddFamily"
          component={AddFamily}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
