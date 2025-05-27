import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entry } from '@/types/entry';
import { getAllEntries } from './getAllEntries';

const ENTRIES_KEY = 'JOURNAL_ENTRIES';

//The EditEntry function will overwrite the entry in the local storage key JOURNAL_ENTRIES.
export const updateEntry = async (updatedEntry: Entry): Promise<void> => {
  try {
        const existingEntries = await getAllEntries();
        const updatedEntries = existingEntries.map(entry => {
            if (entry.id == updatedEntry.id) {
                return updatedEntry;
            } else {
                return entry;
            }
        });
        await AsyncStorage.setItem(ENTRIES_KEY, JSON.stringify(updatedEntries));
    } catch (error) {
        console.error(`We could not update that entry ${updatedEntry}`, error);
    }
};
