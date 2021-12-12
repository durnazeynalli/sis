import fbApp from '../utils/FireBaseInit';
import { selectUser, selectProfilePiC, selectAuthUserID } from './auth';
import { COLORS } from '../styles/colors';
import { showMessage } from 'react-native-flash-message';

//Action Types
const SET_FEEDS = 'SET_FEEDS';
const SET_POSTS = 'SET_POSTS';
const SET_ACTIVE_POSTS_ID = 'SET_ACTIVE_POSTS_ID';
const SET_POST_LIKES = 'SET_POST_LIKES';

//Selectors
export const MODULE_NAME = 'feeds';
export const selectFeeds = (state) => state[MODULE_NAME].feeds;
export const selectPosts = (state) => state[MODULE_NAME].posts;
export const selectActivePosts = (state) => state[MODULE_NAME].activePostsID;
export const selectLikes = (state) => state[MODULE_NAME].likes;

//Reducer
const initialState = {
	feeds: [],
	posts: [],
	likes: {},
	activePostsID: '-MAWDvacjOM3q9QSesbc' //TODO not the best way fix this
};

export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_FEEDS:
			return {
				...state,
				feeds: payload
			};
		case SET_POSTS:
			return {
				...state,
				posts: payload
			};
		case SET_ACTIVE_POSTS_ID:
			return {
				...state,
				activePostsID: payload
			};
		case SET_POST_LIKES:
			return {
				...state,
				likes: {
					...state.likes,
					[payload.postID]: payload.likesObj
						? {
								...payload.likesObj
							}
						: {}
				}
			};
		default:
			return state;
	}
}
//ActionCreators

export const setFeeds = (payload) => ({
	type: SET_FEEDS,
	payload
});
export const setPosts = (payload) => ({
	type: SET_POSTS,
	payload
});
export const setActivePosts = (payload) => ({
	type: SET_ACTIVE_POSTS_ID,
	payload
});
export const setPostLikes = (payload) => ({
	type: SET_POST_LIKES,
	payload
});
//Middlewares

//a middleware for getting feeds(hedar of home screen)
export const getAndListenFeeds = () => (dispatch) => {
	try {
		const reference = fbApp.db.ref('feeds');
		reference.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const feedTitlesObj = snapshot.val();
					const feedTitlesArr = Object.keys(feedTitlesObj).map((key) => ({
						ID: key, //use uppercase for ids
						...feedTitlesObj[key]
					}));
					dispatch(setFeeds(feedTitlesArr));
				}
			},
			(err) => {
				console.log('getAndListenFeeds err', err);
				showMessage({
					message: `something went wront please try later again`,
					description: `${err.message}`,
					type: 'danger',
					icon: 'auto',
					style: { backgroundColor: COLORS.error },
					textStyle: { fontFamily: 'RelewayRegular' }
				});
			}
		);
		return () => reference.off();
	} catch (err) {
		console.log('getAndListenFeeds', err);
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
};
//a middleware for getting posts(posts in home screen users share)
export const getAndListenPosts = (feedID) => (dispatch) => {
	try {
		const reference = fbApp.db.ref(`posts/${feedID}`);
		reference.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const postsObj = snapshot.val();
					const postsArr = Object.keys(postsObj).map((key) => ({
						ID: key, //use upperase for ids
						...postsObj[key]
					}));
					dispatch(setPosts(postsArr));
				}
			},
			(err) => {
				console.log('getAndListeToPosts part 1 err', err);
				showMessage({
					message: `something went wront please try later again`,
					description: `${err.message}`,
					type: 'danger',
					icon: 'auto',
					style: { backgroundColor: COLORS.error },
					textStyle: { fontFamily: 'RelewayRegular' }
				});
			}
		);
		return () => reference.off();
	} catch (err) {
		console.log('getAndListeToPosts err', err);
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
};

// a middleware for shareing posts in home screen
export const shareNewPost = (feedID, text) => (dispatch, getState) => {
	try {
		const user = selectUser(getState());
		// const profilePic = selectProfilePiC(getState());
		const reference = fbApp.db.ref(`posts/${feedID}`);

		//const newPostID = reference.push().key;//use uppercase for IDs
		const newPost = {
			autherID: user.userID, //use uppercase for IDS
			time: fbApp.root.database.ServerValue.TIMESTAMP,
			text,
			likes: {
				title: 'likes'
			}
		};
		reference.push().set(newPost, (err) => {
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

export const toggleLike = (postID) => (dispatch, getState) => {
	try {
		const state = getState();
		const userID = selectAuthUserID(state);
		const feedID = selectActivePosts(state);
		let ref = fbApp.db.ref(`posts/${feedID}/${postID}/likes/${userID}`);
		ref.once('value', (snapshot) => {
			if (snapshot.exists()) {
				if (snapshot.val()) {
					ref.remove();
				}
			} else {
				fbApp.db.ref(`posts/${feedID}/${postID}/likes`).update({
					[userID]: true
				});
			}
		});
		return () => ref.off();
	} catch (err) {
		console.log('toggleLike err', err);
		showMessage({
			message: `something went wront please try later again`,
			description: `${err.message}`,
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
		//todo handle err
	}
};

//
export const getAndListenLikes = (postID) => (dispatch, getState) => {
	try {
		const state = getState();
		const feedID = selectActivePosts(state);
		const reference = fbApp.db.ref(`posts/${feedID}/${postID}/likes`);
		reference.on('value', (snapshot) => {
			let likesObj;
			if (snapshot.exists()) {
				likesObj = snapshot.val();
			} else {
				likesObj = {};
			}
			dispatch(setPostLikes({ likesObj, postID }));
		});
		return () => reference.off();
	} catch (err) {
		console.log('getAndListenLikes', err);
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
