import fbApp from '../utils/FireBaseInit';
import { showMessage } from 'react-native-flash-message';
import { selectAuthUserID, selectUser } from './auth';
import { COLORS } from '../styles/colors';


//Action Types
const SET_SELECTED_POST = 'SET_SELECTED_POST';
const SET_COMMENTS_LIST = 'SET_COMMENTS_LIST';

//Selectors
export const MODULE_NAME = 'comments';
export const selectSelectedPost = (state) => state[MODULE_NAME].selectedPost;
export const selectCommentsList =(state)=>state[MODULE_NAME].commentsList;

const initialState = {
	selectedPost: [],
	commentsList: {}
};

//Reducer
export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_SELECTED_POST:
			return {
				...state,
				selectedPost: payload
			};
		case SET_COMMENTS_LIST: {
			return {
				...state,
				commentsList: {
					...state.commentsList,
					[payload.postID]: payload.commentsListObj
						? {
								...payload.commentsListObj
							}
						: {}
				}
			};
		}
		default:
			return state;
	}
}

//ActionCreators
export const setSelectedPost = (payload) => ({
	type: SET_SELECTED_POST,
	payload
});
export const setCommentsList = (payload) => ({
	type: SET_COMMENTS_LIST,
	payload
});

//Middlewares

export const getAndListedCommentsList = (postID) => (dispatch) => {
	try {
		const reference = fbApp.db.ref(`comments/${postID}`);
		reference.on('value', (snapshot) => {
			let commentsListObj;
			if (snapshot.exists()) {
				commentsListObj = snapshot.val();
			} else {
				commentsListObj = {};
			}
			dispatch(setCommentsList({ commentsListObj, postID }));
		});
		return () => reference.off();
	} catch (err) {
		console.log('getAndListedCommentsList', err);
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

export const addNewComment = (selectedPostID, text) => (dispatch, getState) => {
	try {
		const user = selectUser(getState());
		const reference = fbApp.db.ref(`comments/${selectedPostID}`);

		const newComment = {
			autherID: user.userID, //use uppercase for IDS
			time: fbApp.root.database.ServerValue.TIMESTAMP,
			text
		};
		reference.push().set(newComment, (err) => {
			if (err) {
				console.log('shareNewPost err', err);
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
		console.log('sharePost err', err);
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
