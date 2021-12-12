import fbApp from '../utils/FireBaseInit';
import { selectAuthGroup, selectAuthUserID } from './auth';
import { COLORS } from '../styles/colors';
import { showMessage } from 'react-native-flash-message';

//Action Types
const SET_GROUP = 'SET_GROUP';
const SET_MATERIALS = 'SET_MATERIALS';
const SET_HOMEWOKS = 'SET_HOMEWOKS';
const SET_GRADES = 'SET_GRADES';
const SET_AGENDA = 'SET_AGENDA';
const SET_SCHEDULE = 'SET_SCHEDULE';

//Selectors
export const MODULE_NAME = 'groups';
export const selectGroup = (state) => state[MODULE_NAME].group;
export const selectMaterials = (state) => state[MODULE_NAME].materials;
export const selectHomeworks = (state) => state[MODULE_NAME].homeworks;
export const selectGrades = (state) => state[MODULE_NAME].grades;
export const selectAgenda = (state) => state[MODULE_NAME].agenda;
export const selectSchedule = (state) => state[MODULE_NAME].schedule;

//Reducer
const initialState = {
	group: [], //information abut users group ex: id, teacher, abcence allowence, title
	materials: [], //list of materiasl appropiate to users group
	homeworks: [], //list of materiasl accined to users group
	grades: [], //grade of each homework
	agenda: [], //callendar data
	schedule: [] //scedule field data for class creeen
};

export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_GROUP:
			return {
				...state,
				group: payload
			};
		case SET_MATERIALS:
			return {
				...state,
				materials: payload
			};
		case SET_HOMEWOKS:
			return {
				...state,
				homeworks: payload
			};
		case SET_GRADES:
			return {
				...state,
				grades: payload
			};
		case SET_AGENDA:
			return {
				...state,
				agenda: payload
			};
		case SET_SCHEDULE:
			return {
				...state,
				schedule: payload
			};
		default:
			return state;
	}
}

//ActionCreators

export const setGroup = (payload) => ({
	type: SET_GROUP,
	payload
});
export const setMaterials = (payload) => ({
	type: SET_MATERIALS,
	payload
});
export const setHomeworks = (payload) => ({
	type: SET_HOMEWOKS,
	payload
});
export const setGrades = (payload) => ({
	type: SET_GRADES,
	payload
});
export const setAgenda = (payload) => ({
	type: SET_AGENDA,
	payload
});
export const setSchedule = (payload) => ({
	type: SET_SCHEDULE,
	payload
});

//Middlewares

//a middleware for getting groups on material screen
export const getAndListenGroup = () => (dispatch, getState) => {
	try {
		const groupID = selectAuthGroup(getState());
		const reference = fbApp.db.ref(`groups/${groupID}`);
		reference.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const groupTitlesObj = snapshot.val();
					dispatch(setGroup(groupTitlesObj));
				}
			},
			(err) => {
				console.log('getAndListenGroups err', err);
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
		console.log('getAndListenGroups', err);
		showMessage({
			message: { err },
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
		//TODO handle errors
	}
};

//a middleware for getting titles of materials in material screen
export const getAndListenMaterials = () => (dispatch, getState) => {
	try {
		const groupID = selectAuthGroup(getState());
		const reference = fbApp.db.ref(`materials/${groupID}`);
		reference.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const materialsObj = snapshot.val();
					const materialsArr = Object.keys(materialsObj).map((key) => ({
						ID: key, //use upperase for ids
						...materialsObj[key]
					}));
					dispatch(setMaterials(materialsArr));
				}
			},
			(err) => {
				console.log('getAndListToMaterials part 1 err', err);
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
		console.log('getAndListToMaterials err', err);
		showMessage({
			message: { err },
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
		//TODO handle errors
	}
};

//a middlewhere to render homeworks
export const getAndListenHomeWorks = () => (dispatch, getState) => {
	try {
		const groupID = selectAuthGroup(getState());
		const reference = fbApp.db.ref(`homeworks/${groupID}`);
		reference.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const homeworksObj = snapshot.val();
					const homeworksArr = Object.keys(homeworksObj).map((key) => ({
						ID: key, //use upperase for ids
						...homeworksObj[key]
					}));
					dispatch(setHomeworks(homeworksArr));
				}
			},
			(err) => {
				console.log('getAndListenHomeWorks part 1 err', err);
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
		console.log('getAndListenHomeWorks err', err);
		showMessage({
			message: { err },
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
		//todo handle error
	}
};

export const getAndListenGrades = () => (dispatch, getState) => {
	try {
		const userID = selectAuthUserID(getState());
		const reference = fbApp.db.ref(`grades/${userID}`);
		reference.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const gradesObj = snapshot.val();
					const gradesArr = Object.keys(gradesObj).map((key) => ({
						ID: key, //use upperase for ids
						...gradesObj[key]
					}));
					dispatch(setGrades(gradesArr));
				}
			},
			(err) => {
				console.log('getAndListenGrades part 1 err', err);
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
		console.log('getAndListenGrades err', err);
		showMessage({
			message: { err },
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
		//todo handle error
	}
};

export const getAndListenAgenda = () => (dispatch, getState) => {
	try {
		const groupID = selectAuthGroup(getState());
		let ref = fbApp.db.ref(`agenda/${groupID}`);
		ref.on('value', (snapshot) => {
			if (snapshot.exists()) {
				const datesObj = snapshot.val();
				const transformedDates = Object.fromEntries(
					Object.entries(datesObj).map(([ key, val ]) => [ key, [ val ] ])
				);
				dispatch(setAgenda(transformedDates));
			}
		});
		return () => ref.off();
	} catch (err) {
		console.log('getAndListenAgenda', err);
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

export const getAndListenSchedule = () => (dispatch, getState) => {
	try {
		const groupID = selectAuthGroup(getState());
		let reference= fbApp.db.ref(`schedule/${groupID}`);
		reference.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const scheduleObj = snapshot.val();
					const scheduleArr = Object.keys(scheduleObj).map((key) => ({
						ID: key, //use upperase for ids
						...scheduleObj[key]
					}));
					dispatch(setSchedule(scheduleArr));
				}
			},
			(err) => {
				console.log('getAndListenSchedule part 1 err', err);
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
		console.log('getAndListenSchedule err', err),
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
