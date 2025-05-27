import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, Alert } from 'react-native';

//The cancel button will delete the data entered...
export default function CancelButton() {
    const navigation = useNavigation();

    const handleCancel = () => {
        Alert.alert('Cancel Entry', 'Are you sure you want to discard this entry?', [
        { text: 'No' },
        { text: 'Yes', onPress: () => navigation.goBack() },
        ]);
    };
    return (
        <TouchableOpacity onPress={handleCancel}>
            <Text style={{fontSize: 22}}>🗑</Text>
        </TouchableOpacity>
    )
}