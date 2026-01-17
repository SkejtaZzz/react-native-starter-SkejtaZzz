import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<'front' | 'back'>('back');

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
    <CameraView
      style={{ flex: 1 }}
      facing={facing}
    >
      <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end' }}>
        <Button
          onPress={() => setFacing(facing === 'back' ? 'front' : 'back')}
          title="Przełącz kamerę"
        />
      </View>
    </CameraView>
  );
}
