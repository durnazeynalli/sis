import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { selectstartedChatsLists, initPriviteChats } from '../../redux/chats';
import { connect } from 'react-redux';
import { StartedChatsCover } from './StartedChatsCover';

const mapStateToProps = (state) => ({
	startedChats: selectstartedChatsLists(state)
});

export const StartedMessagesField = connect(mapStateToProps)(({ startedChats, navigation}) => {
	return (
		<FlatList
			style={styles.container}
			data={startedChats}
			showsHorizontalScrollIndicator={false}
			renderItem={({ item }) => {
				return (
					<StartedChatsCover
						item={item}
						navigation={navigation}
					/>
				);
			}}
		/>
	);
});
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 20,
		marginTop: 25,
		marginBottom:50,
	}
});
