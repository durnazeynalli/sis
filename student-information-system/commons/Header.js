import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomText } from './CustomText';
import { COLORS } from '../styles/colors';
import {selectTheme} from "../redux/theme";
import {connect} from "react-redux";
import {LeftAlignIcon} from "./icons/LeftAlign";
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const Header = connect(mapStateToProps, {})(({ title, darkMode }) => {

	const { toggleDrawer } = useNavigation();

	const theme = darkModeHandler(darkMode);

	return (
		<View style={{...styles.container, ...theme}}>
			<CustomText style={{...styles.heading, color: theme.textColor}}>{title}</CustomText>
			<LeftAlignIcon onPress={() => toggleDrawer()} style={styles.headerIcon}/>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		height: 60,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	heading: {
		fontSize: 22,
		marginTop: 8,
		textAlign:'center',
		marginLeft:22
	},
	headerIcon: {
		alignSelf: 'center',
		width: 22,
		height: 22,
		marginTop: 8,
		marginRight:22
	},
	indicator: {
		position: 'absolute',
		bottom: 0,
		height: 3,
		left: 160,
		backgroundColor: COLORS.acsentColor,
		width: 50
	}
});
