import fbApp from '../utils/FireBaseInit';
import { generatePriviteChatID } from '../utils/sortID';
import { showMessage } from 'react-native-flash-message';
import { selectAuthUserID } from './auth';
import {COLORS} from '../styles/colors'
// import { applyMiddleware } from 'redux';

//Action Types
const SET_CHAT_ID = 'SET_CHAT_ID';
const SET_CHATS_LIST = 'SET_CHATS_LIST';
const SET_CHAT_MESSAGES = 'SET_CHAT_MESSAGES';
const SET_CHATS_USERS = 'SET_CHATS_USERS';
const CLEAR_CHAT_MESSAGES = 'CLEAR_CHAT_MESSAGES';
const SET_STARTED_CHATS = 'SET_STARTED_CHATS';
const SET_RECIEVER_INFO = "SET_RECIEVER_INFO";
//Selectors

export const MODULE_NAME = 'chats';
export const selectChatsList = (state) => state[MODULE_NAME].chats;
export const selectChatMessages = (state) => state[MODULE_NAME].chatMessages;
export const selectChatsUsers = (state) => state[MODULE_NAME].users;
export const selectChatID = (state) => state[MODULE_NAME].chatID;
export const selectstartedChatsLists = (state) => state[MODULE_NAME].sartedChatsList;
export const selectRecieverUserName=(state)=> state[MODULE_NAME].recieverUserName;
export const selectRecieverUserImage=(state)=> state[MODULE_NAME].reciverUserImage;

//Reducer

const initialState = {
	chatID: '',
	recieverUserName:'',
	reciverUserImage:'',
	chats: [],
	sartedChatsList: [],
	chatMessages: [],
	users: []
};
export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_CHATS_LIST:
			return {
				...state,
				chats: payload
			};
		case SET_CHAT_MESSAGES:
			return {
				...state,
				chatMessages: payload
			};
		case SET_STARTED_CHATS:
			return {
				...state,
				sartedChatsList: payload
			};
		case SET_CHAT_ID:
			return {
				...state,
				chatID: payload
			};
		case SET_CHATS_USERS:
			return {
				...state,
				users: payload
			};	
		case SET_RECIEVER_INFO:
		return{
			...state,
			recieverUserName:payload.userName,
			reciverUserImage:payload.image
		}
		case CLEAR_CHAT_MESSAGES:
			return {
				...state,
				chatMessages: []
			};
		default:
			return state;
	}
}

//ActionCreators

export const setChatsList = (payload) => ({
	type: SET_CHATS_LIST,
	payload
});
export const setChatMessages = (payload) => ({
	type: SET_CHAT_MESSAGES,
	payload
});
export const setChatsUsers = (payload) => ({
	type: SET_CHATS_USERS,
	payload
});
export const setChatID = (payload) => ({
	type: SET_CHAT_ID,
	payload
});
export const setRecieverInfo = (payload) => ({
	type: SET_RECIEVER_INFO,
	payload
});
export const setStartedChats = (payload) => ({
	type: SET_STARTED_CHATS,
	payload
});
export const clearChatMessages = () => ({
	type: CLEAR_CHAT_MESSAGES
});

//Middlewares

export const getAndListenChatsList = () => (dispatch) => {
	try {
		const ref = fbApp.db.ref('chats');
		ref.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const chatsObj = snapshot.val();
					const chatsArr = Object.keys(chatsObj).map((key) => ({
						id: key,
						...chatsObj[key]
					}));
					dispatch(setChatsList(chatsArr));
				}
			},
			(err) => {
				console.log('getAndListenChatsList err', err);
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
		return () => ref.off();
	} catch (err) {
		console.log('getAndListenChatsList', error);
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

// a middlewhere to ged started converstions between two pople
export const getAndListenChatMessages = (chatID) => (dispatch) => {
	try {
		const ref = fbApp.db.ref(`chatMessages/${chatID}`);
		ref.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const messagesObj = snapshot.val();
					const messagesArr = Object.keys(messagesObj).map((key) => ({
						id: key,
						...messagesObj[key]
					}));
					dispatch(setChatMessages(messagesArr));
				}
			},
			(err) => {
				Alert.alert('Something wrong', err.message);
				showMessage({
					message: `something went wront please try later again`,
					description: `${err.message}`,
					type: 'danger',
					icon: 'auto',
					style: { backgroundColor: COLORS.error },
					textStyle: { fontFamily: 'RelewayRegular' }
				});
				//todo handle error
			}
		);
		return () => ref.off();
	} catch (err) {
		console.log(`getAndListenChatMessages err`, err);
	}
};

