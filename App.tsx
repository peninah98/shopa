import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import Landing from "./screens/Landing"
import NotFoundScreen from "./screens/NotFound"

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="NotFoundScreen"
          component={NotFoundScreen}
          options={{ title: "404 - Page Not Found" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
