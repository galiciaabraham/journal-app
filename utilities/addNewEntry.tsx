import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entry } from '@/types/entry';
import { getAllEntries } from './getAllEntries';

const ENTRIES_KEY = 'JOURNAL_ENTRIES';

//The addNewEntry function will write a new entry to the local storage key JOURNAL_ENTRIES.
export const addNewEntry = async (newEntry: Entry): Promise<void> => {
  try {
        const existingEntries = await getAllEntries();
        const updatedEntries = [newEntry, ...existingEntries];
        await AsyncStorage.setItem(ENTRIES_KEY, JSON.stringify(updatedEntries));
    } catch (error) {
        console.error(`We could not upload that entry ${newEntry}`, error);
    }
};
