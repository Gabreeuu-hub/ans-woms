import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs 
        screenOptions={{
            tabBarActiveTintColor: "#ffd33d",
        }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{ 
            title: 'Home', tabBarIcon: ({ color, focused }) => (
            <Ionicons
            name={focused ? "home-sharp" : "home-outline"}
            color={color}
            size={24}
            />
            ),
        }}
    />   
      <Tabs.Screen
      name="WOsScreen"
      options={{
        title: 'WOs', tabBarIcon: ({ color, focused }) => (
        <Ionicons
            name={focused ? "list-outline" : "list-sharp"}
            color={color}
            size={24}
            />
            ),
        }}
    />
      <Tabs.Screen
      name="NewWOsScreen"
      options={{
        title: 'New WOs', tabBarIcon: ({ color, focused }) => (
        <Ionicons
            name={focused ? "add-circle-outline" : "add-circle-sharp"}
            color={color}
            size={24}
            />
            ),
        }}
    />
      <Tabs.Screen
        name="AboutScreen"
        options={{
            title: 'About', tabBarIcon: ({ color, focused }) => (
            <Ionicons
            name={focused ? "help-outline" : "help-sharp"}
            color={color}
            size={24}
            />
            ), 
        }}
    />
    </Tabs>
  )
}
