import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllEntries } from './getAllEntries';


const ENTRIES_KEY = 'JOURNAL_ENTRIES';

export async function deleteEntry(entryId: string): Promise<void> {
    try {
        const existingEntries = await getAllEntries();
        if (!existingEntries) return;

        const updatedEntries = existingEntries.filter(entry => entry.id !== entryId);

        await AsyncStorage.setItem(ENTRIES_KEY, JSON.stringify(updatedEntries));
    } catch (error) {
        console.error('Failed to delete entry:', error);
    }
}