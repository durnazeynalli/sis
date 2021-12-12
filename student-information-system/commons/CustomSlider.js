import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS, ICONS_LIGHT } from '../styles';
import Slider from 'react-native-slide-to-unlock';
import { IconBtn } from './IconBtn';
import { CustomText } from './CustomText';

export const CustomSlider = ({ onEndReachedHandler }) => {
	return (
		<Slider
			onEndReached={onEndReachedHandler}
			containerStyle={styles.nextBtn}
			sliderElement={<IconBtn icon={ICONS_LIGHT.logInBtn} style={styles.sliderElement} />}
		>
			<CustomText style={{ color: COLORS.backgroundLight, fontSize: 17 }}>Slide to Join</CustomText>
		</Slider>
	);
};

const styles = StyleSheet.create({
	sliderElement: {
		// backgroundColor: COLORS.backgroundLight,
		height: 45,
		width: 64,
		borderRadius: 25
	},
	nextBtn: {
		width: '100%',
		height: 50,
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		borderWidth: 1,
		padding: 2,
		borderColor: COLORS.backgroundLight,
		position: 'absolute',
		bottom: -140
	}
});
