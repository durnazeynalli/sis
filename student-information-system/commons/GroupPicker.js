import React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { COLORS } from '../styles';


export const GroupPicker = ({item, onChange}) => {
	return (
		<RNPickerSelect
			style={{ inputIOS: { ...styles.label }, inputAndroid: { ...styles.androidStyles } }}
			onValueChange={(value) => onChange(value)}
			items={item}
			placeholder={{ label: 'group' }}
		/>
	);
};
const styles = StyleSheet.create({
	label: {
		marginTop: 10,
		fontSize: 16,
		color: COLORS.backgroundLight,
   },
   androidStyles:{
		borderWidth:1,
		color: COLORS.backgroundLight,
		borderColor:COLORS.backgroundLight,
		borderRadius:30,
		marginTop: 10,
		fontSize: 16,
	}
})
