import * as React from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const BookForm = () => {
    const [bookName, setBookName] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [year, setYear] = React.useState('');
    const [saga, setSaga] = React.useState('');

    const sendBookToDb = async () => {
        try {
            const docRef = await addDoc(collection(db, 'Books'), {
                bookName: bookName,
                author: author,
                yearOfPublication: year,
                saga: saga ? saga : "stand alone book"
            });

            setBookName('');
            setAuthor('');
            setYear('');
            setSaga('');

            console.log("Document written with ID: ", docRef.id);
            Alert.alert("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}>BookForm</Text>
                <TextInput style={styles.input} placeholder="Book Name" value={ bookName } onChangeText={ setBookName } />
                <TextInput style={styles.input} placeholder="Author Name" value={ author } onChangeText={ setAuthor } />
                <TextInput style={styles.input} placeholder="Year of publication" value={ year } onChangeText={ setYear } />
                <TextInput style={styles.input} placeholder="Saga" value={ saga } onChangeText={ setSaga } />
                <Button title="Add book" onPress={() => { sendBookToDb() }}/>
            </View>
        </>
    );
}
 
export default BookForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});