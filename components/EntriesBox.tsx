import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Entry } from '@/types/entry';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
  EditEntry: {entryId : string};
  NewEntry: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'EditEntry'>;



type Props = {
    entries: Entry[];
}


//This component displays a list of all the past entries for the user to display or edit them.
const EntriesList: React.FC<Props> = ({ entries}) => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <FlatList
        data={entries}
        keyExtractor = {(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem = {({item}) => (
            <TouchableOpacity
                onPress={() => navigation.navigate('EditEntry', { entryId: item.id })}
                style={styles.entryCard}>
                <Text style={styles.titleText}>
                    {item.title}
                </Text>
                <Text style={styles.contentText}>
                    {item.content}
                </Text>
            </TouchableOpacity>
        )}
        />
    )
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  entryCard: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 16,
    padding: 4,
    color: '#333',
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 13,
  }
});

export default EntriesList;