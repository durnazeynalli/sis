import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CustomText } from '../../commons/CustomText';
import { COLORS } from '../../styles/colors';
import { Button } from '../../commons/Button';
import { GLOBAL_STYLES } from '../../styles';
import { Seperator } from '../../commons/Seperator';

export const Modal = ({ cancel, sent, text }) => {
	// click send button and confirm with this modal
	return (
		<View style={styles.container}>
			<CustomText style={styles.headerText}>{text}</CustomText>
			<Seperator />
			<View style={styles.row}>
				<Button onPress={cancel} text="Cancel" />
				<Button onPress={sent} text="YES! SEND" />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		borderRadius: 10,
		marginHorizontal: 40,
		marginVertical: 270,
		paddingVertical: 30,
		paddingHorizontal: 20,
		height: 150,
		backgroundColor: COLORS.backgroundLight,
		...GLOBAL_STYLES.shaddowTop
	},
	row: {
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row'
	},

	headerText: {
		textAlign: 'center',
		marginBottom: 20,
		color: COLORS.textColorDark
	},
	text: {
		textAlign: 'center',
		color: COLORS.backgroundLight
	}
});
