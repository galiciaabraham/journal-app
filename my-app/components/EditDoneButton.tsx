import { updateEntry } from '@/utilities/updateEntry';
import { useNavigation } from '@react-navigation/native';
import { Entry } from '@/types/entry';
import { TouchableOpacity, Text, Alert } from 'react-native';

type DoneButtonProps = {
  editedEntry: Entry;
};

//The DoneButton will action the addNewEntry function to add the new entry to the local storage.
export default function DoneButton({ editedEntry } : DoneButtonProps) {
    const navigation = useNavigation();

    const handleUpdateEntry = async () => {
        Alert.alert('Save entry', 'Are you sure you want to save this entry?', [
              { text: 'No' },
              { text: 'Yes', onPress: async () => {  
                await updateEntry(editedEntry);
                navigation.goBack()},
              }])
        ;
    };
    return (
        <TouchableOpacity onPress={handleUpdateEntry}
        >
            <Text style={
            {fontSize: 22}}>✓</Text>
        </TouchableOpacity>
    )
}