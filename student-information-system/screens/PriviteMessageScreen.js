import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { COLORS } from '../styles';
import { PriviteMessagesField, PriviteMessages } from '../components';
import { getAndListenChatMessages, selectChatID } from '../redux/chats';
import { PriviteChatsHeader } from '../components/PriviteMessageScreen/PriviteChatHeader';
import {selectTheme} from "../redux/theme";
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	chatID: selectChatID(state),
	darkMode: selectTheme(state)
});

export const PriviteMessageScreen = connect(mapStateToProps, {
	getAndListenChatMessages,
})(({ chatID, getAndListenChatMessages,  navigation, darkMode }) => {

	useEffect(() => {
		const unsub = getAndListenChatMessages(chatID);
		return unsub;
	}, [chatID]);

	const theme = darkModeHandler(darkMode);

	return (
		<View style={{...styles.container, ...theme}}>
			<PriviteChatsHeader navigation={navigation} />
			<PriviteMessages />
			<PriviteMessagesField style={styles.field} chatID={chatID} />
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	field: {
		position: 'absolute',
		bottom: 20
	}
});
