import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Text>Homescreen!</Text>
                <Button title='Log out' onPress={() => { console.log('should log out') }} />
                <Button title='Navigate to Firestore page' onPress={() => { navigation.navigate('Firestore') }} />
                <Button title='Navigate to BookForm page' onPress={() => { navigation.navigate('BookForm') }} />
                <Button title='Navigate to BookList page' onPress={() => { navigation.navigate('BookList') }} />
                <Button title='Navigate to ScanScreen page' onPress={() => { navigation.navigate('ScanScreen') }} />
            </View>
        </>
    );
}
 
 export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});