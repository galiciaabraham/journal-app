import { getAllEntries } from '@/utilities/getAllEntries';

//The getEntryById function will get all the entries from the local storage and then find the one that shares the id that was tapped on. 
export const getEntryById = async (id: string): Promise<void> => {
    const entries = await getAllEntries();
    entries.forEach(entry => {
        if (entry.id == id){
            return entry;
        } else {
            return null;
        }
    });
};
