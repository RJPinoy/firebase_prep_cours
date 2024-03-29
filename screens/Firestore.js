import * as React from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Text, Button, View } from "react-native";
import { db } from "../firebaseConfig";

const Firestore = () => {
    const loadData = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log('doc : ', doc);
        });
        console.log('querySnapshot : ', querySnapshot);
    }

    return (
        <>
            <View>
                <Text>Firestore</Text>
                <Button title='load data : ada' onPress={() => loadData()} />
                <Button title='get data' onPress={() => getData()} />
            </View>
        </>
    );
}
 
 export default Firestore;