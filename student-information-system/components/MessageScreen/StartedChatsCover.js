import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { setChatID, setRecieverInfo } from '../../redux/chats';
import { ICONS_LIGHT } from '../../styles/iconsLight';
import { selectTheme } from '../../redux/theme';
import { timeHumanizer } from '../../utils/timeHumanizer';
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const StartedChatsCover = connect(mapStateToProps, {
	setChatID,
	setRecieverInfo
})(({ item, navigation, setChatID, setRecieverInfo, darkMode }) => {
	const humanTime = item.lastMessage.time ? timeHumanizer(item.lastMessage.time) : '';

	const onPressHandler = () => {
		setChatID(item.id),
			setRecieverInfo({
				userName: item.title,
				image: item.image
			});
		navigation.navigate('PriviteChat');
	};

	const theme = darkModeHandler(darkMode);

	return (
		<TouchableOpacity style={styles.container} onPress={onPressHandler}>
			<Image source={item.image ? { uri: item.image } : ICONS_LIGHT.userLight} style={styles.image} />
			<View style={styles.infoContainer}>
				<View>
					<CustomText style={{ ...styles.name, color: theme.textColor }}>{item.title}</CustomText>
					<CustomText numberOfLines={1} style={{ ...styles.text, color: theme.messageColor }}>
						{item.lastMessage.text}
					</CustomText>
				</View>
				<CustomText style={{ ...styles.time, color: theme.textColor }}>
					{humanTime[0]} {humanTime[1]}
				</CustomText>
			</View>
		</TouchableOpacity>
	);
});
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	image: {
		width: 55,
		height: 55,
		borderRadius: 40,
		borderWidth: 3,
		borderColor: COLORS.commentsColorLight,
		alignSelf: 'center',
		marginLeft: 3
	},
	infoContainer: {
	 	width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	name: {
		fontSize: 18
	},
	text: {
		fontSize: 12
	},
	time: {
		fontSize: 13,
		marginLeft: -17
	}
});
