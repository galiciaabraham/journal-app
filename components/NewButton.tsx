import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  NewEntry: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

//A button that redirects the user to the New Entry tab
export default function NewButton() {
    const navigation = useNavigation<NavigationProp>();
    //The event handler that redirects the user.
    const navigateToNew = () => {
        navigation.navigate('NewEntry');
}
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={navigateToNew}
            accessibilityLabel='Add a new journal entry'
            activeOpacity={0.7}
        >
            <Text style={styles.buttonText}>New</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#7B6D8D',
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});