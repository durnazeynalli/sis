import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeScreenHeader, HomeScreenField, Footer, HomeScreenPosts } from '../components';
import { COLORS } from '../styles/colors';
import { connect } from 'react-redux';
import { getAndListenFeeds, selectFeeds } from '../redux/posts';
import { selectTheme } from '../redux/theme';
import { getAndListenChatUsers } from '../redux/chats';
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	feeds: selectFeeds(state),
	darkMode: selectTheme(state)
});
export const HomeScreen = connect(mapStateToProps, {
	getAndListenFeeds,
	getAndListenChatUsers
})(({ feeds, getAndListenFeeds, darkMode, navigation ,getAndListenChatUsers}) => {
	getAndListenChatUsers()
	useEffect(() => {
		const unsubscribe = getAndListenFeeds();
		return unsubscribe;
	}, []);

	const theme = darkModeHandler(darkMode);

	return (
		<View style={{ ...styles.container, ...theme }}>
			<HomeScreenHeader feeds={feeds} />
			<HomeScreenField />
			<HomeScreenPosts navigation={navigation} />
			<Footer style={styles.footer} screen="HomeStack" />
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	footer: {
		position: 'absolute',
		bottom: -0
	}
});
