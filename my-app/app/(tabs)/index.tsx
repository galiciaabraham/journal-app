import { Text, View } from "react-native";
import Welcome from '@/components/Welcome';
import NewButton from '@/components/NewButton';
import EntriesList from "@/components/EntriesBox";
import getEntryById from '@/utilities/getEntryById';

const mockingEntries = [
   { id: '1', preview: 'Entry 1: Today I started...' },
  { id: '2', preview: 'Entry 2: I dun know what to write...' },
  { id: '3', preview: 'Entry 3: The answer is 42!...' },
]
//The component that hosts what's displayed in the Home menu.
export default function Index() {
  return (
    <View
      style={{
        margin: 2,
        backgroundColor: '# BFD0E0',
      }}
    >
    <Welcome />
    <View style={{
        margin: 2,
        padding: 5,
        borderRadius: 20,
        alignItems: "center"
      }}>
    < NewButton/>
    </View>
      <EntriesList entries={mockingEntries} onSelect={getEntryById}/>
    </View>
  );
}
