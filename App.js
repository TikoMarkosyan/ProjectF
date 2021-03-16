import React from 'react';
import { Provider } from 'react-redux';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import store from './src/redux/Store/index';
import firebase from "./src/config/firebaseConfig";
import { createFirestoreInstance } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import SingUp from "./src/screen/SingUp";
import SignIn from "./src/screen/SignIn";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance,
    Stack
};

function App(props) {

    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="SignIn" component={SignIn} />
                        <Stack.Screen name="SingUp" component={SingUp} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
};

export default App;
/*
 *
 *  <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <Text>tiko</Text>
            </ReactReduxFirebaseProvider>
        </Provider>
        */