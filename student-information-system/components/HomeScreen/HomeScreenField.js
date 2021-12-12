import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import {COLORS, ICONS_LIGHT, GLOBAL_STYLES, ICONS_DARK} from '../../styles';
import { IconBtn } from '../../commons/IconBtn';
import { shareNewPost, selectActivePosts } from '../../redux/posts';
import { connect } from 'react-redux';
import {selectTheme} from "../../redux/theme";
import {OrigamiIcon} from "../../commons/icons/OrigamiIcon";
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	activePostID: selectActivePosts(state),
	darkMode: selectTheme(state)
});

export const HomeScreenField = connect(mapStateToProps, { shareNewPost })(({ activePostID, shareNewPost, darkMode }) => {
	const [ newPost, setNewPost ] = useState('');

	const sharePostHandler = () => {
		if (newPost.trim() !== '') {
			shareNewPost(activePostID, newPost);
			setNewPost('');
		}
	};

	const theme = darkModeHandler(darkMode);

	return (
		<View style={{ ...styles.container, ...GLOBAL_STYLES.shaddowBottum, ...theme }}>
			<TextInput
				value={newPost}
				onChangeText={setNewPost}
				placeholderTextColor = {theme.placeholderColor}
				style={{...styles.field, color: theme.placeholderColor}}
				placeholder="what is on your mind...."
			/>
			<OrigamiIcon style={styles.icon} onPress={sharePostHandler} />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		height: 100,
		flexDirection: 'row',
		borderBottomEndRadius: 50,
		borderBottomStartRadius: 50,
	},
	icon: {
		width: 45,
		height: 45,
		alignSelf: 'center',
	},
	field: {
		width: '90%',
		height: '100%',
		textAlign:"auto",
		flexWrap:'wrap',
	}
});
