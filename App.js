import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Navigation from "./src/components/Navigation";
import TodayScreen from "./src/screens/TodayScreen";
import TeamScreen from "./src/screens/TeamScreen";
import TasksScreen from "./src/screens/TasksScreen";
import RecentScreen from "./src/screens/RecentScreen";
import AnalyticsScreen from "./src/screens/AnalyticsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView className="relative flex-1">
        <StatusBar style="auto" />
        <Tab.Navigator
          initialRouteName="Today"
          screenOptions={{
            headerShown: false,
          }}
          tabBar={(props) => <Navigation {...props} />}
        >
          <Tab.Screen
            name="Recent"
            component={RecentScreen}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Team"
            component={TeamScreen}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Today"
            component={TodayScreen}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Tasks"
            component={TasksScreen}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Analytics"
            component={AnalyticsScreen}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
