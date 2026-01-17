import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useContext, useRef, useState } from 'react';
import { Alert, Button, Image, TextInput, View } from 'react-native';
import { NotesContext } from '../context/NotesContext';
import { saveNote } from '../services/api';


export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<'front' | 'back'>('back');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);
  const { addNote } = useContext(NotesContext);

  const takePicture = async () => {
    if (cameraRef.current) {
      const picture = await cameraRef.current.takePictureAsync();
      setPhoto(picture.uri);
    }
  };

  const handleSaveNote = async () => {
    try {
      const result = await saveNote(title, body);
      const newNote = {
        id: result.id.toString(),
        title,
        body,
        photo,
      };
      addNote(newNote); // Dodaj notatkę do kontekstu
      Alert.alert('Sukces!', `Notatka zapisana z ID: ${result.id}`);
      router.back();
    } catch (error) {
      Alert.alert('Błąd', 'Nie udało się zapisać notatki.');
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Potrzebujemy dostępu do kamery!</Text>
        <Button onPress={requestPermission} title="Zezwól na dostęp do kamery" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} facing={facing} ref={cameraRef} />
      <View style={{ padding: 20 }}>
        <Button title="Zrób zdjęcie" onPress={takePicture} />
        {photo && <Image source={{ uri: photo }} style={{ width: 100, height: 100, marginVertical: 10 }} />}
        <TextInput
          placeholder="Tytuł notatki"
          value={title}
          onChangeText={setTitle}
          style={{ backgroundColor: 'white', padding: 10, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Treść notatki"
          value={body}
          onChangeText={setBody}
          style={{ backgroundColor: 'white', padding: 10, marginBottom: 10 }}
        />
        <Button title="Zapisz notatkę" onPress={handleSaveNote} />
      </View>
    </View>
  );
}
