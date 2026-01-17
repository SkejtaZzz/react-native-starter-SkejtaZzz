import { useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { NotesContext } from '../context/NotesContext';


export default function NoteDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { notes: localNotes } = useContext(NotesContext);

  // Szukaj notatki w lokalnych notatkach
  const note = localNotes.find((n) => n.id === id);

  if (!note) return <Text>Notatka nie znaleziona</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{note.title}</Text>
      {note.photo && <Image source={{ uri: note.photo }} style={{ width: '100%', height: 200, marginBottom: 10, borderRadius: 5 }} />}
      <Text>{note.body}</Text>
    </View>
  );
}
