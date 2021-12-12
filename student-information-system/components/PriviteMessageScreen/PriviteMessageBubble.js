import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../styles';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { selectAuthUserID } from '../../redux/auth';
import { selectTheme } from '../../redux/theme';
import { timeHumanizer } from '../../utils/timeHumanizer';
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	userID: selectAuthUserID(state),
	darkMode: selectTheme(state)
});

export const PriviteMessagesBubble = connect(mapStateToProps)(({ messages, userID, darkMode }) => {
	const styledTime = messages.time ? timeHumanizer(messages.time) : '';
	const chatStartedDay = styledTime[0];

	const theme = darkModeHandler(darkMode);

	const bubbleStyles = [ { ...styles.container, backgroundColor: theme.senderColor } ];
	const isSystem = messages.auther === 'system';
	const isMyMessage = messages.auther === userID;
	if (isSystem) bubbleStyles.push({ ...styles.systemBubble, backgroundColor: theme.messageColor });
	if (isMyMessage) bubbleStyles.push({ ...styles.userBubble, backgroundColor: theme.mainColor });

	return (
		<View style={bubbleStyles}>
			<CustomText style={styles.text}>{isSystem ? `${chatStartedDay}` : `${messages.text}`}</CustomText>
			<CustomText style={styles.time}>{styledTime[1]}</CustomText>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		marginVertical: 6,
		flexDirection: 'row',
		maxWidth: '90%',
		minWidth: '50%',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		alignSelf: 'flex-start'
	},
	text: {
		color: COLORS.backgroundLight,
		fontSize: 14
	},
	time: {
		color: COLORS.backgroundLight,
		fontSize: 11,
		position: 'absolute',
		right: 10,
		bottom: 6
	},
	systemBubble: {
		alignSelf: 'center',
		textAlign: 'center',
		minWidth: '40%',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 30
	},
	userBubble: {
		alignSelf: 'flex-end',
		padding: 5
	}
});
