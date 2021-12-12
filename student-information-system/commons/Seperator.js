import React from 'react';
import { StyleSheet, View } from 'react-native';


//a component which is styles as line sincewe have a lot of lines and repaeting is not good:D
export const Seperator = ({ distance, color , style}) => {
	return <View style={{ ...styles.seperator, marginBottom: distance, backgroundColor: color , ...style}} />;
};
const styles = StyleSheet.create({
	seperator: {
		width: '93%',
		alignSelf: 'center',
		height: 2,
	}
});
