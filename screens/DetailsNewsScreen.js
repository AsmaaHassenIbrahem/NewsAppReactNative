import { View, Text, Pressable } from "react-native";
import { useAppContext } from "../storage/AppProvider";

function DetailsNewsScreen({ route }) {
  //  const cardId = route.params.itemId;
  const title = route.params.title;
  const { theme } = useAppContext();
  return (
    <View>
      <Pressable>
        <View>
          <Text style={{ color: theme.text }}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default DetailsNewsScreen;
