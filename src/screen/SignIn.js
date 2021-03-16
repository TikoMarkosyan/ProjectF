import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    TextInput,
    Text,
    useColorScheme,
    View,
    Button,
} from 'react-native';
import { connect } from "react-redux";
import { signIn } from "../redux/Actions/authActions";

function SingIn(props) {
    console.log("tesf");
    console.log(props);
    const onLog = () => {
        console.log("dd")
        const obj = {
            email: "tiko.markosyan61@gmail.com",
            password: "Garnik07"
        }
        props.signIn(obj);
    }
    const onRegistrathion = () => {
        props.navigation.navigate('SingUp')
	}
    return (
        <>
            <TextInput placeholder="email" />
            <TextInput placeholder="password" />
            <Button title="Reg" onPress={() => onLog()} />
            <Button title="Reg" onPress={() => onRegistrathion()} />
        </>

    )
}

const mapStateToProps = (state) => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingIn);