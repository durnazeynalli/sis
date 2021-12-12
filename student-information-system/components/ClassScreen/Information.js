import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { selectGroup } from '../../redux/materials';
import { selectTheme } from '../../redux/theme';
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	group: selectGroup(state),
	darkMode: selectTheme(state)
});

export const Information = connect(mapStateToProps)(({ group, darkMode }) => {

	const theme = darkModeHandler(darkMode);

	return (
		<View style={styles.information}>
			<CustomText style={{...styles.informationText, color: theme.textColor}}>Course teacher</CustomText>
			<CustomText weight="semi" style={{ ...styles.informationText, color: theme.headerColor, fontSize: 18 }}>
				{group.teacher}
			</CustomText>
		</View>
	);
});

const styles = StyleSheet.create({
	information: {
		marginHorizontal: 15,
		marginTop: 17
	},
	informationText: {
		marginBottom: 5,
		fontSize: 12
	}
});
