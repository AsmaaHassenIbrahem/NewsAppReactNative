import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , Text } from 'react-native';
import i18next from './localization/i18next';
import { useTranslation } from 'react-i18next';
import { NavigationContainer} from '@react-navigation/native'
import DetailsNewsScreen from './screens/DetailsNewsScreen';
import TabScreens from './screens/TabScreens';
import { Colors } from './utilities/Color';
import { Strings } from './utilities/String';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Fragment } from 'react';

const Stack = createNativeStackNavigator();


export default function App() {
  const {t} = useTranslation(); 

  return (
<Fragment>
<StatusBar style='dark'/>

<NavigationContainer>
<Stack.Navigator 
   screenOptions={{
    headerStyle: { backgroundColor: Colors.primary },
    headerTintColor: Colors.secondry,
    contentStyle: { backgroundColor: Colors.background },
  }}>

  <Stack.Screen
  name= { Strings.tabs }
  component={TabScreens}
  options={{headerShown: false}}
  />
  <Stack.Screen
  name= { Strings.details }
  component={DetailsNewsScreen}
  options={{
    title:t('details')
  }}
  />
</Stack.Navigator>
     </NavigationContainer> 
  
</Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
