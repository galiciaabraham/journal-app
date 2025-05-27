import { View } from "react-native";
import Welcome from '@/components/Welcome';
import NewButton from '@/components/NewButton';
import EntriesList from "@/components/EntriesBox";
import { getEntryById }from '@/utilities/getEntryById';
import { getAllEntries } from "@/utilities/getAllEntries";
import { useState, useEffect } from "react";
import type { Entry } from '@/types/entry'


//The component that hosts what's displayed in the Home menu.
export default function Index() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    getAllEntries().then(setEntries);
  }, []);

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
      <EntriesList entries={entries} onSelect={getEntryById}/>
    </View>
  );
}
