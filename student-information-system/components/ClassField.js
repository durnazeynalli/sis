import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/colors';
import { CustomText } from '../commons/CustomText';
import { Link } from '../commons/Link';
import { GLOBAL_STYLES } from '../styles';
import {selectTheme} from "../redux/theme";
import {connect} from "react-redux";
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const ClassField = connect(mapStateToProps, {})
	(({ heading, topic, backgroundColor,  onPress , textStyles, style, darkMode }) => {

		const theme = darkModeHandler(darkMode);

	return (
		<TouchableOpacity style={{ ...styles.container, ...style, ...theme }} onPress={onPress}>
			<View style={{ ...styles.headerContainer, ...backgroundColor }}>
				<CustomText style={{ ...styles.heading, ...textStyles }}>{heading}</CustomText>
			</View>
			<View style={styles.row}>
				<Link link={topic} styleText={{...styles.topic, color: theme.linkColor}} />
			</View>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	container: {
		minHeight: 90,
		borderRadius: 4,
		...GLOBAL_STYLES.shaddowTop,
		marginVertical: 10,
		marginHorizontal:16
	},
	headerContainer: {
		borderColor: COLORS.backgroundDark,
		borderTopStartRadius: 4,
		borderTopEndRadius: 4,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 14
	},
	heading: {
		fontSize: 20,
		marginVertical: 5,
		marginHorizontal: 14
	},
	topic: {
		fontSize: 13,
		marginVertical: 10,
	}
});
