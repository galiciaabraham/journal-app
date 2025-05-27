import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entry } from '@/types/entry';

const ENTRIES_KEY = 'JOURNAL_ENTRIES';

//This function will get all the entries available from the local storage.
export const getAllEntries = async (): Promise<Entry[]> => {
    try {
        const json = await AsyncStorage.getItem(ENTRIES_KEY);
        return json ? JSON.parse(json) : [];
    } catch (error) {
        console.error('Error fetching entries:', error);
        return [];
    }
};
