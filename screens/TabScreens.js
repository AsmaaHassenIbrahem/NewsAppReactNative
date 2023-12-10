import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import { Strings } from "../utilities/String";
import { useAppContext } from "../context/appContext";

import i18n from "../localization/translations";

const Tab = createMaterialBottomTabNavigator();

function TabScreens() {
  if (!i18n) {
    return null; // Or handle the absence of i18n appropriately
  }

  const { t } = i18n;
  //console.log(t(Strings.settings));
  const { Colors } = useAppContext();

  return (
    <Tab.Navigator
      initialRouteName={Strings.home}
      activeColor={Colors.secondry}
      barStyle={{ backgroundColor: Colors.primary }}
    >
      <Tab.Screen
        name={Strings.home}
        component={HomeScreen}
        options={{
          tabBarLabel: t(Strings.home),
          tabBarIcon: ({ color }) => (
            <Ionicons name={Strings.home} color={color} size={20} />
          ),
        }}
      />
      {/* <Tab.Screen
        name={Strings.settings}
        component={SettingsScreen}
        options={{
          //tabBarLabel: t(Strings.settings),
          tabBarIcon: ({ color }) => (
            <Ionicons name={Strings.settings} color={color} size={20} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default TabScreens;
