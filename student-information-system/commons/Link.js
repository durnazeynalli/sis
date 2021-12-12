import React, { useCallback } from 'react';
import { Alert, Linking, StyleSheet, View } from 'react-native';
import { CustomText } from './CustomText';
import { TouchableOpacity } from 'react-native-gesture-handler';

const supportedURL = 'https://google.com';

const OpenURL = (url) => {
	// Checking if the link is supported for links with custom URL scheme.
	const supported = Linking.canOpenURL(url);

	if (supported) {
		// Opening the link with some app, if the URL scheme is "http" the web link should be opened
		// by some browser in the mobile
		Linking.openURL(url);
	} else {
		/*Todo handle error*/
		Alert.alert(`Don't know how to open this URL: ${url}`);
	}
};

export const Link = ({ link , styleText}) => {
	return (
		<TouchableOpacity onPress={() => OpenURL(link)}>
			<CustomText style={{...styleText}}>{link}</CustomText>
		</TouchableOpacity>
	);
};
