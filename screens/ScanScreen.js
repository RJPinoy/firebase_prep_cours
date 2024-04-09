import { Camera } from 'expo-camera';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CameraView } from 'expo-camera/next';
import { Linking } from 'react-native';

export default function ScanScreen() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = React.useState(false);
  const [showAppOptions, setShowAppOptions] = React.useState(false);
  const [type, setType] = React.useState('');
  const [data, setData] = React.useState('');

  const handleUrl = (data) => {
    const urlPattern = new RegExp(
      '((https?):\\/\\/(www\\.)?|(www\\.)?)([a-zA-Z0-9-]+(\\.[a-zA-Z]{2,})+)(\\/[-a-zA-Z0-9@:%._\\+~#?&//=]*)?',
      'i'
    );
  
    if (urlPattern.test(data)) {
      setScanned(false)
      Linking.openURL(data);
      setType('');
      setData('');
    } 
  };  

  React.useEffect(() => {
    console.log('type :', type, ', data :', data);
    handleUrl(data);
  }, [type, data])

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={ requestPermission } title="grant permission" />
      </View>
    );
  }

  // console.log(permission);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert('Scanned succesfully!');
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    setType(type);
    setData(data);
  };

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={ StyleSheet.absoluteFillObject }
      />
      {/* {scanned && (
        <TouchableOpacity title={"Tap to Scan Again"} onPress={() => setScanned(false)} >
          <Text>Tap to Scan Again</Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});