import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { selectChatMessages, clearChatMessages, selectChatID } from '../../redux/chats';
import { connect } from 'react-redux';
import { PriviteMessagesBubble } from './PriviteMessageBubble';

const mapStateToProps = (state) => ({
	messages: selectChatMessages(state),
});

export const PriviteMessages = connect(mapStateToProps)(({ messages }) => {

	return (
		<FlatList
			data={messages.slice(0).reverse()}
			style={styles.container}
			inverted={true}
			renderItem={({ item }) => {
				return <PriviteMessagesBubble messages={item} />;
			}}
		/>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 17,
		marginBottom: 70
	}
});
