import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import * as React from "react";
import { FIREBASE_AUTH } from '../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        console.log('email : ', email, 'password : ', password)
        setIsLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false);
        }
    }

    const SignUp = async () => {
        console.log('Should create an account')
        setIsLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        setIsLoading(false);
    }

    return (
        <>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior='padding'>
                    <Text style={styles.title}>Login</Text>
                    <TextInput style={styles.input} placeholder='Email' value={ email } autoCapitalize='none' onChangeText={ setEmail }/>
                    <TextInput style={styles.input} placeholder='Password' value={ password } autoCapitalize='none' onChangeText={ setPassword } secureTextEntry={ true } />
                    {
                        isLoading ? 
                        <ActivityIndicator size='large' color={ 'black' }/>
                        :
                        <View style={styles.buttonContainer}>
                            <Button title='LOG IN' onPress={ signIn }/>
                            <Button title='SIGN UP' onPress={ SignUp }/>
                        </View>
                    }
                </KeyboardAvoidingView>
            </View>
        </>
    );
}
 
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});