import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HomeScreenPostBubble } from './HomeScreenPostBubble';
import { connect } from 'react-redux';

import { selectPosts, getAndListenPosts, selectActivePosts } from '../../redux/posts';
import { selectUser, selectProfilePiC } from '../../redux/auth';

const mapStateToProps = (state) => {
	return {
	posts: selectPosts(state),
	activePostID: selectActivePosts(state),
	user: selectUser(state),
	profilePic:selectProfilePiC(state)
}};
//posts in home screen
export const HomeScreenPosts = connect(mapStateToProps, {
	getAndListenPosts
})(({ getAndListenPosts, posts, activePostID ,profilePic, navigation }) => {
	useEffect(
		() => {
			if (activePostID !== '') {
				const unsub = getAndListenPosts(activePostID);
				return unsub;
			}
		},
		[ activePostID ]
	);
	return (
		<FlatList
			keyExtractor={(item)=>item.ID}
			contentContainerStyle={styles.container}
			data={posts.slice(0).reverse()}
			renderItem={({ item }) => {
				return <HomeScreenPostBubble post={item} style={styles.post} profilePic={profilePic} navigation={navigation}/>;
			}}
		/>
	);
});

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		flexGrow: 1,
		paddingHorizontal:17,
		paddingBottom: 100,//TODO look into post going under footer
	}
	// post:{
	// 	...GLOBAL_STYLES.shaddowTop
	// }
});
