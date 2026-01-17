import { Stack } from 'expo-router';
import { NotesProvider } from './context/NotesContext';


export default function RootLayout() {
  return (
    <NotesProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Start' }} />
        <Stack.Screen name="notes/index" options={{ title: 'Moje notatki' }} />
        <Stack.Screen name="notes/camera" options={{ title: 'Dodaj notatkę' }} />
        <Stack.Screen name="notes/detail" options={{ title: 'Szczegóły' }} />
      </Stack>
    </NotesProvider>
  );
}
