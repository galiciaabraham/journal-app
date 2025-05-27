import { Text, FlatList, TouchableOpacity } from 'react-native';
import { Entry } from '@/types/entry';

type Props = {
    entries: Entry[];
    onSelect: (entryId: string) => void;
}

//This component displays a list of all the past entries for the user to display or edit them.
const EntriesList: React.FC<Props> = ({ entries, onSelect }) => {
    return (
        <FlatList
        data={entries}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
            <TouchableOpacity
                onPress={() => onSelect(item.id)}>
                <Text>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )}
        />
    )
}

export default EntriesList;