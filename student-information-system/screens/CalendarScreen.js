import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Footer, Header } from '../components';
import { COLORS } from '../styles/colors';
import { CalendarAgenda } from '../components/CalendarScreen/CalendarAgenda';
import {selectTheme} from "../redux/theme";
import {connect} from "react-redux";
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const CalendarScreen = connect(mapStateToProps, {})(({ darkMode }) => {

	const theme = darkModeHandler(darkMode);

	return (
		<View style={{...styles.container, ...theme}}>
			<Header title="Calendar" />
			<CalendarAgenda/>
			<Footer style={styles.footer} screen="CallendarStack" />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	calendar: {
		marginVertical: 15
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
