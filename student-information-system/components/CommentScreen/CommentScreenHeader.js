import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { HomeScreenPostLikes } from '../index';
import { ICONS_LIGHT, COLORS, GLOBAL_STYLES } from '../../styles';

import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { selectTheme } from '../../redux/theme';
import { selectSelectedPost } from '../../redux/comments';
import { selectChatsUsers } from '../../redux/chats';
import { BackIcon } from '../../commons/icons/BackIcon';
import { PostCommennts } from '../HomeScreen/PostComments';
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	selectedPost: selectSelectedPost(state),
	usersList: selectChatsUsers(state),
	darkMode: selectTheme(state)
});

export const CommentScreenHeader = connect(
	mapStateToProps
)(({ navigation, darkMode, selectedPost, usersList = [] }) => {

	const theme = darkModeHandler(darkMode);

	const auther = Object.keys(usersList)
		.map((key) => ({
			ID: key,
			...usersList[key]
		}))
		.filter((user) => user.ID === selectedPost.autherID);

	return (
		<View style={{ ...theme, ...styles.postContainer }}>
			<View style={{ ...styles.container, ...theme }}>
				<BackIcon onPress={() => navigation.goBack()} />
				<Image
					style={{ ...styles.profilePiC, borderColor: theme.mainColor }}
					source={auther[0].profilePiC ? { uri: auther[0].profilePiC } : ICONS_LIGHT.userLight}
				/>
				<View style={styles.nameContainer}>
					<CustomText style={{ ...styles.name, color: theme.textColor }}>{auther[0].name}</CustomText>
				</View>
			</View>

			<View style={{ ...styles.post, ...theme }}>
				<CustomText style={{ color: theme.textColor, marginHorizontal: 20, marginBottom: 30 }}>
					{selectedPost.text}
				</CustomText>
			</View>
			<View style={{ ...styles.likesContainer, backgroundColor: theme.mainColor }}>
				{selectedPost.likes && <HomeScreenPostLikes postID={selectedPost.ID} />}
				<PostCommennts post={selectedPost} navigation={navigation} />
			</View>
		</View>
	);
});
const styles = StyleSheet.create({
	postContainer: {
		width: '100%',
		minHeight: 100,
		borderBottomEndRadius: 30,
		borderBottomStartRadius: 30,
		backgroundColor: COLORS.backgroundLight,
	},
	container: {
		flexDirection: 'row',
		width: '100%',
		height: 60,
		alignItems: 'center'
	},
	profilePiC: {
		width: 40,
		height: 40,
		borderRadius: 30,
		marginHorizontal: 15,
		borderWidth: 2
	},
	nameContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 18
	},
	userName: {
		fontSize: 12,
		color: COLORS.acsentColor
	},
	post: {
		width: '100%',
		minHeight: 60,
		marginBottom: -15,
		paddingTop: 10
	},
	likesContainer: {
		flexDirection: 'row',
		width: '100%',
		marginTop: 10,
		height:50,
		borderBottomStartRadius: 30,
		borderBottomEndRadius: 30,
		...GLOBAL_STYLES.shaddowBottum
	}
});
