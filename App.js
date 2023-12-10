import { StatusBar } from "expo-status-bar";
import "./localization/translations";
import { AppProvider, useAppContext } from "./context/appContext";
import StackNavigation from "./mainNavigation";

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="dark" />
      <StackNavigation></StackNavigation>
    </AppProvider>
  );
}
