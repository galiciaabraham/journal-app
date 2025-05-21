import { Text, View } from "react-native";
import '../global.css';
import Welcome from '@/components/Welcome';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Welcome />
    </View>
  );
}
