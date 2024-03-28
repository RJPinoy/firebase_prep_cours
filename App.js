import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { User, onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { FIREBASE_AUTH } from "./firebaseConfig";

export default function App() {
  const Stack = createNativeStackNavigator();
  const InnerStack = createNativeStackNavigator();

  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user);
      setUser(user);
    })
  }, [])

  function InsideNavigation() {
    return (
      <InnerStack.Navigator initialRouteName="Home">
        <InnerStack.Screen name='Home' component={ HomeScreen } />
      </InnerStack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        { user ?
          <Stack.Screen options={{ headerShown: false }} name="InsideNav" component={ InsideNavigation } />
          :
          <Stack.Screen name='Login' component={ LoginScreen } />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}