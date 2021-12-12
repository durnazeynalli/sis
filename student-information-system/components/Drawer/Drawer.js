import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { COLORS } from '../../styles';
import { DrawerDarkMode } from './DrawerDarkMode';
import { DrawerUserInfo } from './DrawerUserInfo';
import { DrawerFeedback } from './DrawerFeedback';
import { connect } from 'react-redux';
import { getAndListenGroup } from '../../redux/materials';
import { selectTheme } from '../../redux/theme';
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const Drawer = connect(mapStateToProps, { getAndListenGroup })(({ navigation, getAndListenGroup, darkMode }) => {
	useEffect(() => {
		const unsub = getAndListenGroup();
		return unsub;
	}, []);

	const theme = darkModeHandler(darkMode);

	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<LinearGradient
					colors={[ theme.drawerStart, theme.drawerEnd ]}
					style={{ ...StyleSheet.absoluteFill }}
					enabled
					keyboardVerticalOffset={100}
				/>
				<DrawerDarkMode navigation={navigation} />
				<DrawerUserInfo />
				<DrawerFeedback navigation={navigation} />
			</View>
		</SafeAreaProvider>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 250
	},
	gradient: {
		...StyleSheet.absoluteFill
	}
});
