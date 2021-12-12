import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

// a component for wrapping a icon with TouchableOpacity and using is as btn since we have a lot of them in this project
export const IconBtn = ({ icon, style, onPress, children }) => {
	return (
		<TouchableOpacity style={[ styles.container, style ]} onPress={onPress}>
			{children}
			<Image source={icon} style={styles.btnImage} resizeMode="contain" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 22,
		height: 22,
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	btnImage: {
		width: '100%',
		height: '100%'
	}
});
