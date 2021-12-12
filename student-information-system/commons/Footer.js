import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../styles/colors';
import { GLOBAL_STYLES } from '../styles';
import { FOOTER_ICONS_DATA } from '../styles/footerIconsData';
import { selectTheme } from '../redux/theme';
import { getAndListenChatUsers } from '../redux/chats';
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const Footer = connect(mapStateToProps, {
	getAndListenChatUsers
})(({ style, screen, darkMode, getAndListenChatUsers }) => {

	const [ indicator, setIndicator ] = useState('');
	//indicator will be a props for indicate wich page we r in in future
	const { navigate } = useNavigation();
	const navigationHandler = (screen) => {
		setIndicator(screen);
		if (screen === 'HomeStack') {
			//incase user searched on search bar and forget to clean her search resulst re apload users
			//so in posts you wouldnt have any problems
			getAndListenChatUsers();
		}
		navigate(screen);
	};
	const theme = darkModeHandler(darkMode);

	return (
		<View style={{ ...styles.container, ...style, ...GLOBAL_STYLES.shaddowTop, ...theme }}>
			{FOOTER_ICONS_DATA.map((item) => {
				return (
					<TouchableOpacity
						style={[ styles.btn ]}
						key={item.name}
						onPress={() => navigationHandler(item.name)}
					>
						<item.Icon />
						{item.name === screen && (
							<View style={{ ...styles.indicator, backgroundColor: theme.mainColor }} />
						)}
					</TouchableOpacity>
				);
			})}
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		height: 50,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		zIndex: 199
	},
	btn: {
		width: 22,
		height: 22,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	indicator: {
		position: 'absolute',
		bottom: -11,

		alignSelf: 'center',
		width: 40,
		height: 3
	}
});
//FOOTER_ICONS_DATA.map((item) => (
// 	<TouchableOpacity style={[ styles.btn ]} onPress={navigationHandler(item.name)}>
// 	<Image source={item.icon} style={styles.icon} />
// 	{item.name !== indicator && <View style={styles.indicator} />}
// </TouchableOpacity>
