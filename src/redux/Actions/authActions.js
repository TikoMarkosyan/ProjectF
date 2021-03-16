import * as types from './types';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
export const signIn = creds => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then((res) => {
                console.log(res);
               // console.log(firebase.auth().currentUser);
                dispatch({ type: types.SING_IN },res);
            })
            .catch(err => {
                dispatch({ type: types.SIGN_IN_ERR}, err);
            });
    };
};


export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({
                    type: types.SIGN_OUT
                });
            });
    };
};

export const signUp = creds => {
    console.log("dfg")
    return  (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        console.log(firebase);
        firebase
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
            .then(() => {
                const user = firebase.auth().currentUser;
                console.log(user);
                 user.sendEmailVerification();
                 firestore
                    .collection('users')
                    .doc(res.user.uid)
                    .set({
                        firstName: data.firstName,
                        lastName: data.lastName,
                    });
                dispatch({ type: types.SIGN_UP });
            })
            .catch(err => {
                console.log("fuck")
                dispatch({ type: types.SIGN_UP_ERR }, err);
            });
    };
};
