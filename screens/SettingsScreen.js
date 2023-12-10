// import RadioButtonRN from 'radio-buttons-react-native';
// import React, { useCallback, useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   useColorScheme,
//   View,
// } from 'react-native';
// import { Colors } from '../utilities';
// import { get, save } from '../Storage';

// const SettingsScreen = () => {
//   const [themeValue, setThemeValue] = useState('');
//   const [initialValue, setInitialValue] = useState(0);
//   const themes = useColorScheme();
//   const data = [
//     {
//       label: 'Light Mode',
//       value: 'light',
//     },
//     {
//       label: 'Dark Mode',
//       value: 'dark',
//     },
//     {
//       label: 'System Default',
//       value: 'default',
//     },
//   ];

//   const themeOperations = theme => {
//     switch (theme) {
//       case 'dark':
//         setTheme(theme, false);
//         setInitialValue(2);
//         return;
//       case 'light':
//         setTheme(theme, false);
//         setInitialValue(1);
//         return;
//       case 'default':
//         setTheme(themes, true);
//         setInitialValue(3);
//         return;
//     }
//   };

//   const getAppTheme = useCallback(async () => {
//     const theme = await get('Theme');
//     const isDefault = await get('IsDefault');
//     isDefault ? themeOperations('default') : themeOperations(theme);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const setTheme = useCallback(async (theme, isDefault) => {
//     save('Theme', theme);
//     save('IsDefault', isDefault);
//     setThemeValue(theme);
//   }, []);

//   useEffect(() => {
//     getAppTheme();
//   }, [getAppTheme]);

//   const styles = styling(themeValue);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.textStyle}>
//         This is demo of default dark/light theme with switch/Buttons using asycn
//         storage.
//       </Text>
//       <TextInput
//         style={styles.textInputStyle}
//         placeholder="Type here"
//         placeholderTextColor={Colors[themeValue]?.gray}
//       />
//       <TouchableOpacity style={styles.touchableStyle}>
//         <Text style={styles.buttonTextStyle}>Button</Text>
//       </TouchableOpacity>
//       <RadioButtonRN
//         data={data}
//         selectedBtn={e => themeOperations(e?.value)}
//         initial={initialValue}
//         activeColor={Colors[themeValue]?.activeColor}
//         deactiveColor={Colors[themeValue]?.deactiveColor}
//         boxActiveBgColor={Colors[themeValue]?.boxActiveColor}
//         boxDeactiveBgColor={Colors[themeValue]?.themeColor}
//         textColor={Colors[themeValue]?.white}
//       />
//     </View>
//   );
// };

// export default SettingsScreen;

// const styling = theme =>
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       backgroundColor: Colors[theme]?.themeColor,
//       paddingHorizontal: 20,
//     },
//     textStyle: {
//       color: Colors[theme]?.white,
//     },
//     textInputStyle: {
//       borderColor: Colors[theme]?.gray,
//       padding: 10,
//       borderWidth: 2,
//       borderRadius: 5,
//       width: '100%',
//       marginTop: 20,
//       color: Colors[theme]?.white,
//     },
//     touchableStyle: {
//       backgroundColor: Colors[theme]?.sky,
//       padding: 10,
//       borderRadius: 6,
//       width: '100%',
//       height: 57,
//       justifyContent: 'center',
//       marginTop: 20,
//     },
//     buttonTextStyle: {
//       textAlign: 'center',
//       color: Colors[theme]?.commonWhite,
//       fontSize: 20,
//       fontWeight: '500',
//     },
//   });

import { View, Text, StyleSheet } from "react-native";
//import { useState } from "react";
import { Strings } from "../utilities/String";
import { Switch } from "react-native-switch";
import { useAppContext } from "../context/appContext";
import I18n from "../localization/translations/index";

function SettingsScreen() {
  if (!I18n) {
    return null; // Or handle the absence of i18n appropriately
  }

  const { t } = I18n;
  console.log("here", t(Strings.Light));
  const { language, darkMode, Colors, toggleLanguage, toggleDarkMode } =
    useAppContext();

  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <View style={styles.toogleContainerStyle}>
        <Text style={[styles.TextStyle, { color: Colors.text }]}>
          {t("textToogleThemeMood")}
        </Text>
        <Switch
          activeText={t(Strings.dark)}
          inActiveText={t(Strings.Light)}
          onValueChange={() => toggleDarkMode()}
          circleBorderWidth={2}
          switchWidthMultiplier={5}
          value={darkMode}
        />
      </View>

      <View style={styles.toogleContainerStyle}>
        <Text style={[styles.TextStyle, { color: Colors.text }]}>
          {" "}
          {t(Strings.textToggleLanguage)}
        </Text>
        <Switch
          activeText={t(Strings.arabic)}
          inActiveText={t(Strings.english)}
          onValueChange={() => toggleLanguage()}
          circleBorderWidth={2}
          switchWidthMultiplier={5}
          value={language == "ar"}
        />
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    alignContent: "center",
  },
  TextStyle: {
    margin: 20,
    alignItems: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  toogleContainerStyle: {
    marginBottom: 50,
    alignItems: "center",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  card_template: {
    width: 250,
    height: 250,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
  },

  text_container: {
    position: "absolute",
    bottom: 0,
    padding: 5,
    fontSize: 20,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardContainer: {
    borderRadius: 8,
    padding: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10, // Required for Android
    flexDirection: "row",
    margin: 10,
  },
});
