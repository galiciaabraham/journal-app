import { Text, View } from "react-native";

export default function Another_Window() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This will be a second screen in my app</Text>
    </View>
  );
}
