import * as React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Entypo } from "@expo/vector-icons";

const BookList = () => {
    const [books, setBooks] = React.useState([]);

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "Books"));
        let bookArray = [];
        querySnapshot.forEach((doc) => {
            bookArray.push({ id: doc.id, data: doc.data() });
            console.log('bookArray : ', bookArray);
        });
        setBooks(bookArray);
        // console.log('books : ', books);
    }

    const displayBooks = (book, key) => {
        return (
            <View key={key} style={styles.bookContainer}>
                <View style={styles.bookInfo}>
                    <Text style={styles.bookText}>ID : {book.id}</Text>
                    <Text style={styles.bookText}>Title : {book.data.bookName}</Text>
                    <Text style={styles.bookText}>Author : {book.data.author}</Text>
                    <Text style={styles.bookText}>Year : {book.data.yearOfPublication}</Text>
                    <Text style={styles.bookText}>{book.data.saga}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Entypo name="cog" size={28} color={'black'} onPress={() => {console.log('should edit')}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Entypo name="circle-with-cross" size={28} color={'black'} onPress={() => {console.log('should delete')}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    React.useEffect(() => {
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>BookList</Text>
            <ScrollView style={styles.scrollContainer}>
                {books.length > 0 ?
                    books.map((book, key) => {
                        return displayBooks(book, key)
                    })
                    :
                    <Text style={styles.noBooksText}>No books registered</Text>
                }
            </ScrollView>
        </View>
    );
}

export default BookList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    heading: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
    },
    bookContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 3,
    },
    bookInfo: {
        flex: 1,
    },
    bookText: {
        fontSize: 16,
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        marginLeft: 10,
    },
    noBooksText: {
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
    },
});