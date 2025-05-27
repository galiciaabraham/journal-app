import { View } from "react-native";
import Welcome from '@/components/Welcome';
import NewButton from '@/components/NewButton';
import EntriesList from "@/components/EntriesBox";
import { getAllEntries } from "@/utilities/getAllEntries";
import { useState, useEffect } from "react";
import type { Entry } from '@/types/entry'
import { useIsFocused } from "@react-navigation/native";


//The component that hosts what's displayed in the Home menu.
export default function Index() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){
        getAllEntries().then(setEntries);
    }
  }, [isFocused]);

  return (
    <View
      style={{
        margin: 2,
        backgroundColor: '#BFD0E0',
      }}
    >
    <Welcome />
    <View style={{
        margin: 20,
        padding: 5,
        borderRadius: 20,
        alignItems: 'flex-end',
      }}>
    < NewButton/>
    </View>
      <EntriesList entries={entries}/>
    </View>
  );
}
