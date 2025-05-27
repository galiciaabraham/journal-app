import { Button } from 'react-native';
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
            <Button 
            onPress={navigateToNew}
            title='New'
            color='#90D7FF'
            accessibilityLabel='Add a new journal entry'
            />
    )
}