import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Homescreen!</Text>
                <Button title='Log out' onPress={() => { console.log('should log out') }} />
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