import * as types from '../Actions/types';


const authReducer = (state = {}, action) => {
	console.log(action.type)
	switch (action.type) {
		case types.SIGN_IN:
			console.log("Welcome back..");
			console.log(action.playoud);
			return state;
		case types.SING_IN_ERR:
			console.log("Sign in error...");
			return state;
		case types.SIGN_OUT:
			console.log("You signed out..");
			return state;
		case types.SIGN_UP:
			console.log("tiko welcome")
			toast("Welcome..");
			return state;
		case types.SIGN_UP_ERR:
			console.log("Sign up error...");
			return state;
		default:
			return state;
	}
}

export default authReducer;