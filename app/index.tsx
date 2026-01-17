import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text>Witaj w FieldNotes!</Text>
      <Pressable
        onPress={() => router.push('/notes/camera')}
        style={{ padding: 10, backgroundColor: '#007AFF', borderRadius: 5 }}
      >
        <Text style={{ color: 'white' }}>Dodaj nową notatkę</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push('/notes/')}
        style={{ padding: 10, backgroundColor: '#34C759', borderRadius: 5 }}
      >
        <Text style={{ color: 'white' }}>Moje notatki</Text>
      </Pressable>
    </View>
  );
}
