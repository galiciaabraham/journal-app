import React from 'react';
import { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import EditDoneButton from '@/components/EditDoneButton';
import CancelButton from '@/components/CancelButton';
import BackButton from '@/components/BackButton';
import { useRoute } from '@react-navigation/native';
import { getAllEntries } from '@/utilities/getAllEntries';
import type { Entry } from '@/types/entry';

//The NewEntryForm component will allow the user to add a title and content to the journal entry.
const EditEntryForm = () => {
    const route = useRoute();
    const { entryId } = route.params as { entryId : string};
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');


    useEffect(() => {

        getAllEntries().then(entries => {
        const entry = entries.find((e: Entry) => e.id === entryId);
        if (entry) {
            setTitle(entry.title);
            setContent(entry.content);
            setDate(entry.date);
        }
        });
  }, [entryId]);

    const editedEntry: Entry = {
        id: entryId,
        title,
        content,
        date: new Date().toISOString(),
        };

    return (
        <View style={styles.container}>

        <View style={styles.header}>
            <EditDoneButton editedEntry={editedEntry}/>
            <BackButton/>
        </View>

        <TextInput
            placeholder="Entry title..."
            placeholderTextColor={'#272727'}
            value={title}
            onChangeText={setTitle}
            style={styles.titleInput}
        />

        <TextInput
            placeholder="Write your thoughts here..."
            placeholderTextColor={'#272727'}
            value={content}
            onChangeText={setContent}
            style={styles.contentInput}
            multiline
            textAlignVertical="top"
        />
        <View style={styles.footer}>
            <CancelButton entryId={entryId}/>
        </View>
        </View>
    );
    };

export default EditEntryForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#90D7FF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    titleInput: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor:'#BFD0E0',
        marginBottom: 12,
        padding: 8,
    },
    contentInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor:'#BFD0E0',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        minHeight: 200,
    },
    });
