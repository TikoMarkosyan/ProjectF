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
import { signUp } from "../redux/Actions/authActions";
function SingUp(props) {
    console.log("tesf");
    console.log(props);
    const onReg = () => {
        console.log("dd")
        const obj = {
            email: "tiko.markosyan61@gmail.com",
            password: "Garnik07"
        }
        props.signUp(obj);
    }
    return (
        <>
            <TextInput placeholder="email" />
            <TextInput placeholder="password" />
            <TextInput placeholder="repeat password" />
            <Button title="Reg" onPress={() => onReg()} />
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
        signUp: (creds) => dispatch(signUp(creds)),
        
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingUp);