import { addNewEntry } from '@/utilities/addNewEntry';
import { useNavigation } from '@react-navigation/native';
import { Entry } from '@/types/entry';
import { TouchableOpacity, Text, Alert } from 'react-native';

type DoneButtonProps = {
  newEntry: Entry;
};

//The DoneButton will action the addNewEntry function to add the new entry to the local storage.
export default function DoneButton({ newEntry } : DoneButtonProps) {
    const navigation = useNavigation();

    const handleAddNewEntry = async () => {
        Alert.alert('Save entry', 'Are you sure you want to save this entry?', [
              { text: 'No' },
              { text: 'Yes', onPress: async () => {  
                await addNewEntry(newEntry);
                navigation.goBack()},
              }])
        ;
    };
    return (
        <TouchableOpacity onPress={handleAddNewEntry}
        >
            <Text style={
            {fontSize: 22}}>✓</Text>
        </TouchableOpacity>
    )
}