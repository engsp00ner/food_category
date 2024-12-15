import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
//this will set the navigation container
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//drawer navigator
import { createDrawerNavigator } from "@react-navigation/drawer";

//components that i have created
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Provider } from "react-redux";
import { store } from "./STORE/Redux/store";
//this stack constant is for stack navigation
const Stack = createNativeStackNavigator();

//this drawer constant is for Drawer navigation
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <>
      {/* we add the drawer navigator with all options for the base navigator
      screen such as color width direction etc */}
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          //change the background color for the main screen
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          //change the drawer background color
          drawerContentStyle: { backgroundColor: "#351401" },
          //this to chang the color of un selected items of the drawer
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          //this will change the background color for the active screen in the drawer
          drawerActiveBackgroundColor: "#e4baa1",
        }}>
        <Drawer.Screen
          //the name of the screen should be unique name
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="list"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            title: "Favourites",
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="star"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />

      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          {/* to add default options to all screens  we use screen options*/}
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}>
            {/* but if we want customized options for certain screen
           we use options on the stack screen */}
            <Stack.Screen
              name="Drawer"
              //the component will be
              //the name of the function i want to render
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            {/* heer is another way of how to dynimacilly
           set any options using route hook  */}
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverviewScreen}
            />

            <Stack.Screen
              name="MealDetailsScreen"
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}