//a Middleware to get started chats
export const getAndListenStartedChatsList = () => (dispatch, getState) => {
	try {
		const userID = selectAuthUserID(getState());
		const ref = fbApp.db.ref(`sartedChatsList/${userID}`);
		ref.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const chatsObj = snapshot.val();
					const chatsArr = Object.keys(chatsObj).map((key) => ({
						id: key,
						...chatsObj[key]
					})).sort((a,b)=>b.lastMessage?.time-a.lastMessage?.time);
					dispatch(setStartedChats(chatsArr));
				}
			},
			(err) => {
				console.log('getAndListenStartedChats err', err);
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
		return () => ref.off();
	} catch (err) {
		console.log('getAndListenChatsList', err);
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

// a middleware to get users
export const getAndListenChatUsers = () => (dispatch) => {
	try {
		const reference = fbApp.db.ref('users');
		reference.on('value', (snapshot) => {
			if (snapshot.exists()) {
				const usersObj = snapshot.val();
				dispatch(setChatsUsers(usersObj));
			}
		});
		return () => reference.off();
	} catch (err) {
		console.log('getAndListenChatUsers err', err);
		showMessage({
			message: `something went wront please try later again`,
			description: `${err.message}`,
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
		//Todo handle error
	}
};

//a mddle where to start new chat
export const initPriviteChats = (recieverID) => async (dispatch, getState) => {
	try {
		const state = getState();
		const users = selectChatsUsers(state);
		const userID = selectAuthUserID(state);
		const chatID = generatePriviteChatID(userID, recieverID);
		const reference = fbApp.db.ref(`chats/${chatID}`);

		const snap = await reference.once('value');
		if (!snap.exists()) {
			const startMessageKey = await fbApp.db.ref(`chatMessages/${chatID}`).push().key;
			const message = {
				auther: 'system',
				text: 'Today',
				time: fbApp.root.database.ServerValue.TIMESTAMP
			};
			const updates = {
				[`chats/${chatID}`]: { tite: 'chat' },
				[`chatMessages/${chatID}/${startMessageKey}`]: message,
				[`sartedChatsList/${userID}/${chatID}`]: {
					title: users[recieverID].name,
					image: users[recieverID].profilePiC,
					lastMessage: message
				},
				[`sartedChatsList/${recieverID}/${chatID}`]: {
					title: users[userID].name,
					image: users[userID].profilePiC,
					lastMessage: message
				}
			};
			await fbApp.db.ref().update(updates);
		}
		dispatch(setChatID(chatID));
	} catch (err) {
		console.log('initPriviteChats err', err);
		showMessage({
			message: `something went wront please try later again`,
			description: `${err.message}`,
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
		//Todo handle error
	}
};

export const sendMessage = (chatID, text) => (dispatch, getState) => {
	try {
	const userID = selectAuthUserID(getState())
		const ref = fbApp.db.ref(`chatMessages/${chatID}`);
		const message = {
			auther: userID,
			time: fbApp.root.database.ServerValue.TIMESTAMP,
			text
		};
		ref.push().set(message, (err) => {
			if(err){
				console.log('send message err', err);
				showMessage({
					message: `something went wront please try later again`,
					description: `${err.message}`,
					type: 'danger',
					icon: 'auto',
					style: { backgroundColor: COLORS.error },
					textStyle: { fontFamily: 'RelewayRegular' }
				});
			//todo handle errr
			}	
		});
		const users=chatID.split("_")
		const updates ={
			[`sartedChatsList/${users[0]}/${chatID}/lastMessage`]:message,
			[`sartedChatsList/${users[1]}/${chatID}/lastMessage`]:message,
		}
		fbApp.db.ref().update(updates)
	} catch (err) {
		console.log('sendMessage err', err);
		showMessage({
			message: `something went wront please try later again`,
			description: `${err.message}`,
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
		//todo handle errr
	}
};
