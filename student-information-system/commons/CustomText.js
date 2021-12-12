import React from 'react';
import { Text } from 'react-native';
import { FontFamiles } from '../styles/fonts';

export const CustomText = ({ children, weight, style, ...rest }) => {
	return (
		<Text {...rest} style={[ { fontFamily: FontFamiles[weight] || FontFamiles.regular }, { ...style } ]}>
			{children}
		</Text>
	);
};
