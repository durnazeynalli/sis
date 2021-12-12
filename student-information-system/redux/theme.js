//Action Types
const TOGGLE_THEME = 'TOGGLE_THEME';

//Selectors
export const MODULE_NAME = 'theme';
export const selectTheme = (state) => state[MODULE_NAME].darkMode;

//Reducer
const initialState = {
	darkMode: false
};

export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case TOGGLE_THEME:
			return {
				darkMode: payload
			};
		default:
			return state;
	}
}
//ActionCreators

export const toggleTheme = (payload) => ({
	type: TOGGLE_THEME,
	payload
});
