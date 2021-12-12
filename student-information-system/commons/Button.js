import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import { COLORS, ICONS_LIGHT, GLOBAL_STYLES } from '../styles';
import {connect} from "react-redux";
import {selectTheme} from "../redux/theme";
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});


export const Button = connect(mapStateToProps, {})(({ text, style, children, onPress, darkMode }) => {

	const theme = darkModeHandler(darkMode);

	return (
		<TouchableOpacity style={{...styles.btn, ...style, borderColor: theme.mainColor}} onPress={onPress}>
			<CustomText style={{...styles.text, color: theme.mainColor}}>{text}</CustomText>
			{children}
		</TouchableOpacity>
	)
});
const styles = StyleSheet.create({
	btn: {
		flexDirection: 'row',
		width: '45%',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderBottomWidth: 1,
		height: 40,
		borderRadius: 4,

	},
	text: {
		fontSize: 16,
	}
});
