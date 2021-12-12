import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { COLORS } from '../../styles';
import { toggleLike, getAndListenLikes, selectLikes } from '../../redux/posts';
import { selectAuthUserID } from '../../redux/auth';
import {CustomText} from "../../commons/CustomText";

const mapStateToProps = (state) => ({
	likes: selectLikes(state),
	userID: selectAuthUserID(state)
});

export const HomeScreenPostLikes = connect(mapStateToProps, {
	toggleLike,
	getAndListenLikes
})(({ postID, toggleLike, userID, likes = {}, getAndListenLikes }) => {
	useEffect(() => {
		const unsub = getAndListenLikes(postID);
		return unsub;
	}, []);
	let likeStatus;
	let likesCount;
	if (likes[postID]) {
		likeStatus = !!likes[postID][userID];
		likesCount = Object.keys(likes[postID]).length - 1;
	}
	const [ isLiked, setIsLiked ] = useState(likeStatus);
	const handleLike = () => {
		setIsLiked((v) => !v);
		toggleLike(postID);
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleLike}>
				<AntDesign name="heart" size={17} color={isLiked ? COLORS.likeColor : COLORS.backgroundLight} />
			</TouchableOpacity>
			<CustomText style={styles.count}>{likesCount}</CustomText>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		padding: 15,
		flexDirection: 'row',
		alignItems: 'center'
	},
	count: {
		marginTop: -5,
		marginLeft: 10,
		fontSize: 13,
		color: COLORS.backgroundLight
	}
});
