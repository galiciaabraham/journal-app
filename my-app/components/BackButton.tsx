import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, Alert } from 'react-native';

//The back button will warn the user of the deletion of the entered data...
export default function BackButton() {
    const navigation = useNavigation();

    const handleCancel = () => {
    Alert.alert('Cancel Entry', 'Are you sure you want to discard this entry?', [
      { text: 'No' },
      { text: 'Yes', onPress: () => navigation.goBack() },
      ]);
    };
    
    return (
      <TouchableOpacity onPress={handleCancel}>            
          <Text style={{fontSize: 22}}>←</Text>
      </TouchableOpacity>
      )
}