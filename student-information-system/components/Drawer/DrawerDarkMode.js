import React from 'react';
import { Toggle } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../../styles';
import { toggleTheme, selectTheme } from '../../redux/theme';
import { connect } from 'react-redux';
import { CustomText } from '../../commons/CustomText';
import {SettingsIcon} from "../../commons/icons/SettingsIcon";
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)//true if dark mode false if light
});

export const DrawerDarkMode = connect(mapStateToProps, { toggleTheme })(({ navigation, darkMode, toggleTheme }) => {

	const theme = darkModeHandler(darkMode);

	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<View style={styles.header}>
					<SettingsIcon onPress={() => navigation.navigate('Settings')} />
					<View style={styles.toggleContainer}>
						<Toggle
							style={styles.switch}
							onChange={() => toggleTheme(!darkMode)}
							checked={darkMode}
							status="control"
						/>
						<CustomText weight="semi" style={{ color: theme.drawerText }}> dark mode </CustomText>
					</View>
				</View>
			</View>
		</SafeAreaProvider>
	);
});

const styles = StyleSheet.create({
	container: {
		marginTop: 25
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	userSettings: {
		width: 22,
		height: 22,
		marginLeft: 20
	},
	switch: {
		marginBottom: 5
	},
	toggleContainer: {
		marginRight: 10
	}
});
