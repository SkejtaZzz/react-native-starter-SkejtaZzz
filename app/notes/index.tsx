import { router } from 'expo-router';
import { useContext } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { NotesContext } from '../context/NotesContext';

export default function NotesListScreen() {
  const { notes } = useContext(NotesContext);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {notes.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Brak notatek. Dodaj pierwszą!</Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push({ pathname: '/notes/detail', params: { id: item.id } })}
              style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row', alignItems: 'center' }}
            >
              {item.photo && <Image source={{ uri: item.photo }} style={{ width: 50, height: 50, marginRight: 10, borderRadius: 5 }} />}
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                <Text numberOfLines={1}>{item.body}</Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}
