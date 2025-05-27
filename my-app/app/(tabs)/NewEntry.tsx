import React from 'react';
import { useState } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';
import DoneButton from '@/components/DoneButton';
import CancelButton from '@/components/CancelButton';
import BackButton from '@/components/BackButton';

//The NewEntryForm component will allow the user to add a title and content to the journal entry.
const NewEntryForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const newEntry = {
      id: uuid.v4(),
      title: title,
      content: content,
      date: new Date().toISOString(),
    };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <DoneButton newEntry={newEntry}/>
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
        <CancelButton/>
      </View>
    </View>
  );
};

export default NewEntryForm;

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
    borderColor: '#272727',
    backgroundColor: '#BFD0E0',
    marginBottom: 12,
    padding: 8,
  },
  contentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#272727',
    backgroundColor: '#BFD0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 200,
  },
});
