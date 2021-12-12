import React from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { Footer, Header, ProfilePictureLoader, SettingsFileds } from '../components';
import { COLORS } from '../styles/colors';
import {selectTheme} from "../redux/theme";
import {connect} from "react-redux";
import {darkModeHandler} from "../styles/darkModeHandler";


const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const SettingsScreen = connect(mapStateToProps, {})(({ darkMode }) => {

	const theme = darkModeHandler(darkMode);

	return (
		<KeyboardAvoidingView style={{...styles.container, ...theme}} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
			<Header title="Settings" />
			<ScrollView>
				<ProfilePictureLoader />
				<SettingsFileds />
			</ScrollView>
			<Footer style={styles.footer} />
		</KeyboardAvoidingView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
