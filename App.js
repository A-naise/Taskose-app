import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ViewAllScreen from "./screens/ViewAllScreen";
import DetailsScreen from "./screens/DetailsScreen";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home"  component={HomeScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Menu"  component={MenuScreen} />
        <Stack.Screen name="Notification"  component={NotificationScreen}  options={{ headerShown: false }}  />
        <Stack.Screen name="View"  component={ViewAllScreen}  options={{ headerShown: false }}  />
        <Stack.Screen name="Details"  component={DetailsScreen}  options={{ headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
