import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { deleteEntry } from '@/utilities/deleteEntry';


type CancelButtonProps = {
    entryId?: string;
};

//The cancel button will delete the data entered...
export default function CancelButton({entryId}: CancelButtonProps) {
    const navigation = useNavigation();

    const handleCancel = () => {
        Alert.alert('Cancel Entry', 'Are you sure you want to discard this entry?', [
        { text: 'No' },
        { text: 'Yes', onPress: async () => { 
            if (entryId) {
                await deleteEntry(entryId);
            }
            navigation.goBack() }},
        ]);
    };
    return (
        <TouchableOpacity onPress={handleCancel}>
            <Text style={{fontSize: 22}}>🗑</Text>
        </TouchableOpacity>
    )
}