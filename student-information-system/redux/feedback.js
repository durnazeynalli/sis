import fbApp from '../utils/FireBaseInit';
import { selectUser } from './auth';
import { COLORS } from '../styles/colors';
import { showMessage } from 'react-native-flash-message';
//Action Types
const SET_FEEDBACK = 'SET_FEEDBACK';

//Selectors
export const MODULE_NAME = 'feedback';
export const selectFeedback = (state) => state[MODULE_NAME].feedback;

//Reducer
const initialState = {
	feedback: []
};

export function reducer(state = initialState, { type, payload }) {
	if (type === SET_FEEDBACK) {
		return {
			...state,
			feedback: payload
		};
	} else {
		return state;
	}
}

//ActionCreators

export const setFeedback = (payload) => ({
	type: SET_FEEDBACK,
	payload
});

//Middleware

//a middleware for getting feedback on feedback screen
export const submitFeedback = (text) => (dispatch, getState) => {
	try {
		const user = selectUser(getState());
		const reference = fbApp.db.ref(`feedback`);
		//const newPostID = reference.push().key;//use uppercase for IDs
		const feedback = {
			author: user.name,
			userName: user.userName,
			authorID: user.userID, //use uppercase for IDS
			time: fbApp.root.database.ServerValue.TIMESTAMP,
			text
		};
		reference.push().set(feedback, (err) => {
			if (err) {
				console.log('submitFeedback err', err);
				showMessage({
					message: `something went wront please try later again`,
					description: `${err.message}`,
					type: 'danger',
					icon: 'auto',
					style: { backgroundColor: COLORS.error },
					textStyle: { fontFamily: 'RelewayRegular' }
				});
				//TODO handle errors
			}
		});
	} catch (err) {
		console.log('submitFeedback err', err);
		showMessage({
			message: `something went wront please try later again`,
			description: `${err.message}`,
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
	}
};
